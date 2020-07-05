$(function() {
  // 「#js_sideMenuButton」のclickイベント→「#sidebar」を開く
  $('#sidebar-button--open').click(function() {
    $('#sidebar').addClass('is-open');
    $('#sidebar__background').fadeIn();
  });

  // 「#js_close_button」のclickイベント→「#sidebar」を閉じる
  $('#js_close_button').click(function() {
      $('#sidebar').removeClass('is-open');
      $('#sidebar__background').fadeOut();
  });
  

  var $win = $(window);

  $win.on('load resize', function() {
    var windowWidth = window.innerWidth;

    if (windowWidth >= 769) {
      // PCの処理
      $('#sidebar').removeClass('is-open');
      $('#sidebar__background').fadeOut();
    } 
  });
});