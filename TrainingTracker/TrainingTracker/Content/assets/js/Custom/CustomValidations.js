﻿$('#password, #confirm_password').on('keyup', function () {
    if ($('#password').val() == $('#confirm_password').val()) {
     
    } else
        $('#message').html('Not Matching').css('color', 'red');
});