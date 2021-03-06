// ###############
//
// NAV SCROLL SETUP
//
// ###############

$("nav").find("a").click(function (e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

// ###############
//
// SCROLL MAGIC INIT
//
// ###############

var controller = new ScrollMagic.Controller();
// ###############
//
// NAV CONTROLS
//
// ###############

var navScene = new ScrollMagic.Scene({
        triggerElement: 'nav',
        triggerHook: 0
    })

    .setPin("nav");
navScene.addTo(controller);

// ###############
//
// HEADER ANIMATIONS
//
// ###############

// ########
//
// NON CONTROLLED ANIMATIONS
//
// ########

var tlhead = new TimelineMax()

tlhead.add(TweenMax.from('.alaskaHead img', .8, {
    x: -600,
    ease: Expo.easeOut
}))

tlhead.add(
    TweenMax.from('.navCircle', .6, {
            delay: .25,
            y: -800,
            ease: Elastic.easeOut.config(1, 0.3)
        },
        TweenMax.from('.textHead', .6, {
            delay: .85,
            y: -900,
            ease: Elastic.easeOut.config(1, 0.3)
        }),
        TweenMax.from('.blueColors', .6, {
            delay: .85,
            x: -1200,
            opacity: 0,
            ease: Elastic.easeOut.config(1, 0.3)
        })))

tlhead.add(
    TweenMax.from('.descriptionHead', .8, {
        delay: 1,
        x: 1200,
        ease: Expo.easeOut
    }),
    TweenMax.from('.scrollDownInd', 1.2, {
        delay: 1.4,
        y: 600,
        opacity: 0,
        ease: Expo.easeOut
    }))

// ########
//
// CONTROLLED ANIMATIONS
//
// ########

var tlheadScroll = new TimelineMax()

tlheadScroll.add(
        TweenMax.to('.alaskaHead img', .2, {
            x: 600
        })
    )
    .add(
        TweenMax.from('nav', .5, {
            opacity: 0,
        })
    )


var sceneHeader = new ScrollMagic.Scene({
        triggerElement: 'header',
        triggerHook: 0,
        duration: '300%'
    })
    .setTween(tlheadScroll)
    .setPin('header');
sceneHeader.addTo(controller);

// ###############
//
// SCENE 1 RELIGIOUS
//
// ###############


// ###############
//
// SCENE 1 RELIGIOUS
//
// ###############


var tlrel = new TimelineMax()

tlrel.add(TweenMax.from('.navCirs .rel', .3, {
    opacity: 0
}))
tlrel.add(TweenMax.staggerFrom('.s_01header, .header h1', .5, {
    scale: 10,
    x: 1200,
    opacity: 0
},1 ))
tlrel.add(TweenMax.staggerFrom('.infoBlock', .8, {
        opacity: 0,
        x: "-=200px",
        scale: 2.5,
        ease: Expo.easeIn,
    }, 1))

    .add(TweenMax.from('#s_01 .img2', 1.5, {
        x: 1600,
        ease: SlowMo.ease.config(0.7, 0.7, false)
    }))
    .add(TweenMax.to('.navCirs .rel', .3, {
        opacity: 0
    }))
var scene01 = new ScrollMagic.Scene({
        triggerElement: "#s_01",
        triggerHook: 0,
        duration: '300%',
    })
    .setTween(tlrel)
    .setPin('#s_01')
scene01.addTo(controller)

// ###############
//
// SCENE 2 VAUDEVILLE
//
// ###############

var tlvaud = new TimelineMax()
tlvaud.add(TweenMax.from('.navCirs .vaud', .3, {
    opacity: 0
}))
.add(TweenMax.to('.vvid', 3, {
    scale: 1.2,
}))
tlvaud.add(TweenMax.from('#s_02 .line01', .5, {
        x: 2200,
        ease: Power2.easeOut,
    }))
    .add(TweenMax.to('#s_02 .line01', 5, {
        x: 0,
    }))
    .add(TweenMax.to('#s_02 .line01', .5, {
        x: -800,
        y: -500,
        scale: .25,
        ease: Power2.easeOut,
    }))
tlvaud.add(TweenMax.from('#s_02 .line02', .5, {
        x: 2200,
        ease: Power2.easeOut,
    }))
    .add(TweenMax.to('#s_02 .line02', 5, {
        x: 0,
    }))
    .add(TweenMax.to('#s_02 .line02', .5, {
        x: -800,
        y: -450,
        scale: .25,
        ease: Power2.easeOut,
    }))
tlvaud.add(TweenMax.from('#s_02 .line03', .5, {
        x: 2200,
        ease: Power2.easeOut,
    }))
    .add(TweenMax.to('#s_02 .line03', 5, {
        x: 0,
    }))
    .add(TweenMax.to('#s_02 .line03', .5, {
        x: -800,
        y: -300,
        scale: .25,
        ease: Power2.easeOut,
    }))
    .add(TweenMax.to('.navCirs .vaud', .3, {
        opacity: 0
    }))

var scene02 = new ScrollMagic.Scene({
        triggerElement: "#s_02",
        triggerHook: 0,
        duration: '300%',
    })
    .setTween(tlvaud)
    .setPin("#s_02")
scene02.addTo(controller)
// ###############
//
// SCENE 3 PROHIBITION
//
// ###############

var tlpro = new TimelineMax()

tlpro.add(TweenMax.to('.navCirs, .navLine, nav a p', .5, {
        'background-color': '#000',
    }))
    .add(TweenMax.from('.navCirs .pro', .3, {
        opacity: 0
    }))
    .add(TweenMax.from('#s_03 .scene01 .img01', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.from('#s_03 .scene01 .img02', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.from('#s_03 .scene01 .img03', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.from('#s_03 .scene01 .txt', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.to('#s_03 .scene01', 5, {
        x: 0,
        y: 0,
    }))
    .add(TweenMax.to('#s_03 .scene01', 1.5, {
        rotation: 175,
        opacity: 0,
        x: -1600,
    }))


    .add(TweenMax.from('#s_03 .scene02 .img01', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.from('#s_03 .scene02 .txt', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.to('#s_03 .scene02', 5, {
        x: 0,
        y: 0,
    }))
    .add(TweenMax.to('#s_03 .scene02', 1.5, {
        rotation: 175,
        opacity: 0,
        x: -1600,
    }))


    .add(TweenMax.from('#s_03 .scene03 .img01', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.from('#s_03 .scene03 .txt', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.to('#s_03 .scene03', 5, {
        x: 0,
        y: 0,
    }))
    .add(TweenMax.to('#s_03 .scene03', 1.5, {
        rotation: 175,
        opacity: 0,
        x: -1600,
    }))


    .add(TweenMax.from('#s_03 .scene04 .img01', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.from('#s_03 .scene04 .txt', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.to('#s_03 .scene04', 5, {
        x: 0,
        y: 0,
    }))
    .add(TweenMax.to('#s_03 .scene04', 1.5, {
        rotation: 175,
        opacity: 0,
        x: -1600,
    }))


    .add(TweenMax.from('#s_03 .scene05 .img01', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.from('#s_03 .scene05 .img02', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.from('#s_03 .scene05 .txt', .5, {
        rotation: 175,
        opacity: 0,
        y: -1200,
        ease: Back.easeOut.config(1.7)
    }))
    .add(TweenMax.to('#s_03 .scene05', 5, {
        x: 0,
        y: 0,
    }))
    .add(TweenMax.to('#s_03 .scene05', 1.5, {
        rotation: 175,
        opacity: 0,
        x: -1600,
    }))
    .add(TweenMax.from('.navCirs .pro', .3, {
        opacity: 0
    }))


var scene03 = new ScrollMagic.Scene({
        triggerElement: "#s_03",
        triggerHook: 0,
        duration: "300%",
    })
    .setTween(tlpro)
    .setPin('#s_03')
scene03.addTo(controller)

// ###############
//
// SCENE 4 STONEWALL
//
// ###############

var tlstone = new TimelineMax()

tlstone.add(TweenMax.to('.navCirs, .navLine, nav a p', .5, {
        'background-color': '#FFF',
        onComplete: function () {
            $('nav a p').css({
                "background-color": ""
            })
        }
    }))
    .add(TweenMax.from('.navCirs .stone', .3, {
        opacity: 0
    }))

    .add(TweenMax.staggerFrom('#s_04 .blks01 .txt', .7, {
        x: 2500,
        ease: Expo.easeOut,
    }, 2))
    .add(TweenMax.to('#s_04 .blks01', 1.7, {
        x: 0,
    }))
    .add(TweenMax.to('#s_04 .blks01', 1.7, {
        x: -2500,
        ease: Expo.easeOut,
    }))

    .add(TweenMax.staggerFrom('#s_04 .blks02 .txt', .7, {
        x: 2500,
        ease: Expo.easeOut,
    }, 2))

    .add(TweenMax.to('#s_04 .blks02', 1.7, {
        x: 0,
    }))
    .add(TweenMax.to('#s_04 .blks02', 1.7, {
        x: -2500,
        ease: Expo.easeOut,
    }))

    .add(TweenMax.staggerFrom('#s_04 .blks03 .txt', .7, {
        x: 2500,
        ease: Expo.easeOut,
    }, 2))

    .add(TweenMax.to('#s_04 .blks03', 1.7, {
        x: 0,
    }))
    .add(TweenMax.to('#s_04 .blks03', 1.7, {
        x: -2500,
        ease: Expo.easeOut,
    }))
    .add(TweenMax.from('.navCirs .stone', .3, {
        opacity: 0
    }))
var scene04 = new ScrollMagic.Scene({
        triggerElement: "#s_04",
        triggerHook: 0,
        duration: "300%",
    })
    .setTween(tlstone)
    .setPin('#s_04')
scene04.addTo(controller)

// ###############
//
// SCENE 5 MOVIES
//
// ###############

var tlmovies = new TimelineMax()

tlmovies.add(TweenMax.to('.navCirs, .navLine, nav a p', .5, {
        'background-color': '#EE1C25',
    }))
    .add(TweenMax.from('.navCirs .main', .3, {
        opacity: 0
    }))
    .add(TweenMax.from('#s_05 .rocky .bg', 1, {
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        y: -2500,
    }))
    .add(TweenMax.staggerFrom('#s_05 .rocky .txt p', 1, {
        opacity: 0,
        ease: SteppedEase.config(12),
        y: 2500,
    }, 2))
    .add(TweenMax.to('#s_05 .rocky .txt, #s_05 .rocky .bg', 3, {
        opacity: 0,
        ease: SteppedEase.config(12),
        y: -2500,
    }))

    .add(TweenMax.from('#s_05 .paris .bg', 1, {
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        y: -2500,
    }))
    .add(TweenMax.from('#s_05 .paris .blk01', 1, {
        opacity: 0,
        ease: SteppedEase.config(12),
        y: 2500,
    }))
    .add(TweenMax.to('#s_05 .paris .blk01', 1, {
        x: 0,
        y: 0,
    }))
    .add(TweenMax.to('#s_05 .paris .blk01', 1, {
        opacity: 0,
        ease: SteppedEase.config(12),
        y: -2500,
    }))
    .add(TweenMax.from('#s_05 .paris .blk02', 1, {
        opacity: 0,
        ease: SteppedEase.config(12),
        y: 2500,
    }))
    .add(TweenMax.to('#s_05 .paris .blk02', 1, {
        x: 0,
        y: 0,
    }))
    .add(TweenMax.to('#s_05 .paris .blk02', 1, {
        opacity: 0,
        ease: SteppedEase.config(12),
        y: -2500,
    }))
    .add(TweenMax.from('#s_05 .paris .blk03', 1, {
        opacity: 0,
        ease: SteppedEase.config(12),
        y: 2500,
    }))
    .add(TweenMax.to('#s_05 .paris .blk03', 1, {
        x: 0,
        y: 0,
    }))
    .add(TweenMax.to('#s_05 .paris .blk03', 1, {
        opacity: 0,
        ease: SteppedEase.config(12),
        y: -2500,
    }))
    .add(TweenMax.to('#s_05 .paris .txt, #s_05 .paris .bg', 3, {
        opacity: 0,
        ease: SteppedEase.config(12),
        y: -2500,
    }))
    .add(TweenMax.from('.navCirs .main', .3, {
        opacity: 0
    }))


var scene05 = new ScrollMagic.Scene({
        triggerElement: "#s_05",
        triggerHook: 0,
        duration: "300%",
    })
    .setTween(tlmovies)
    .setPin('#s_05')
scene05.addTo(controller)

// ###############
//
// SCENE 6 RUPAUL
//
// ###############

var tlru = new TimelineMax()

tlru.add(TweenMax.to('.navCirs, .navLine, nav a p', .5, {
    'background-color': '#BF2323',
}))
tlru.add(TweenMax.from('.navCirs .drag', .3, {
    opacity: 0
}))
tlru.add(TweenMax.from('#s_06 .header', 1, {
    x: 2600,
    ease: Back.easeOut.config(1.7)
}))
tlru.add(TweenMax.staggerFrom('#s_06 .txt p', 1, {
    opacity: 0,
    y: 2600,
    ease: Power3.easeOut,
}, 2))
tlru.add(TweenMax.to('#s_06 .txt', 1, {
    x: 0,
    y: 0,
}))
tlru.add(TweenMax.to('#s_06 .txt', 1, {
    opacity: 0,
    y: 2600,
    ease: Power3.easeOut,
}))
tlru.add(TweenMax.from('.ruVid', 1, {
    x: 2600,
    ease: Back.easeOut.config(1.7)
}))
tlru.add(TweenMax.to('.ruVid', 3, {
    scale: 1.2,
}))
tlru.add(TweenMax.to('.ruVid', 4, {
    scale: .5,
    x: -300,
    y: 100,
}))
tlru.add(TweenMax.from('#s_06 .theater', 4, {
    opacity: 0
}))
tlru.add(TweenMax.to('#s_06 .theatertxt', 2, {
    opacity: 1,
    'height': '75%',
}))
tlru.add(TweenMax.from('.navCirs .drag', .3, {
    opacity: 0
}))
var scene06 = new ScrollMagic.Scene({
        triggerElement: "#s_06",
        triggerHook: 0,
        duration: "300%",
    })
    .setTween(tlru)
    .setPin('#s_06')
scene06.addTo(controller)

// ###############
//
// SCENE 7 FOOTER
//
// ###############

var tlfoot = new TimelineMax()

tlfoot.add(TweenMax.to('.navCirs, .navLine, nav a p', .5, {
        'background-color': '#FFF',
        onComplete: function () {
            $('nav a p').css({
                "background-color": ""
            })
        }
    }))
    .add(TweenMax.from('#s_07 a', .5, {
        opacity: 0,
        y: -2000,
    }))

var scene07 = new ScrollMagic.Scene({
        triggerElement: "#s_07",
        triggerHook: 0,
        duration: "300%",
    })
    .setTween(tlfoot)
    .setPin('#s_07')
scene07.addTo(controller)