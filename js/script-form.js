$(document).ready(function () {
    $(".target").change(function () {
        console.log($(this).text())
    });

    $(".text").change(function () {
        console.log($(this).val())
    });

    $("select").on("change", function () {
        console.log($(this).val());
    });

    $( ".press" ).keypress(function(eventObject) {
        $(".press").css("color","red");
    });

    $( ".down" ).keydown(function(eventObject) {
        $(".down").css("background","green");
    });
    $( ".up" ).keyup(function(eventObject) {
        console.log(eventObject.which);
    });

    $(".btn-send").on("click", function () {
        event.preventDefault();
        console.log($(".target").text());
        console.log($(".text").val())
    });
});
