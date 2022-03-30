function send_mail() {
    var content = jQuery("#content").val();
    var optiona = jQuery("#optiona").val();
    var optionb = jQuery("#optionb").val();
    var optionc = jQuery("#optionc").val();
    var optiond = jQuery("#optiond").val();
    var answer = jQuery("#answer").val();
    var creater = jQuery("#creater").val();
    var flag = 0;
    if (content == "") {
        jQuery("#content").addClass('invalid');
        jQuery("#val_content").html("Content is required");
        flag = 1;
    } else {
        jQuery("#content").removeClass('invalid');
        jQuery("#val_content").html("");
    }

    if (optiona == "") {
        jQuery("#optiona").addClass('invalid');
        jQuery("#val_optiona").html("Options are required");
        flag = 1;
    } else {
        jQuery("#optiona").removeClass('invalid');
        jQuery("#val_optiona").html("");
    }

    if (optionb == "") {
        jQuery("#optionb").addClass('invalid');
        jQuery("#val_optionb").html("Options are required");
        flag = 1;
    } else {
        jQuery("#optionb").removeClass('invalid');
        jQuery("#val_optionb").html("");
    }

    if (optionc == "") {
        jQuery("#optionc").addClass('invalid');
        jQuery("#val_optionc").html("Options are required");
        flag = 1;
    } else {
        jQuery("#optionc").removeClass('invalid');
        jQuery("#val_optionc").html("");
    }

    if (optiond == "") {
        jQuery("#optiond").addClass('invalid');
        jQuery("#val_optiond").html("Options are required");
        flag = 1;
    } else {
        jQuery("#optiond").removeClass('invalid');
        jQuery("#val_optiond").html("");
    }

    if (creater == "") {
        jQuery("#creater").addClass('invalid');
        jQuery("#val_creater").html("Creater is required");
        flag = 1;
    } else {
        jQuery("#creater").removeClass('invalid');
        jQuery("#val_creater").html("");
    }

    if (flag == 1) {
        return false;
    }
    var data = {
        "Content": content,
        "OptionA": optiona,
        "OptionB": optionb,
        "OptionC": optionc,
        "OptionD": optiond,
        "Answer": answer,
        "Creater": creater
    };

    jQuery.ajax({
        type: "POST",
        crossOrigin: true,
        url: "https://script.google.com/macros/s/AKfycbxBSXsMa6NxZG8g7cQlb0GGbzXgFpAre23Ee0fIwgQEsWxijYafPyaUy05j4w2icnnhYQ/exec",
        data: data,
        success: function (response) {
            if (response == '1') {
                jQuery('#err_message').show();
            } else {
                jQuery('#suce_message').show();
            }
            jQuery("#contact-form")[0].reset();
        }
    });
}