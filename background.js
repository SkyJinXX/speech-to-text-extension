async function toggleSpeechToText() {
  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.sendMessage(activeTab.id, { command: "toggleRecognition" });
}

chrome.action.onClicked.addListener(() => {
  toggleSpeechToText();
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle_speech_to_text") {
    toggleSpeechToText();
  }
});
