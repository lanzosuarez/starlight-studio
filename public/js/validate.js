$(function (){


    $("#post").click(function(event){
        var textMessage = $("#textmessage").val();
        var name = $("#name").val();
        var email = $("#email").val();

        var alphaExp = /^[a-zA-Z. ,]+$/;
        var emailExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var validName = name.match(alphaExp) && name !=="";
        var validEmail = email.match(emailExp) && email !== "";
        var validMessage = textMessage !== "";
       
        if(!validName && !validEmail && !validMessage){
            alert("Please fill up the form");
            $("#name").focus();
            $("#email").focus();
            $("$textMessage").focus();
            event.preventDefault();
        }else if(!validEmail){
            alert("Please enter a valid email");
            $("#email").focus();
            event.preventDefault();
        }else if(!validName){
            alert("Please enter a valid name");
            $("#name").focus();
            event.preventDefault();
        }else if(!validMessage){
            alert("Please enter a message");
            $("#name").focus();
            event.preventDefault();
        }else{
            $.ajax({
            type: "POST",
            url: "/contact-us",
            data: JSON.stringify({
                message: textMessage,
                name: name,
                email: email
            }),
            contentType: "application/json"
            });
           
            alert("Success"); 
            myForm.reset();

        }
    });

    $("#email").keypress(function(event){
        if (event.charCode == 32) {
            event.preventDefault();
        }  
        return true;
    });

    $("#reset").click(function(){
        myForm.reset();
    });
  
});
