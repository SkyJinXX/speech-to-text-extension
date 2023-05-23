async function toggleSpeechToText() {
  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(activeTab.id, { command: "toggleRecognition" });
  chrome.scripting.executeScript({
    target: { tabId: activeTab.id },
    function: function() {
      const button = document.getElementById("speechToTextButton");
      if (button) {
        button.style.display = "block";
      }
    }
  });
}

chrome.action.onClicked.addListener(() => {
  toggleSpeechToText();
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle_speech_to_text") {
    toggleSpeechToText();
  }
});
