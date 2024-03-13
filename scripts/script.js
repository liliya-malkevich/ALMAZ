console.log($('.slider'))
$('.slider').slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
  infinite:true,
  });

  $('#burger').on( "click", () => {
    $('.menu').first().addClass('menu-burger');
    $('.vis').addClass('d-block');
    $('.menu-item').last().addClass('calc-right')
    $('.close').addClass('d-block');
    $('.burger').addClass('d-none');
  } );

  $('#close').on( "click", () => {
    $('.menu').first().removeClass('menu-burger');
    $('.vis').removeClass('d-block');
    $('.menu-item').last().removeClass('calc-right');
    $('.close').removeClass('d-block');
    $('.burger').removeClass('d-none');
  } );

  $('#drop-down').on( "click", (e) => {
    $('#catalog').toggleClass('active-menu');
  } );

  $('.products-menu-item').on( "click", (e) => {
    $('#catalog').toggleClass('active-menu');
    console.log($(e.target).text())
    $('#drop-down span').text($(e.target).text());
  } );
