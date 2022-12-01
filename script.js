$(document).ready(function(){
    $("#contactform").validate({
        rules:{
            name:{
                required:true,
                minlength:4
            },
            subject:{
                required:true,
                minlength:50
            },
            emailaddress:{
                required:true,
                email:true
            },
            phone:{
                required:true,
                Number:true
                
            },
            message:{
                required:true,
            }

        }
       
    }

    )


})




