# Speech to Text Chrome Extension


This Chrome extension allows you to convert spoken words into text and then insert the text into the active input field of the current web page. The extension takes advantage of the Web Speech API for speech recognition and is compatible with most input fields, including `<input>`, `<textarea>`, and content-editable `<div>` elements.
## Features
* Click the extension icon or press Alt+, to toggle speech recognition on and off.
* Microphone icon in the lower-right corner of the web page for easy access, which also displays the current status of speech recognition (red when active, black when inactive).
* Continuous speech recognition mode that restarts automatically when it stops.
* "That's All" keyword: When you say "That's all" (regardless of case), the extension will automatically submit the input (equivalent to pressing Enter).
* Supports English language input.
## Installation
1. Download or clone this repository to your local machine.

2. Open the Chrome browser, and navigate to chrome://extensions/.

3. Enable "Developer mode" by toggling the switch in the top right corner.

4. Click the "Load unpacked" button, and select the directory containing the downloaded or cloned repository.

5. The extension should now appear in your list of installed extensions, and its icon should be visible in the browser toolbar.

## Usage
1. Click the extension icon or press Alt+, to start speech recognition, or click the microphone icon in the lower-right corner of the web page.
2. Speak into your microphone. The extension will convert your speech into text and insert it into the currently focused input field on the web page.
3. Saying "That's all" will stop the speech recognition and submit the input.
4. To stop speech recognition without submitting, click the extension icon or press Alt+, again, or click the microphone icon.

## Limitations
* The extension relies on the Web Speech API, which might not be available in all browsers or environments.