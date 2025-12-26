let stopButton = null;

function ensureStopButton() {
  if (stopButton !== null) return;
  
  stopButton = document.createElement('button');
  stopButton.id = 'stop-loading-button';
  stopButton.innerHTML = '✕';
  stopButton.title = 'Stop loading';
  
  stopButton.addEventListener('click', () => {
    window.stop();
    hideStopButton();
  });
  
  document.documentElement.appendChild(stopButton);
}

function showStopButton() {
  ensureStopButton();
  stopButton.style.display = 'flex';
}

function hideStopButton() {
  if (stopButton) {
    stopButton.style.display = 'none';
  }
}

browser.runtime.onMessage.addListener((message) => {
  if (message.action === SHOW_STOP_BUTTON) {
    showStopButton();
  } else if (message.action === HIDE_STOP_BUTTON) {
    hideStopButton();
  }
});
