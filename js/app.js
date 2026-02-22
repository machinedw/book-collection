/* ===================================
   CONTENT COLLECTIONS - MAIN APP LOGIC
   Progressive Web App for Android
   =================================== */

// ========== STATE MANAGEMENT ==========
const AppState = {
    currentCollectionIndex: 0,
    currentItemIndexInCollection: 0,
    isShuffleMode: false,
    shuffledItems: [],
    currentShuffleIndex: 0,
    hasSeenNavHint: false
};

// ========== LOCALSTORAGE KEYS ==========
const STORAGE_KEYS = {
    COLLECTION_INDEX: 'cc_collection_index',
    ITEM_INDEX: 'cc_item_index',
    SHUFFLE_MODE: 'cc_shuffle_mode',
    SHUFFLED_ITEMS: 'cc_shuffled_items',
    SHUFFLE_INDEX: 'cc_shuffle_index',
    NAV_HINT_SEEN: 'cc_nav_hint_seen'
};

// ========== DOM ELEMENTS ==========
let elements = {};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    loadStateFromStorage();
    setupEventListeners();
    renderCollectionMenu();
    displayCurrentItem();
    showNavHintIfNeeded();
});

function initializeElements() {
    elements = {
        menuBtn: document.getElementById('menuBtn'),
        shuffleBtn: document.getElementById('shuffleBtn'),
        menuOverlay: document.getElementById('menuOverlay'),
        closeMenuBtn: document.getElementById('closeMenuBtn'),
        menuContent: document.getElementById('menuContent'),
        collectionTitle: document.getElementById('collectionTitle'),
        progressBar: document.getElementById('progressBar'),
        contentArea: document.getElementById('contentArea'),
        itemImage: document.getElementById('itemImage'),
        itemText: document.getElementById('itemText'),
        currentItem: document.getElementById('currentItem'),
        totalItems: document.getElementById('totalItems'),
        modeIndicator: document.getElementById('modeIndicator'),
        navHint: document.getElementById('navHint')
    };
}

// ========== STATE PERSISTENCE ==========
function loadStateFromStorage() {
    // Load linear mode position
    const savedCollectionIndex = localStorage.getItem(STORAGE_KEYS.COLLECTION_INDEX);
    const savedItemIndex = localStorage.getItem(STORAGE_KEYS.ITEM_INDEX);
    
    if (savedCollectionIndex !== null) {
        AppState.currentCollectionIndex = parseInt(savedCollectionIndex, 10);
    }
    if (savedItemIndex !== null) {
        AppState.currentItemIndexInCollection = parseInt(savedItemIndex, 10);
    }
    
    // Load shuffle mode state
    const savedShuffleMode = localStorage.getItem(STORAGE_KEYS.SHUFFLE_MODE);
    if (savedShuffleMode === 'true') {
        AppState.isShuffleMode = true;
        
        // Load shuffled order
        const savedShuffledItems = localStorage.getItem(STORAGE_KEYS.SHUFFLED_ITEMS);
        if (savedShuffledItems) {
            AppState.shuffledItems = JSON.parse(savedShuffledItems);
        }
        
        // Load shuffle position
        const savedShuffleIndex = localStorage.getItem(STORAGE_KEYS.SHUFFLE_INDEX);
        if (savedShuffleIndex !== null) {
            AppState.currentShuffleIndex = parseInt(savedShuffleIndex, 10);
        }
    }
    
    // Load nav hint state
    const navHintSeen = localStorage.getItem(STORAGE_KEYS.NAV_HINT_SEEN);
    if (navHintSeen === 'true') {
        AppState.hasSeenNavHint = true;
    }
}

function saveStateToStorage() {
    // Save linear mode position
    localStorage.setItem(STORAGE_KEYS.COLLECTION_INDEX, AppState.currentCollectionIndex);
    localStorage.setItem(STORAGE_KEYS.ITEM_INDEX, AppState.currentItemIndexInCollection);
    
    // Save shuffle mode state
    localStorage.setItem(STORAGE_KEYS.SHUFFLE_MODE, AppState.isShuffleMode);
    
    if (AppState.isShuffleMode) {
        localStorage.setItem(STORAGE_KEYS.SHUFFLED_ITEMS, JSON.stringify(AppState.shuffledItems));
        localStorage.setItem(STORAGE_KEYS.SHUFFLE_INDEX, AppState.currentShuffleIndex);
    }
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Menu controls
    elements.menuBtn.addEventListener('click', openMenu);
    elements.closeMenuBtn.addEventListener('click', closeMenu);
    elements.menuOverlay.addEventListener('click', (e) => {
        if (e.target === elements.menuOverlay) {
            closeMenu();
        }
    });
    
    // Shuffle mode toggle
    elements.shuffleBtn.addEventListener('click', toggleShuffleMode);
    
    // Touch navigation (tap zones)
    setupTapNavigation();
    
    // Swipe navigation
    setupSwipeNavigation();
    
    // Keyboard navigation
    setupKeyboardNavigation();
}

