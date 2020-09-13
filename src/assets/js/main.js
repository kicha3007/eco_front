;

function DOMready() {

    $("[data-header-burger]").on("click", function () {
        $("[data-mobile-menu]").toggleClass("active");



    });

    $(".js--general-wrap").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        infinite: false,
        // autoplaySpeed: 10000,
    });

    $("[data-slow-scroll-to]").on("click", function (e) {
        e.preventDefault();
        slowScroll.call(this);
    });

    // Скролл к нужному элементу
    function slowScroll(elemToScroll, offset) {
        var offset = (typeof offset !== "undefined" && offset) ? offset : 0;
        var $elemToScroll = (typeof elemToScroll !== "undefined" && elemToScroll) ? $(elemToScroll) : $(this).data("slow-scroll-to");

        $('html, body').animate({
            scrollTop: $($elemToScroll).offset().top - offset
        }, 1000);
        return false;
    }


}

document.addEventListener("DOMContentLoaded", DOMready);



