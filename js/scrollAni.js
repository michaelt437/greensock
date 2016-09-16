$(document).ready(function() {
    var scrollMagic = new ScrollMagic.Controller();

    var scene = new ScrollMagic.scene({
        triggerElement = '#second'
    })
    .setTween('#block2', .2, {opacity: 1, scale: 3})
    .addTo(scrollMagic);

    scene.addIndicators();
});