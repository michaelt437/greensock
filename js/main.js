$(document).ready(function() {

    /*************
     * TWEENS
     * **********/

    function welcome() {
        TweenMax.to('.title', .3, { opacity: 1, ease: Power4.easeOut, delay: .6 });
        TweenMax.to('.title > h1', .6, { opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, .3), delay: .7 });
        TweenMax.to('.title hr', .6, { width: '80%', ease: Power4.easeOut, delay: .9 });
        TweenMax.staggerTo('.title p', .4, { opacity: 1, scale: 1, ease: Power4.easeOut, delay: 1.1 }, .2);
    }

    var info1 = TweenMax.staggerFrom($('.info1'), 1, { left: -1500, rotation: 1440, ease: Expo.easeOut}, .2);
    var tween3 = TweenMax.staggerFrom($('.section3 .btn'), .5, { opacity: 0, scale: 0, ease: Back.easeOut.config(1.7) }, .2);
    var yoyo = TweenMax.fromTo('.yoyo p', 1, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, repeat: 1, yoyo: true});

    window.onload = function() {
        welcome();
    }

    /*************
     * SCROLLMAGIC
     * **********/

    //Creating a controller for ScrollMagic
    var controller = new ScrollMagic.Controller();

    // Declaring a scene - where the magic happens
    var scene = new ScrollMagic.Scene({
            triggerElement: '.section2',
            offset: 250
        })
        .setTween(info1) //setting the tween animation to use
        .addTo(controller) //adding the scene to the controller
        .addIndicators({ parent: '.section2', colorStart: '#fff', colorEnd: '#eee' }); //add indicators for scroll


    // Declaring a scene - where the magic happens
    var scene2 = new ScrollMagic.Scene({
            triggerElement: '.section3',
            offset: 190,
            duration:300
        })
        .setTween(tween3) //setting the tween animation to use
        .addTo(controller) //adding the scene to the controller
        .addIndicators({ parent: '.section3', colorStart: '#fff', colorEnd: '#eee' }); //add indicators for scroll

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.section5',
        duration: 850
    })
    .setTween(yoyo)
    .addTo(controller)
    .addIndicators({ parent: '.section5', colorStart: '#fff', colorEnd: '#eee' });
    
    /*************
     * PARALLAX SCROLL
     * **********/ 

    window.onscroll = function() {
        var shift = -.2;
        var bg = $('.section1');
        var yPos = window.pageYOffset;
        var pos = '50% ' + (yPos * shift) + 'px';
        bg.css({ 'background-position': pos });
    }

});
