# Content Collections - Universal PWA

**A mobile-first Progressive Web App for delivering bite-sized content organized into collections.**

Optimized for Android (Galaxy A15) with clean white/black design, bronze/gold accents, and 24px readable text. Works completely offline after first load.

---

## 🎯 Overview

This is a **universal content delivery system** that works for ANY type of content:

- ✅ **Content-agnostic** - Works for wisdom, business tips, fitness, recipes, language learning, etc.
- ✅ **Flexible structure** - Add unlimited collections with any number of items
- ✅ **Dual navigation** - Linear mode (sequential) or Shuffle mode (randomized)
- ✅ **Auto-save progress** - Never lose your place
- ✅ **Works offline** - Full PWA with service worker caching
- ✅ **Android-optimized** - Installable to home screen, mobile-first design

---

## 📱 Features

### Navigation
- **☰ Menu Button** - Opens collection menu to jump to any collection
- **🔀 Shuffle Button** - Toggles between Linear and Shuffle modes
- **Tap Navigation** - Tap left side = previous, tap right side = next
- **Swipe Gestures** - Swipe left/right to navigate items
- **Keyboard Support** - Arrow keys, spacebar, 's' for shuffle, 'm' for menu

### Modes
- **Linear Mode (Default)** - Read collections in order, item by item
- **Shuffle Mode** - All items from all collections randomized

### Progress Tracking
- **Progress Bar** - Shows position within current collection
- **Item Counter** - Displays current item / total items
- **Auto-Save** - Progress saved to localStorage automatically
- **Shuffle Memory** - Remembers shuffle order when closing/reopening

---

## 🚀 Installation on Android

### Method 1: Chrome Browser (Recommended)
1. Open the app URL in Chrome on your Android device
2. Tap the **menu icon (⋮)** in the top-right corner
3. Select **"Add to Home screen"** or **"Install app"**
4. Choose a name and tap **"Add"**
5. The app icon appears on your home screen
6. Open it like any other app - works offline!

### Method 2: Samsung Internet
1. Open the app URL in Samsung Internet
2. Tap the **menu icon** at the bottom
3. Select **"Add page to"** → **"Home screen"**
4. Confirm and the app is installed

### Testing Offline
1. Open the app with internet connected (first load)
2. Navigate through a few items (caches images)
3. Turn off WiFi and mobile data
4. App continues working perfectly!

---

## 📂 Project Structure

```
/
├── index.html              # Main HTML structure
├── manifest.json           # PWA configuration
├── sw.js                   # Service worker (offline capability)
├── css/
│   └── style.css          # All styles (mobile-first)
├── js/
│   ├── app.js             # App logic, navigation, state management
│   └── content.js         # ⭐ CONTENT DATA - Edit this to customize
├── icon.svg               # Vector icon
├── icon-192.png           # App icon (192x192)
├── icon-512.png           # App icon (512x512)
└── README.md              # This file
```

---

## ✏️ How to Customize Content

### Step 1: Open `js/content.js`

This is the ONLY file you need to edit to change all content.

### Step 2: Understand the Structure

```javascript
const COLLECTIONS = [
    {
        id: 1,                           // Unique number
        title: "Your Collection Name",   // Collection title
        description: "Brief description", // Subtitle
        items: [                          // Array of content items
            {
                text: "Your content here. Keep it 2-4 sentences for best readability.",
                image: "https://images.unsplash.com/photo-xxxxx?w=800&h=600&fit=crop"
            },
            {
                text: "Second item content...",
                image: "https://images.unsplash.com/photo-yyyyy?w=800&h=600&fit=crop"
            }
            // Add as many items as you want
        ]
    },
    // Add more collections...
];
```

### Step 3: Add a New Collection

Copy this template and paste it into the `COLLECTIONS` array:

```javascript
{
    id: 13,  // Increment the ID
    title: "Your New Collection",
    description: "What this collection is about",
    items: [
        {
            text: "First piece of content. Short and impactful.",
            image: "https://images.unsplash.com/photo-example?w=800&h=600&fit=crop"
        },
        {
            text: "Second piece of content.",
            image: "https://images.unsplash.com/photo-example2?w=800&h=600&fit=crop"
        }
    ]
}
```

