$(function () {

  /* ハンバーガーメニュー */
  $('.hamburger').on('click', function () {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  $('#mask').on('click', function () {
    $('#header').removeClass('open');
  });

  $('#navi a').on('click', function () {
    $('#header').removeClass('open');
  });

  /* トップに戻るボタン */
  let pagetop = $('#to-top');
  pagetop.hide(); //最初は非表示

  $(window).scroll(function () {
    //701px以上スクロールされたら表示
    if ($(this).scrollTop() > 700) {
      pagetop.fadeIn();
      //上記以外は非表示
    } else {
      pagetop.fadeOut();
    }
  });

  /* ボタンがクリックされたら実行 */
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);

    return false;
  });
});