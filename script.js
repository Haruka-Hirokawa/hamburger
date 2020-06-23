$(function() {
  // 「#js_sideMenuButton」のclickイベント→「#sidebar」を開く
  $('#js_sideMenuButton').click(function() {
    $('#js_sidebar').addClass('is_open');
    // ？　$('#sidebar_background').addClass('is_open');　？
    // ？　$('body').addClass('is_open');　？
  });

  // 「#js_close_button」のclickイベント→「#sidebar」を閉じる
  $('#js_close_button').click(function() {
      $('#js_sidebar').removeClass('is_open');
      // ？　$('#sidebar_background').removeClass('is_open');　？
      // ？　$('body').removeClass('is_open');　？
  });
  
});