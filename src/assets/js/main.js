;

function DOMready() {

    let $cabinetPersonalDataBtn = $("[data-main-form]");

    $cabinetPersonalDataBtn.on("submit", function (e) {

        $("[data-main-form-input]").each(function (indx, item) {
            checkCabinetPersonalInput(item);
        });

        if (!disabledEnabledBtnCabinetPersonal(2)) {
            e.preventDefault();
        }

    });

    function checkCabinetPersonalInput(thisInput) {
        let $this = $(thisInput);
        let name = $this.data("main-form-input");
        let val = $this.val();

        switch (name) {
            case "name":
                if (val.length > 0 && !$this.hasClass("success")) {
                    setInputNoteTextAndStatus($this, "success");

                } else if (!$this.hasClass("error")) {
                    setInputNoteTextAndStatus($this, "error");

                }
                break;
            case "email":
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && rv_email.test(val)) {
                    setInputNoteTextAndStatus($this, "success");
                } else {
                    setInputNoteTextAndStatus($this, "error",);

                }
                break;


        }

    }

    function disabledEnabledBtnCabinetPersonal(countSuccessItems) {
        if($("[data-main-form-input-wrap].success").length == countSuccessItems) {
            return true;

        } else {
            return false;

        }

    }

    function setInputNoteTextAndStatus(inputItem, status) {
        let inputWrap = inputItem.closest("[data-main-form-input-wrap]");
        inputWrap.addClass(status);

        if (status == "success") {
            inputWrap.removeClass("error");
        }

        if (status == "error") {
            inputWrap.removeClass("success");
        }

    }

}

document.addEventListener("DOMContentLoaded", DOMready);



