var $pagecontainer = document.querySelector('.page-container');

var $page = document.querySelectorAll('.page');
var $view = document.querySelectorAll('.view');
var $button = document.querySelector('button');

$pagecontainer.addEventListener('click', pageView);
$button.addEventListener('click', pageView);
// function for viewswapping
function pageView(event) {
  if (!event.target.matches('.page')) {
    return;
  }
  for (var i = 0; i < $page.length; i++) {
    if ($page[i] === event.target) {
      $page[i].className = 'page active';
    } else {
      $page[i].className = 'page';
    }
  }
  var dataView = event.target.getAttribute('data-view');
  for (var j = 0; j < $view.length; j++) {
    if ($view[j].getAttribute('data-view') === dataView) {
      $view[j].className = 'column-half view';
    } else {
      $view[j].className = 'view hidden';
    }
  }
}