### Step 4: Add Items to Existing Collection

Just add more objects to the `items` array:

```javascript
items: [
    { text: "Item 1...", image: "url1" },
    { text: "Item 2...", image: "url2" },
    { text: "Item 3...", image: "url3" },  // ← Add new items here
    { text: "Item 4...", image: "url4" }
]
```

---

## 🖼️ Finding Images

### Option 1: Unsplash (Free, High-Quality)
```
https://images.unsplash.com/photo-PHOTO_ID?w=800&h=600&fit=crop
```

Visit [unsplash.com](https://unsplash.com), find an image, copy the photo ID from URL.

### Option 2: Your Own Images
Upload to any CDN or hosting service, use the direct image URL.

### Option 3: Placeholder Images
```
https://picsum.photos/800/600
```

---

## 🎨 Content Ideas (Universal Template)

This app works for **any** bite-sized content:

### Business & Productivity
- Leadership principles
- Sales techniques
- Marketing strategies
- Time management tips
- Negotiation tactics

### Health & Wellness
- Workout routines
- Nutrition facts
- Mental health practices
- Meditation guidance
- Sleep hygiene tips

### Education & Learning
- Language learning phrases
- Historical facts
- Science concepts
- Math formulas
- Study techniques

### Creative & Personal
- Daily affirmations
- Writing prompts
- Photography tips
- Recipe instructions
- Travel recommendations

### Professional Development
- Career advice
- Networking strategies
- Interview preparation
- Skill development
- Personal branding

---

## 🔧 Advanced Customization

### Change App Colors

Edit `css/style.css` and modify the CSS variables:

```css
:root {
    --color-background: #FFFFFF;  /* White background */
    --color-text: #000000;        /* Black text */
    --color-bronze: #8B7355;      /* Bronze accent */
    --color-gold: #D4AF37;        /* Gold accent */
}
```

### Change Font Size

```css
:root {
    --font-size-large: 24px;   /* Main content text */
    --font-size-medium: 18px;  /* Headers */
    --font-size-small: 14px;   /* Labels */
}
```

### Change App Name

1. Edit `index.html` - Change `<title>` tag
2. Edit `manifest.json` - Change `name` and `short_name`

### Disable Shuffle Mode

In `index.html`, remove or comment out the shuffle button:

```html
<!-- <button id="shuffleBtn" class="header-btn">... -->
```

---

## 💾 Data Storage

### What Gets Saved?
- Current collection index
- Current item index
- Shuffle mode on/off
- Shuffled item order
- Navigation hint seen status

### Where?
All data stored in **browser localStorage** (device-only, not synced).

### Clear Saved Progress
Open browser DevTools → Application → Local Storage → Delete keys starting with `cc_`

Or add this to browser console:
```javascript
localStorage.clear();
location.reload();
```

---

## 🔄 Updating Content

### After Editing `content.js`:

1. **If app is already installed:**
   - Force refresh: Pull down on the page
   - Or close and reopen the app
   - Service worker will update automatically

2. **Clear cache if needed:**
   - Browser settings → Site data → Clear for this site
   - Or uninstall and reinstall from home screen

---

## 📊 Default Content Structure

**12 Collections, 175 Total Items:**

| Collection | Items | Topic Example |
|------------|-------|---------------|
| Collection 1 | 16 | Morning Reflections |
| Collection 2 | 17 | Strength in Adversity |
| Collection 3 | 16 | Daily Wisdom |
| Collection 4 | 51 | Character Development (largest) |
| Collection 5 | 36 | Evening Contemplations |
| Collection 6 | 39 | Relationships & Community |
| Collection 7 | 6 | Focus & Productivity |
| Collection 8 | 6 | Health & Vitality |
| Collection 9 | 6 | Learning & Growth |
| Collection 10 | 6 | Money & Resources |
| Collection 11 | 6 | Creativity & Expression |
| Collection 12 | 6 | Purpose & Meaning |

**You can:**
- Delete any collection
- Add unlimited new collections
- Have 1 item or 1,000 items per collection
- Mix different topics freely

---

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Mobile-first responsive design
- **Vanilla JavaScript** - No frameworks or dependencies
- **Service Worker** - Offline-first PWA architecture
- **localStorage** - Client-side state persistence
- **Web App Manifest** - Android installation support

### Browser Support
- ✅ Chrome for Android (recommended)
- ✅ Samsung Internet
- ✅ Firefox for Android
- ✅ Edge for Android

### Performance
- **First Load:** ~2-3 seconds (downloads all assets)
- **Subsequent Loads:** Instant (cached)
- **Offline:** Full functionality
- **Image Loading:** Progressive with placeholders

---

## 🐛 Troubleshooting

### App Won't Install
- Ensure you're using HTTPS (required for PWA)
- Check if browser supports PWA installation
- Try clearing browser cache and reloading

### Images Not Loading
- Check image URLs are valid
- Ensure images allow cross-origin requests (CORS)
- Unsplash images work out of the box

### Progress Not Saving
- Check browser localStorage is enabled
- Ensure not in private/incognito mode
- Try clearing cache and starting fresh

### Offline Not Working
- Must load app online at least once
- Service worker needs time to cache assets
- Wait a few seconds after first load, then test offline

---

## 🚢 Deployment

### Option 1: GitHub Pages (Free)
1. Create GitHub repository
2. Upload all files
3. Settings → Pages → Deploy from main branch
4. Access at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Drag and drop project folder to netlify.com
2. Get instant URL
3. Configure custom domain if desired

### Option 3: Vercel (Free)
1. Import project from GitHub
2. Deploy with one click
3. Automatic HTTPS and CDN

### Important: Use HTTPS
PWAs require HTTPS to work. All free hosting options above provide this automatically.

---

## 📝 Usage Tips

### For Best Experience:
- Use 2-4 sentences per item (optimal readability)
- Choose high-quality, relevant images
- Group related content into collections
- Keep collection titles short and clear
- Test on actual device, not just desktop browser

### Content Writing Guidelines:
- Write in active voice
- Be concise and impactful
- One idea per item
- Make each item standalone (no dependencies)
- Use clear, simple language

---

## 🎯 Use Cases

### Personal Development
Create collections for daily affirmations, goal reminders, or habit prompts.

### Education
Build study flashcards, language learning phrases, or exam prep content.

### Business
Compile sales scripts, product knowledge, company values, or training material.

### Creative
Gather writing prompts, design principles, or creative exercises.

### Wellness
Store workout routines, meditation guides, or healthy recipes.

---

## 📄 License

This template is free to use for personal and commercial projects. No attribution required.

---

## 🙋 Support

### Common Questions

**Q: Can I use this for commercial purposes?**  
A: Yes, completely free for any use.

**Q: Can I add more than 12 collections?**  
A: Yes, unlimited collections supported.

**Q: Does it work on iOS?**  
A: Yes, but installation experience differs (Add to Home Screen via Share button).

**Q: Can I add videos or audio?**  
A: Currently supports images + text. Video/audio would require modification.

**Q: Is there a backend or database?**  
A: No, everything is client-side. Content is hardcoded in `content.js`.

---

## 🎉 Quick Start Checklist

- [ ] Install app to Android home screen
- [ ] Navigate through a few items to understand flow
- [ ] Try shuffle mode
- [ ] Test offline capability
- [ ] Open `js/content.js` in code editor
- [ ] Modify existing item text
- [ ] Add a new item to a collection
- [ ] Create a completely new collection
- [ ] Change images to your own
- [ ] Refresh app to see changes
- [ ] Share with others!

---

## 🔮 Future Enhancement Ideas

- [ ] Collections favoriting
- [ ] Search functionality
- [ ] Notes/journaling per item
- [ ] Export progress as PDF
- [ ] Multiple language support
- [ ] Dark mode toggle
- [ ] Audio narration option
- [ ] Social sharing
- [ ] Analytics dashboard

---

**Built with ❤️ for universal content delivery.**

**Start creating your own collections today!** 🚀
