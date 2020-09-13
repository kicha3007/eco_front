;

function DOMready() {

    $("[data-header-burger]").on("click", function () {
        $("[data-mobile-menu]").toggleClass("active");



    })


}

document.addEventListener("DOMContentLoaded", DOMready);



