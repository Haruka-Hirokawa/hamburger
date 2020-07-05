$(function() {
  // 「#js_sideMenuButton」のclickイベント→「#sidebar」を開く
  $('#js_sideMenuButton').click(function() {
    $('#sidebar').addClass('is-open');
    $('#sidebar__background').fadeIn();
    // ？　$('body').addClass('is_open');　？
  });

  // 「#js_close_button」のclickイベント→「#sidebar」を閉じる
  $('#js_close_button').click(function() {
      $('#sidebar').removeClass('is-open');
      $('#sidebar__background').fadeOut();
      // ？　$('body').removeClass('is_open');　？
  });
  
});