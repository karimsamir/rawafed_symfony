// initialise plugins
$(document).ready(function() {

    jQuery('ul.sf-menu').superfish();

    //$('.bxslider').bxSlider();
    $('.bxslider').bxSlider( {
        auto: true
        //        ,autoHover: true
        ,
        mode: "horizontal"
        ,
        pagerShortSeparator: " | "
        //,pagerCustom: $("#navigation")
        ,
        easing: "linear" // option swing

    });


    //    $('.').bxSlider({
    //        buildPager: function(slideIndex){
    //            switch(slideIndex){
    //                case 0:
    //                    return 'Home';
    //                case 1:
    //                    return 'Products';
    //                case 2:
    //                    return 'Services';
    //                case 3:
    //                    return ' Technical';
    //            }
    //        }
    //        ,
    //        auto: true
    //        ,
    //        autoHover: true
    //        ,
    //        mode: "horizontal"
    //        ,
    //        pagerShortSeparator: " | "
    //        ,
    //        pagerCustom: $("#navigation")
    //
    //    });

 

    getPages();

    clickOnMenu("home", false);
   
});

$(".info_link").click(function(event){
       
    var VHrefModified = $(this).attr('href');
    VHrefModified = VHrefModified.replace("/", "");


    //        alert("VHrefModified="+VHrefModified+":::::::::::");
    if(VHrefModified == "")
    {
        VHrefModified = "home";
    }

    clickOnMenu(VHrefModified,true);

    // cancelling the browsing event
    event.preventDefault();

});
    
function clickOnMenu(pMenuLink, pIsMenuClicked){
    // has a saved URL like  http://example.com/#contactus
    var hashInUrl = window.location.hash;
       
    // Get the Hash url to modify the final URL
    // and to display the right page
       
    if(hashInUrl != "" &&pIsMenuClicked == false){
        if(hashInUrl != "#home"){
            hashInUrl = hashInUrl.replace("#", "");
            pMenuLink = hashInUrl;
        }
           
    }
//    alert("pMenuLink=" +pMenuLink+"::::: hashInUrl=" + hashInUrl+":::::");
    if ($('#showContent').length == 0){
        //             $(".bx-wrapper").append('<div id="showContent"></div>');
        $("#wrapper").append('<div id="showContent"></div>');
        
    }
    
    if( $('#showContent').hasClass(pMenuLink) == false ){
        // remove all class on that Div
        var className = $('#showContent').attr('class');
        
  
        if(className != null){
        
            $("#"+className+"_content").html($("#showContent").html());
        }
       
        $("#showContent").removeAttr('class');
        
        $('#showContent').hide();
      
        // animate show of div
//        $("#showContent").html($("#"+pMenuLink+"_content").html());
//        $("#showContent").delay(5000, function(){
//            $("#showContent").html($("#"+pMenuLink+"_content").html());
//        });
//        
if($("#"+pMenuLink+"_content").length < 0){
      setTimeout(function() {
       $("#showContent").html($("#"+pMenuLink+"_content").html());
}, 2000);
}
      
//        .delay(5000)

        //        if(pShouldAnimate == true){
        $('#showContent').fadeIn(2000, function() {
               
            $('html, body').animate({ 
                scrollTop: $('#showContent').offset().top
            }, 2000);
        });
        //        }

        $("#"+pMenuLink+"_content").html("");
        // add a class name of the last added div 
        $("#showContent").addClass(pMenuLink);
        $("#showContent").show();
        // this part is used to modify URL
        var  locationUrl = window.location.href; 
        var lastIndexofHash   = locationUrl.lastIndexOf("#");
    
        if( lastIndexofHash > 0){
            locationUrl = locationUrl.substring(0, lastIndexofHash) ;
        }
       
        history.pushState("", pMenuLink, locationUrl);
        
        //remove active link class from all li in navigation menu
        $("#navigation li").removeClass("activeLink");
        if(pMenuLink != "home"){

            $("#navigation li .info_link").each(function(){
                var VHrefModified = $(this).attr('href');
                VHrefModified = VHrefModified.replace("/", ""); 
       
                if(VHrefModified == pMenuLink)
                {
                    $(this).parent().addClass("activeLink")
                }
    
            });
            history.pushState("", "new title", locationUrl+"#"+pMenuLink);
        }
               
    }
}


function validateForm()
{
    //    alert("validating form");
    $("#frmContactus").validate({
        rules: {
            name: {
                required: true,
                maxlength: 255
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                maxlength: 50
            },
            message: {
                required: true
                ,
                minlength: 30
                ,
                maxlength: 4000
            }
        },
        messages: {
            name:{
                required: "Required",
                maxlength:  "Full name must not exceed 255 characters"
            },
            email: "Please enter a valid email address",
            subject: {
                required: "Required",
                maxlength:  "Subject must not exceed 50 characters"
            },
            message: {
                required: "Required",
                minlength: "Message must be at least 30 characters long"
                ,
                maxlength:"Message must be not more than 4000 characters long"
            }
        }
    });
}

function submitForm(){
   
    validateForm()
    var allInputs = $(":input");
    if ( $("#frmContactus").valid() == true)
    {
        $("#showContent").html('<center><img src="/bundles/rawafed/images/loader/ajax-loader.gif" alt="loading" /></center>');

        var actionUrl = "/contactus";
      
        $.ajaxSetup({
            url: actionUrl,
            global: false,
            cache:false,
            type: "POST",
            timeout: 15000,
            dataType: 'HTML',
            data:allInputs
        });

        $.ajax({

            success: function(retData)
            {
                
                retData = retData.replace('<div id="contactus_content">', "") ;
                var  lstClosedDiv = retData.lastIndexOf("</div>");
                retData = retData.substring(0, lstClosedDiv) ;

                $("#showContent").html(retData);
            }// success
            ,
            error: function(){
                $(".rawafed-notice").html("<strong> Sorry error happened , please try again! </strong>");
            }// error
            ,
            complete: function(){
                $('.rawafed-notice').delay(15000).fadeOut();
        

            }// complete

        });
    }
}

function getPages(){
    var myPages=new Array();
    myPages[0]="products";      
    myPages[1]="services";
    myPages[2]="technical";
    myPages[3]="partners";
    myPages[4]="clients";
    myPages[5]="contactus";
    
    $.each(myPages, function(index, value) { 

        //  alert(index + ': ' + value); 

        $.ajaxSetup({
            url: "/"+value,
            //            global: false,
            //            cache:false,
            type: "GET",
            timeout: 15000,
            dataType: 'html'
        });

        $.ajax({

            success: function(retData)
            {

                //                 $("body").append('<div id="'+myPages[i]+'" style="display:none;">'+retData+'</div>');
                $("body").append('<div id="'+value+'" style="display:none;">'+retData+'</div>');
            //                $("#formResult").html("<strong> "+retData+"</strong>");
            }// success
            ,
            error: function(){
                $("#formResult").html("<strong> Sorry error happened , please try again! </strong>");
            }// error
            ,
            complete: function(){
                $('#formResult').delay(5000).fadeOut();
        

            }// complete

        });
    });

  
}