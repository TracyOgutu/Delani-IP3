
$(document).ready(function(){

    var name  = $('[name = "name"]').val();
/*  Mailchimp Subscribe  */
$('#details-form').bind('submit', function(event) {
    event.preventDefault(); //prevent page refresh
    var name  = $('[name = "name"]').val();//get name field value
    var email = $('[name="email"]').val();//get email field value
    var message=$('[name = "message"]').val();
    var url =   "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?"
               +  "apikey=d4526aa4cfab7a4f46a0ec63d6b29412-us20&id=267980e2ba"//API KEY  
               +  "&email[email]=" + email //email address registering
               +  "&merge_vars[NAME]=" + name //name we're registering
               +  "&merge_vars[MESSAGE]=" + message //name we're registering
               +  "&double_optin=true" //add to list even if email is invalid
               +  "&send_welcome=true"; //send an email notification to new subscriber
   $.ajax({
         type: "POST",
         url: url,
         dataType: 'json',        
         success: function(data) {   
           $('#details-form').html(name + "we have received your message. Thank you for reaching out to us.");
         },
         error: function(jqXHR, textStatus, errorThrown) {
           alert(errorThrown);
         }
     });//EO ajax

     alert(name + " " + "we have received your message. Thank you for reaching out to us.");
 });//EO click bind
 
   
//user interface logic

// first icon
    $(".designlogo").click(function(){
        $(".p1").toggle();        
        $(".designlogo").toggle();        
    });
    $(".p1").click(function(){
        $(".designlogo").toggle();
        $(".p1").toggle();        
    });

// second icon 
    $(".developmentlogo").click(function(){
        $(".p2").toggle();
        $(".developmentlogo").toggle();
    });
    $(".p2").click(function(){
        $(".developmentlogo").toggle();
        $(".p2").toggle();
    });

// third icon 
    $(".productmanagementlogo").click(function(){
        $(".p3").toggle();
        $(".productmanagementlogo").toggle();
    });
    $(".p3").click(function(){
        $(".productmanagementlogo").toggle();
        $(".p3").toggle();
    });

    $("#blank").mouseover(function(){
        $(".prg1").show();
    }).mouseout(function(){
        $(".prg1").hide();
    });

    $("#ontario").mouseover(function(){
         $(".prg2").show();
    }).mouseout(function(){
        $(".prg2").hide();
    });

    $("#orange").mouseover(function(){
        $(".prg3").show();
    }).mouseout(function(){
        $(".prg3").hide();
    })

    $("#jimcarey").mouseover(function(){
        $(".prg4").show();
    }).mouseout(function(){
        $(".prg4").hide();
    })

    $("#goodday").mouseover(function(){
        $(".prg5").show();
    }).mouseout(function(){
        $(".prg5").hide();
    })

    $("#form").mouseover(function(){
        $(".prg6").show();
    }).mouseout(function(){
        $(".prg6").hide();
    })

    $("#burned").mouseover(function(){
        $(".prg7").show();
    }).mouseout(function(){
        $(".prg7").hide();
    })

    $("#giraffe").mouseover(function(){
        $(".prg8").show();
    }).mouseout(function(){
        $(".prg8").hide();
    })


});