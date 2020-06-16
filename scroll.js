let scrollDown = document.getElementById('scrollDown');
let scrollUp = document.getElementById('scrollUp');

scrollUp.onclick = function() {
  scrollTo('0');
}

scrollDown.onclick = function() {
  scrollTo('document.body.scrollHeight');
}

function scrollTo(position) {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: 'window.scrollTo({top: ' + position + ', left: 0, behavior: "smooth"})'
        }
      );
    }
  );
}