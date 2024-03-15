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

  var clickedTab = $("#catalog .active-products");
	var tabWrapper = $(".gallery");
	var activeTab = $(".gallery.active-products");

  $('#drop-down').on( "click", (e) => {
    $('#catalog').toggleClass('active-menu');
  } );

  $('.products-menu-item').on( "click", (e) => {
    changeCatalogName(e);
    $('.products-menu-item').removeClass('active-products');
    $(e.target).addClass("active-products");
    clickedTab = $("#catalog .active-products");
    console.log( $("#catalog .active-products"))
    tabWrapper.removeClass('active-products');
    let clickedTabIndex = clickedTab.index();
    tabWrapper.eq(clickedTabIndex).addClass("active-products");
  } );

  let changeCatalogName = (e) => {
    $('#catalog').toggleClass('active-menu');
    $('#drop-down span').text($(e.target).text());
  }

  $(document).on("click", function(event){
    if(!$(event.target).closest(".menu").length){
      $('#catalog').removeClass('active-menu');
    }
});