// ========== MENU FUNCTIONALITY ==========
function openMenu() {
    elements.menuOverlay.classList.add('active');
    updateMenuActiveState();
}

function closeMenu() {
    elements.menuOverlay.classList.remove('active');
}

function renderCollectionMenu() {
    elements.menuContent.innerHTML = '';
    
    COLLECTIONS.forEach((collection, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.dataset.collectionIndex = index;
        
        menuItem.innerHTML = `
            <div class="menu-item-title">${collection.title}</div>
            <div class="menu-item-meta">
                <span class="menu-item-description">${collection.description}</span>
                <span class="menu-item-count">${collection.items.length} items</span>
            </div>
        `;
        
        menuItem.addEventListener('click', () => {
            jumpToCollection(index);
            closeMenu();
        });
        
        elements.menuContent.appendChild(menuItem);
    });
}

function updateMenuActiveState() {
    const menuItems = elements.menuContent.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        if (index === AppState.currentCollectionIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function jumpToCollection(collectionIndex) {
    if (AppState.isShuffleMode) {
        // In shuffle mode, switch back to linear mode and jump
        AppState.isShuffleMode = false;
        updateShuffleButton();
        updateModeIndicator();
    }
    
    AppState.currentCollectionIndex = collectionIndex;
    AppState.currentItemIndexInCollection = 0;
    
    displayCurrentItem();
    saveStateToStorage();
}

// ========== SHUFFLE MODE ==========
function toggleShuffleMode() {
    AppState.isShuffleMode = !AppState.isShuffleMode;
    
    if (AppState.isShuffleMode) {
        // Entering shuffle mode
        generateShuffledOrder();
        AppState.currentShuffleIndex = 0;
    } else {
        // Exiting shuffle mode - stay at current collection/item
        // Position already tracked in linear mode variables
    }
    
    updateShuffleButton();
    updateModeIndicator();
    displayCurrentItem();
    saveStateToStorage();
}

function generateShuffledOrder() {
    // Create array of all items with their collection info
    const allItems = [];
    COLLECTIONS.forEach((collection, collectionIndex) => {
        collection.items.forEach((item, itemIndex) => {
            allItems.push({
                collectionIndex,
                itemIndex,
                collectionTitle: collection.title,
                text: item.text,
                image: item.image
            });
        });
    });
    
    // Fisher-Yates shuffle algorithm
    for (let i = allItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allItems[i], allItems[j]] = [allItems[j], allItems[i]];
    }
    
    AppState.shuffledItems = allItems;
}

function updateShuffleButton() {
    if (AppState.isShuffleMode) {
        elements.shuffleBtn.classList.add('active');
    } else {
        elements.shuffleBtn.classList.remove('active');
    }
}

function updateModeIndicator() {
    elements.modeIndicator.textContent = AppState.isShuffleMode ? 'Shuffle Mode' : 'Linear Mode';
}

// ========== NAVIGATION ==========
function nextItem() {
    if (AppState.isShuffleMode) {
        // Shuffle mode navigation
        if (AppState.currentShuffleIndex < AppState.shuffledItems.length - 1) {
            AppState.currentShuffleIndex++;
        } else {
            // Reached end in shuffle mode, stay at last item
            return;
        }
    } else {
        // Linear mode navigation
        const currentCollection = COLLECTIONS[AppState.currentCollectionIndex];
        
        if (AppState.currentItemIndexInCollection < currentCollection.items.length - 1) {
            // Move to next item in current collection
            AppState.currentItemIndexInCollection++;
        } else {
            // End of current collection, move to next collection
            if (AppState.currentCollectionIndex < COLLECTIONS.length - 1) {
                AppState.currentCollectionIndex++;
                AppState.currentItemIndexInCollection = 0;
            } else {
                // Reached end of all collections, stay at last item
                return;
            }
        }
    }
    
    displayCurrentItem();
    saveStateToStorage();
    hideNavHint();
}

function previousItem() {
    if (AppState.isShuffleMode) {
        // Shuffle mode navigation
        if (AppState.currentShuffleIndex > 0) {
            AppState.currentShuffleIndex--;
        } else {
            // At beginning in shuffle mode, stay at first item
            return;
        }
    } else {
        // Linear mode navigation
        if (AppState.currentItemIndexInCollection > 0) {
            // Move to previous item in current collection
            AppState.currentItemIndexInCollection--;
        } else {
            // Beginning of current collection, move to previous collection
            if (AppState.currentCollectionIndex > 0) {
                AppState.currentCollectionIndex--;
                const prevCollection = COLLECTIONS[AppState.currentCollectionIndex];
                AppState.currentItemIndexInCollection = prevCollection.items.length - 1;
            } else {
                // At beginning of all collections, stay at first item
                return;
            }
        }
    }
    
    displayCurrentItem();
    saveStateToStorage();
    hideNavHint();
}

// ========== DISPLAY ==========
function displayCurrentItem() {
    let item, collectionTitle, currentPosition, totalCount;
    
    if (AppState.isShuffleMode) {
        // Get item from shuffled array
        const shuffledItem = AppState.shuffledItems[AppState.currentShuffleIndex];
        item = {
            text: shuffledItem.text,
            image: shuffledItem.image
        };
        collectionTitle = shuffledItem.collectionTitle;
        currentPosition = AppState.currentShuffleIndex + 1;
        totalCount = AppState.shuffledItems.length;
        
        // Update progress bar (based on shuffle progress)
        const progressPercentage = ((currentPosition) / totalCount) * 100;
        elements.progressBar.style.width = `${progressPercentage}%`;
        
        // Also update linear mode tracking for when we switch back
        AppState.currentCollectionIndex = shuffledItem.collectionIndex;
        AppState.currentItemIndexInCollection = shuffledItem.itemIndex;
    } else {
        // Get item from current collection in linear mode
        const currentCollection = COLLECTIONS[AppState.currentCollectionIndex];
        item = currentCollection.items[AppState.currentItemIndexInCollection];
        collectionTitle = currentCollection.title;
        
        // Calculate position within current collection
        currentPosition = AppState.currentItemIndexInCollection + 1;
        totalCount = currentCollection.items.length;
        
        // Update progress bar (based on collection progress)
        const progressPercentage = (currentPosition / totalCount) * 100;
        elements.progressBar.style.width = `${progressPercentage}%`;
    }
    
    // Update display
    elements.collectionTitle.textContent = collectionTitle;
    elements.itemText.textContent = item.text;
    elements.itemImage.src = item.image;
    elements.itemImage.alt = `Illustration for: ${item.text.substring(0, 50)}...`;
    
    // Update counter
    elements.currentItem.textContent = currentPosition;
    elements.totalItems.textContent = totalCount;
    
    // Update menu active state if menu is open
    if (elements.menuOverlay.classList.contains('active')) {
        updateMenuActiveState();
    }
}

// ========== TAP NAVIGATION ==========
function setupTapNavigation() {
    elements.contentArea.addEventListener('click', (e) => {
        // Don't navigate if clicking on image or text directly
        if (e.target.closest('.content-wrapper')) {
            return;
        }
        
        const rect = elements.contentArea.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const halfWidth = rect.width / 2;
        
        if (clickX < halfWidth) {
            // Left side tap - previous
            previousItem();
        } else {
            // Right side tap - next
            nextItem();
        }
    });
}

// ========== SWIPE NAVIGATION ==========
function setupSwipeNavigation() {
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // pixels
    
    elements.contentArea.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    elements.contentArea.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // Swipe right - previous
                previousItem();
            } else {
                // Swipe left - next
                nextItem();
            }
        }
    }
}

