// Toggle reader mode on action click by messaging the active tab
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;
  chrome.tabs.sendMessage(tab.id, { type: 'TOGGLE_READER_ACTION' }, () => {
    if (chrome.runtime.lastError) {
      // Ignore tabs we can't access (e.g., chrome://) to avoid noisy errors
      console.warn(chrome.runtime.lastError.message);
    }
  });
});
