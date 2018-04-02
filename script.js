$( document ).ready(function() {



  var newBanner = $("<div />", {
 "class" : "header-new"
});
$( "#banner" ).before( newBanner );
$('.header-new').html('<div class="row"><div class="container" id="boxer" style="background-color:#8ca525;"><div class="pull-left" id="evergreen"><img src="https://raw.githubusercontent.com/Behseini/behfuruzsite/master/everGreen.png" alt="Vancouver Home For Buy sell"></div></div></div>');
$('#boxer').append($('#syndication'));
$('#syndication').addClass('pull-right');
 var newMenu = $("<div />", {
 "class" : "menu-new"
});
$('.header-new').after(newMenu);
$('.menu-new').append($('#nav'));

$( ".header-new" ).after('<div class="row" id ="bannerBox-new"><div class="container" id="newBanner"></div></div>');
$( "#bannerBox-new > .container" ).css('background','none')

$('#newBanner').append($("#banner"));
 var newDivFooter = $("<div />", {
 "class" : "footer-new"
});
$("#footer").after(newDivFooter);
$('.footer-new').append($('#footer'));

//

  $('img[alt="award logos"]').wrap("<a href='http://www.behfuruz.com/award' </a>");

});

https://raw.githubusercontent.com/Behseini/behfuruzsite/master/BanBack.png
