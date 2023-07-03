function tbs_click() {
    var pageLink = encodeURIComponent(window.location.href);
    var pageTitle = encodeURIComponent(document.title);
    var shareUrl = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`;
    socialWindow(shareUrl, 570, 570);
  }
  
  function fbs_click() {
    var pageLink = encodeURIComponent(window.location.href);
    var pageTitle = encodeURIComponent(document.title);
    var shareUrl = `https://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`;
    socialWindow(shareUrl, 570, 570);
  }
  
  function ins_click() {
    var pageLink = encodeURIComponent(window.location.href);
    var shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`;
    socialWindow(shareUrl, 570, 570);
  }
  
  function red_click() {
    var pageLink = encodeURIComponent(window.location.href);
    var shareUrl = `https://www.reddit.com/submit?url=${pageLink}`;
    socialWindow(shareUrl, 570, 570);
  }
  
  function pin_click() {
    var pageLink = encodeURIComponent(window.location.href);
    var pageTitle = encodeURIComponent(document.title);
    var shareUrl = `https://www.pinterest.com/pin/create/button/?&url=${pageLink}&description=${pageTitle}`;
    socialWindow(shareUrl, 570, 570);
  }
  
  function socialWindow(pageLink, width, height) {
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
    window.open(pageLink, "", params);
  }
  