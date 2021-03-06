// ###############
//
// SCENE 1 RELIGIOUS
//
// ###############


var tlrel = new TimelineMax()


tlrel.add(TweenMax.from('.s_01header', .5, {
    scale: 10,
    x: 1200,
    opacity: 0
}))
tlrel.add(TweenMax.staggerFrom('.infoBlock', .8, {
    opacity: 0,
    x:"-=200px",
    scale: 2.5,
    ease: Expo.easeIn,
}, 1))

.add(TweenMax.from('.s_01img2', 1.5, {
    x: 1600,
    ease: SlowMo.ease.config( 0.7, 0.7, false)
}))
var scene01 = new ScrollMagic.Scene({
        triggerElement: "#s_01",
        triggerHook: 0,
        duration: '300%',
    })
    .setTween(tlrel)
    .setPin('#s_01')
scene01.addTo(controller)