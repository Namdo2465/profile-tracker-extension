# Profile Tracker Extension

A simple and lightweight Chrome extension to save and manage URLs. Perfect for keeping track of profiles, leads, or any web pages you want to reference later.

## Features

- 💾 **Save Current Tab**: Quickly save the URL of your current browser tab with one click
- ✍️ **Manual Entry**: Type or paste any URL to save it to your list
- 📋 **Persistent Storage**: All saved URLs are stored locally in your browser
- 🔗 **Quick Access**: Click any saved URL to open it in a new tab
- 🗑️ **Clear All**: Double-click to delete all saved URLs

## Installation

1. Clone this repository or download the source code:

   ```bash
   git clone https://github.com/yourusername/profile-tracker-extension.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable **Developer mode** (toggle in the top-right corner)

4. Click **Load unpacked**

5. Select the directory containing the extension files

6. The Profile Tracker extension should now appear in your browser toolbar!

## Usage

### Saving URLs

- **Save Current Tab**: Click the "SAVE TAB" button to save the URL of the currently active tab
- **Manual Entry**: Type or paste a URL in the input field and click "SAVE INPUT"

### Managing URLs

- **Open URL**: Click on any saved URL in the list to open it in a new tab
- **Delete All**: Double-click the "DELETE ALL" button to clear all saved URLs

## File Structure

```
profile-tracker-extension/
├── manifest.json      # Extension configuration
├── index.html         # Popup interface
├── index.css          # Styling
├── index.js           # Main functionality
└── icon.png           # Extension icon
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Chrome Extension Manifest V3
- Local Storage API

## Permissions

This extension requires the following permission:

- `tabs` - To access and save the current tab's URL

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Author

Created by Nam Do
