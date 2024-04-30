$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    infinite: true,
  });

  $("#burger").on("click", () => {
    $(".menu").first().addClass("menu-burger");
    $(".vis").addClass("d-block");
    $(".menu-item").last().addClass("calc-right");
    $(".close").addClass("d-block");
    $(".burger").addClass("d-none");
  });

  $("#close").on("click", () => {
    $(".menu").first().removeClass("menu-burger");
    $(".vis").removeClass("d-block");
    $(".menu-item").last().removeClass("calc-right");
    $(".close").removeClass("d-block");
    $(".burger").removeClass("d-none");
  });

  var clickedTab = $("#catalog .active-products");
  var tabWrapper = $(".gallery");
  var activeTab = $(".gallery.active-products");

  $("#drop-down").on("click", (e) => {
    $("#catalog").toggleClass("active-menu");
  });

  $(".products-menu-item").on("click", (e) => {
    changeCatalogName(e);
    $(".products-menu-item").removeClass("active-products");
    $(e.target).addClass("active-products");
    clickedTab = $("#catalog .active-products");
    console.log($("#catalog .active-products"));
    tabWrapper.removeClass("active-products");
    let clickedTabIndex = clickedTab.index();
    tabWrapper.eq(clickedTabIndex).addClass("active-products");
  });

  let changeCatalogName = (e) => {
    $("#catalog").toggleClass("active-menu");
    $("#drop-down span").text($(e.target).text());
  };

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".menu").length) {
      $("#catalog").removeClass("active-menu");
    }
  });

  $(".btn-up input[type=file]").change(function () {
    let filename = $(this).val().replace(/.*\\/, "");
    $("#fileName").val(filename);
  });

  let popupCount = $(".count-popup");
  let popupPrice = $(".price-popup");
  let formCount = $("#count-form");
  let msg = $(".message");

  $(".count-open").on("click", function () {
    window.scrollTo(0, 0);
    popupCount.show();
    formCount.show();
  });

  $(".close-popup").on("click", function () {
    popupCount.hide();
    popupPrice.hide();
    msg.hide();
  });

  $(".price-know").on("click", function () {
    window.scrollTo(0, 0);
    popupPrice.show();
  });

  formCount.validate({
    // Set the validation rules
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true,
      },
      stone: "required",
      size: "required",
    },
    // Specify the validation error messages
    messages: {
      name: "Введите Ваше имя",
      phone: "Введите Ваш номер телефона",
      email: "Введите корректный почтовый адрес",
      stone: "Выберите с камнями/без камней",
      size: "Выберите размер",
    },
    // submit handler
    submitHandler: function (form) {
      //form.submit();

      formCount.hide();
      msg.show();
      popupCount.fadeOut(4000, "linear", function () {
        formCount.resetForm();
      });
    },
  });
});
