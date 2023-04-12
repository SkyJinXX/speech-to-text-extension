# Speech to Text Chrome Extension

This Chrome extension enables you to convert your spoken words into text and insert the text into the active input field of the current web page. The extension leverages the Web Speech API for speech recognition and works with most input fields, including `<input>`, `<textarea>`, and content-editable `<div>` elements.

## Features
* Click the extension icon or press Alt+L to toggle speech recognition on and off.
* Continuous speech recognition mode that automatically restarts when it stops.
* Supports English language input.
## Installation
1. Download or clone this repository to your local machine.

2. Open the Chrome browser, and navigate to chrome://extensions/.

3. Enable "Developer mode" by toggling the switch in the top right corner.

4. Click the "Load unpacked" button, and select the directory containing the downloaded or cloned repository.

5. The extension should now appear in your list of installed extensions, and its icon should be visible in the browser toolbar.

## Usage
1. Click the extension icon or press Alt+U to start speech recognition.

2. Speak into your microphone, and the extension will convert your speech into text and insert it into the currently focused input field on the web page.

3. Click the extension icon or press Alt+U again to stop speech recognition.

Limitations
* The extension relies on the Web Speech API, which might not be available in all browsers or environments.