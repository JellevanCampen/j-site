// Update copyright date
$(document).ready(function() {
  var d = new Date();
  $("#copyright-notice").html("Copyright &#9400; " + d.getFullYear() + " Jelle van Campen");
});

// Hook up collapsed navigation drawer
var drawerEl = document.querySelector('.mdc-temporary-drawer');
var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
var drawer = new MDCTemporaryDrawer(drawerEl);
document.querySelector('.page-navigation-collapsed').addEventListener('click', function() {
  drawer.open = true;
});
drawerEl.addEventListener('MDCTemporaryDrawer:open', function() {
  console.log('Received MDCTemporaryDrawer:open');
});
drawerEl.addEventListener('MDCTemporaryDrawer:close', function() {
  console.log('Received MDCTemporaryDrawer:close');
});