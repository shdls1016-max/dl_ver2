$('.hamburgerBox.mo').click(function(){
    $('header').toggleClass('on');
    $('.hamburger').toggleClass('on');
    
    if($('header').hasClass('on')){
        setTimeout(()=>{
            $('h1').addClass('hide');
        },400);
        $('body').addClass('no-scroll')
    } else{
        $('h1').removeClass('hide');
        $('.gnb > li').removeClass('open');
         $('body').removeClass('no-scroll')
    }
});

$('.gnb > li > a').on('click', function (e) {

  // ✅ 햄버거(모바일 메뉴) 열린 상태가 아니면 그냥 링크 동작
  if (!$('header').hasClass('on')) return;

  e.preventDefault();

  const $li = $(this).parent();

  if ($li.find('.lnb').length===0){
    window.location.href = $(this).attr('href');;
    return;
  }

  if ($li.hasClass('open')) {
    $li.removeClass('open');
  } else {
    $('.gnb > li').removeClass('open'); // 다른 메뉴 닫기
    $li.addClass('open');
  }
});