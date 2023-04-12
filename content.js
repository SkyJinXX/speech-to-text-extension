function insertTextAtCursor(text) {
  const el = document.activeElement;
  const tagName = el.tagName.toLowerCase();

  if (tagName === "input" || tagName === "textarea") {
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const value = el.value;

    el.value = value.slice(0, start) + text + value.slice(end);
    el.selectionStart = el.selectionEnd = start + text.length;
  } else if (tagName === "div" && el.getAttribute("contenteditable") === "true") {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    range.deleteContents();
    const textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    selection.removeAllRanges();
    selection.addRange(range);

    const inputEvent = new Event("input", { bubbles: true, cancelable: true }); // 主动触发input事件，有些网页是靠侦听这个来运行的
    el.dispatchEvent(inputEvent);
  }
}

if (!window.recognition) {
  window.recognition = new webkitSpeechRecognition();
}
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.continuous = true;

recognition.onresult = (event) => {
  const transcript = event.results[event.results.length - 1][0].transcript;
  insertTextAtCursor(transcript);
};

recognition.onend = () => {
  if (!recognition.manualStop) {
    recognition.start();
  }
};

chrome.runtime.onMessage.addListener((request) => {
  if (request.command === "toggleRecognition") {
    if (recognition.recognizing) {
      recognition.manualStop = true;
      recognition.stop();
      recognition.recognizing = false;
    } else {
      recognition.start();
      recognition.recognizing = true;
    }
  }
});
