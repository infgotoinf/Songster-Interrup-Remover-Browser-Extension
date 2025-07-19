// Main function to handle interruptions
function removeInterruptions() {
  // Attempt to click "continue with interruptions" link
  const continueLink = document.querySelector('.rq1ph a[href=""]');
  if (continueLink && continueLink.textContent.includes('continue with interruptions')) {
    continueLink.click();
    console.log('Clicked "continue with interruptions"');
    return;
  }

  // Attempt to click "Use Synth" button
  const synthButton = document.querySelector('button[aria-label="Use Synth"]');
  if (synthButton && synthButton.textContent.includes('Use Synth')) {
    synthButton.click();
    console.log('Clicked "Use Synth" button');
    return;
  }

  // Remove popup container if still visible
  const popupContainer = document.querySelector('.rq25k');
  if (popupContainer && window.getComputedStyle(popupContainer).visibility === 'visible') {
    popupContainer.remove();
    console.log('Removed popup container');
  }
}

// Run immediately when page loads
removeInterruptions();

// Create observer for dynamic content
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.addedNodes.length) {
      removeInterruptions();
    }
  }
});

// Start observing DOM changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Periodic check as safety net
setInterval(removeInterruptions, 1000);