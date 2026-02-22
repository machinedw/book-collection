/* ===================================
   CONTENT COLLECTIONS - SERVICE WORKER
   Offline-First PWA Implementation
   =================================== */

const CACHE_VERSION = 'cc-v1.0.0';
const CACHE_NAME = `content-collections-${CACHE_VERSION}`;

// Assets to cache on install
const STATIC_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './css/style.css',
    './js/app.js',
    './js/content.js',
    './icon.svg',
    './icon-192.png',
    './icon-512.png'
];

// ========== INSTALL EVENT ==========
// Cache static assets when service worker is installed
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('[Service Worker] Installation complete');
                // Force the waiting service worker to become the active service worker
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('[Service Worker] Installation failed:', error);
            })
    );
});

// ========== ACTIVATE EVENT ==========
// Clean up old caches when new service worker activates
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        // Delete old caches that don't match current version
                        if (cacheName.startsWith('content-collections-') && cacheName !== CACHE_NAME) {
                            console.log('[Service Worker] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[Service Worker] Activation complete');
                // Take control of all pages immediately
                return self.clients.claim();
            })
    );
});

// ========== FETCH EVENT ==========
// Serve cached content when offline, fetch from network when online
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Only handle same-origin requests and Unsplash images
    if (url.origin !== location.origin && !url.hostname.includes('unsplash.com')) {
        return;
    }
    
    event.respondWith(
        caches.match(request)
            .then((cachedResponse) => {
                // Return cached response if found
                if (cachedResponse) {
                    // Still fetch from network in background to update cache
                    fetchAndCache(request);
                    return cachedResponse;
                }
                
                // If not in cache, fetch from network
                return fetchAndCache(request);
            })
            .catch((error) => {
                console.error('[Service Worker] Fetch failed:', error);
                
                // Return offline fallback if available
                if (request.destination === 'document') {
                    return caches.match('./index.html');
                }
            })
    );
});

// ========== HELPER FUNCTIONS ==========
function fetchAndCache(request) {
    return fetch(request)
        .then((response) => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type === 'error') {
                return response;
            }
            
            // Clone response (can only be consumed once)
            const responseToCache = response.clone();
            
            // Add to cache for future offline use
            caches.open(CACHE_NAME)
                .then((cache) => {
                    // Only cache successful GET requests
                    if (request.method === 'GET') {
                        cache.put(request, responseToCache);
                    }
                });
            
            return response;
        })
        .catch((error) => {
            console.error('[Service Worker] Fetch and cache failed:', error);
            throw error;
        });
}

// ========== MESSAGE HANDLER ==========
// Listen for messages from the app
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName.startsWith('content-collections-')) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        );
    }
});

// ========== BACKGROUND SYNC (optional enhancement) ==========
// If the browser supports background sync
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-content') {
        event.waitUntil(
            // Sync logic here if needed in future
            Promise.resolve()
        );
    }
});

console.log('[Service Worker] Script loaded');
