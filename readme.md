## Auto Reload Backend - Browser Extension

### Overview

Auto Reload Backend for browsers is a powerful extension designed to work in conjunction with the Auto Reload Backend VS Code extension. This browser extension enhances your development experience by automatically reloading your browser tabs when changes are detected in your backend code.

### Features

- Automatic browser reloading: Instantly refreshes your browser when backend changes are detected.
- WebSocket communication: Establishes a secure WebSocket connection with the VS Code extension.
- Multiple tab support: Manages reloading for multiple tabs and windows simultaneously.
- Visual indicators: Provides clear feedback about the connection status and reload events.

### Configuration

Configure the extension by right-clicking on the browser extension icon and selecting "Options" or "Settings":

- **WebSocket URL:** Set the WebSocket URL if you're using a custom server setup.
- **Reload Delay:** Set a delay (in milliseconds) before reloading after receiving a change notification.
- **Notification Settings:** Configure visual and audio notifications for reload events.

### Troubleshooting

- Ensure both the VS Code extension and browser extension are up to date.
- Check that the VS Code extension is running and has established a WebSocket connection.
- Verify that your web application is running on the expected port.
- Try disabling other extensions that might interfere with page reloading.
- If problems persist, file an issue on our GitHub repository.

### Privacy and Security

This extension communicates only with your local development environment. It does not collect or transmit any personal data or browsing information.

### Installation

Visit your browser's extension store:

- [Chrome Web Store](https://chrome.google.com/webstore/detail/auto-reload-backend/lpimhinbjbjlbodindddkbdmhnkdahim)
- [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/auto-reload-backend/)
- [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/auto-reload-backend/omdngbadgbohjfjhccgmlicmjccnjjbn)
- [Safari Extensions](https://apps.apple.com/us/app/auto-reload-backend/id1630715631)

### Usage

1. Ensure the Auto Reload Backend VS Code extension is installed and running in your project.
2. Open your web application in the browser where you've installed this extension.
3. Click on the Auto Reload Backend icon in your browser toolbar to activate it for the current tab.
4. Start coding in VS Code and see your changes instantly reflected in the browser!

### Contributing

Contributions are welcome! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to submit issues, feature requests, and pull requests.

### Support

- [FAQ](https://github.com/autoreloadbackend/browser-extension/wiki/FAQ)
- [GitHub Issues](https://github.com/autoreloadbackend/browser-extension/issues)
- [Email Support](support@autoreloadbackend.com)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
