$(function() {
    $(".form_button").click(function() {
        var name = $("#name");
        var email = $("#email");
        var phone = $("#number");
        var message = $("#massage");
        var isValid = true;
        isValid = validateText(name);
        isValid = validateEmail(email);
        isValid = validateText(phone);
        isValid = validateText(message);
        if (isValid){
            sendRequest(name, email, phone, message)
        }
    });
    
    
    function validateEmail(field) {
        field.css("border-color", "#fff");
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValidEmail = re.test(field.val());
        if (!isValidEmail){
            fieldNotValid(field)
        }
        return isValidEmail
    }

    function fieldNotValid(field){
        field.css("border-color", "red");
    }

    function validateText(field) {
        field.css("border-color", "#fff");
        var val = field.val();
        if (val === "" || val === undefined) {
            fieldNotValid(field);
            return false;
        }
        return true
    }


    function sendRequest(name, email, phone, message){
        var contactData = {
            email: email.val(),
            message: message.val(),
            phone: phone.val(),
            name: name.val()
        };

        try {
            $.ajax({
                //url: 'http://localhost:57252/api/rental/ContactUsTemp',
                url: 'https://kisielapidev.azurewebsites.net/api/rental/ContactUsTemp',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(contactData),
                success: function(msg) {
                    name.val('');
                    email.val('');
                    phone.val('');
                    message.val('');
                    window.location.replace("thank_you.html");
                },
                fail: function(xhr, textStatus, errorThrown){
                    alert('request failed');
                }    
            });
          }
          catch(err) {
            alert(err);
          }
        
    }
});