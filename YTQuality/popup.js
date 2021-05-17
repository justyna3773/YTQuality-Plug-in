// Add listener for start button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("start").addEventListener('click', process_video);
});


function process_video() {
    chrome.tabs.executeScript(null, {file: 'quality_set.js'});
}
  