// ========== KEYBOARD NAVIGATION ==========
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Ignore if menu is open
        if (elements.menuOverlay.classList.contains('active')) {
            return;
        }
        
        switch(e.key) {
            case 'ArrowRight':
            case ' ': // Spacebar
            case 'n': // Next
                e.preventDefault();
                nextItem();
                break;
            case 'ArrowLeft':
            case 'p': // Previous
                e.preventDefault();
                previousItem();
                break;
            case 's': // Shuffle
                e.preventDefault();
                toggleShuffleMode();
                break;
            case 'm': // Menu
                e.preventDefault();
                openMenu();
                break;
            case 'Escape':
                closeMenu();
                break;
        }
    });
}

// ========== NAVIGATION HINT ==========
function showNavHintIfNeeded() {
    if (!AppState.hasSeenNavHint) {
        elements.navHint.classList.add('visible');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            hideNavHint();
        }, 5000);
    }
}

function hideNavHint() {
    if (!AppState.hasSeenNavHint) {
        elements.navHint.classList.remove('visible');
        AppState.hasSeenNavHint = true;
        localStorage.setItem(STORAGE_KEYS.NAV_HINT_SEEN, 'true');
    }
}

// ========== UTILITY FUNCTIONS ==========
// Prevent default touch behaviors that might interfere
document.addEventListener('touchmove', (e) => {
    // Allow scrolling within content area
    if (!e.target.closest('.content-area') && !e.target.closest('.menu-content')) {
        e.preventDefault();
    }
}, { passive: false });

// Log app initialization
console.log('Content Collections App initialized');
console.log(`Total collections: ${COLLECTIONS.length}`);
console.log(`Total items: ${TOTAL_ITEMS}`);
