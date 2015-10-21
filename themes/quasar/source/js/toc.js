(function() {
  'use strict';

  var container = document.getElementById('container');
  var toc = document.getElementById('article-toc');
  var tocTop = document.getElementById('article-toc-top');
  var headerHeight = document.getElementById('header').clientHeight;

  if (!toc) {
    return;
  }

  function updateSidebarPosition() {
    var scrollTop = container.scrollTop;

    if (scrollTop > headerHeight) {
      toc.classList.add('top');
    }
    else {
      toc.classList.remove('top');
    }
  }

  container.addEventListener('scroll', function() {
    window.requestAnimationFrame(updateSidebarPosition);
  });

  updateSidebarPosition();

  tocTop.addEventListener('click', function(e) {
    e.preventDefault();
    container.scrollTop = 0;
  });
}());
