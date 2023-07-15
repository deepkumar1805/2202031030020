$(document).ready(function () {
    $("#name").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "#f5f5f5");
        },
        click: function(){
            $(this).css("background-color", "aqua");
          } 

    });
    $("#email").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "#f5f5f5");
        },
        click: function(){
            $(this).css("background-color", "aqua");
          } 

    });
    $("#phone").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "#f5f5f5");
        },
        click: function(){
            $(this).css("background-color", "aqua");
          } 

    });
    $("#message").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "#f5f5f5");
        },
        click: function(){
            $(this).css("background-color", "aqua");
          } 

    });
});