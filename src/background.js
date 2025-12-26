function sendShowMessage(details) {
  if (details.frameId === 0) { // Top level only, no iframes
    browser.tabs.sendMessage(details.tabId, { action: SHOW_STOP_BUTTON });
  }
}
function sendHideMessage(details) {
  if (details.frameId === 0) { // Top level only, no iframes
    browser.tabs.sendMessage(details.tabId, { action: HIDE_STOP_BUTTON });
  }
}

browser.webNavigation.onBeforeNavigate.addListener(sendShowMessage);
browser.webNavigation.onCompleted.addListener(sendHideMessage);
browser.webNavigation.onErrorOccurred.addListener(sendHideMessage);
