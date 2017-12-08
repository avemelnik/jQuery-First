$(document).ready(function () {
    $(".bg-btn-red").on("click", function () {
            $(".container").addClass("bg-red");
        }
    );

    $(".bg-btn-none").on("click", function () {
            $(".container").removeClass("bg-red");
        }
    );

    $(".bg-btn-toggle").on("click", function () {
            $(".container").toggleClass("bg-red");
        }
    );

    $(".bg-get-attr").on("click", function () {
            console.log($(this).attr('class'));
        }
    );

    $(".bg-set-attr").on("click", function () {
            console.log($(this).attr('disabled', 'disabled'));
        }
    );

    $(".btn-alert").on("click", function () {
            alert("Hello World!");
        }
    );

    $(".btn--trigger-alert").on("click", function () {
            $(".btn-alert").trigger("click");
        }
    );

    $(".btn-clone").on("click", function () {
            $(".btn-clone").clone().text("(cloned)").appendTo(".clone");
        }
    );

    $(".btn-closest").on("click", function () {
            console.log($(".btn-closest").closest("div"));
        }
    );

    $(".btn-arr-text").on("click", function () {
        const buttons = $('button');
        buttons.each(function (keys, button){
            console.log($(button).text());
        } )
        }
    );

    $(".btn-find").on("click", function () {
            console.log($("body").find(".btn-find").css("background", "red"));

        }
    );

    $(".btn-fade-in-text").on("click", function () {
            $("#fade").fadeIn();
        }
    );


    $(".btn-fade-out-text").on("click", function () {
            $("#fade").fadeOut();

        }
    );

    $(".btn-hide-text").on("click", function () {
            $("#hide").hide();

        }
    );

    $(".btn-show-text").on("click", function () {
            $("#hidden").show();

        }
    );



    $(".btn-about").on("click", function () {
            console.log($(this).position());
            console.log("width:"+($(this).width()));
            console.log("height:"+($(this).height()));
            console.log($(this).attr('class'));
            console.log($(this).attr('type'));
            console.log($(this).parent());
            console.log($(this).next('button'));
            console.log($(this).prev('button'));
            console.log($(this).text());
        }
    );


    $( ".slide-up" ).click(function() {
        $( ".slide-up" ).slideUp( "slow", function() {
        });
    });

    $( ".slide-down" ).click(function() {
        $( ".slide-down" ).slideToggle( "slow", function() {
        });
    });

    $(".btn-remove").on("click", function () {
        $("p").remove()
    })

    $( "li" ).eq( 2 ).css( "background-color", "red" );

});