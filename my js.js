$(function () {
    $(".silaeder").owlCarousel({
        items : 4,
        rtl : true,
        margin : 10,
        loop : true,
        nav : true,
        navText : ['<i class="fa-solid fa-angle-right"></i>','<i class="fa-solid fa-angle-left"></i>'],
        dots : true,
        autoplay : true,
        autoplayTimeout : 2000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 2,
                dots : false
            },
            768 : {
                items : 7,
            }
            ,
            500 : {
                items : 4,
            }
        }

    });
})

$(function () {
    $(".slider").owlCarousel({
        rtl : true,
        margin : 10,
        loop : true,
        nav : true,
        navText : ['<i class="fa-solid fa-angle-right"></i>','<i class="fa-solid fa-angle-left"></i>'],
        dots : true,
        autoplay : true,
        autoplayTimeout : 1000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 4,
                dots : false
            },
            768 : {
                items : 3,
            },
            500 : {
                items : 1,
            }
            ,
            400 : {
                items : 1,
            }
        }

    });
})


$(function () {
    $(".mikap-slider").owlCarousel({
        rtl : true,
        margin : 10,
        loop : true,
        nav : true,
        navText : ['<i class="fa-solid fa-angle-right"></i>','<i class="fa-solid fa-angle-left"></i>'],
        dots : true,
        autoplay : true,
        autoplayTimeout : 1000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items :1 ,
                dots : false
            },
            768 : {
                items : 3,
            },
            500 : {
                items : 1,
            }
            ,
            400 : {
                items : 1,
            }
        }

    });
})