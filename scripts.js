$(document).ready(() => {
    var svgKeyframeTimelineTwin1 = new TimelineMax({ repeat: -1 });
    var svgKeyframeCountTwin1 = $(".twin._1 .desktop svg g.keyframe").length;

    var svgKeyframeTimelineTwin2 = new TimelineMax({ repeat: -1 });
    var svgKeyframeCountTwin2 = $(".twin._2 .desktop svg g.keyframe").length;

    for (i = 0; i < svgKeyframeCountTwin1; i++) {
        svgKeyframeTimelineTwin1
            .to(".twin._1 svg g.keyframe._" + [i], 0, { autoAlpha: 1 })
            .to(".twin._1 svg g.keyframe._" + [i], 0, { autoAlpha: 0 }, "+=0.15");
    }

    for (i = 0; i < svgKeyframeCountTwin2; i++) {
        svgKeyframeTimelineTwin2
            .to(".twin._2 svg g.keyframe._" + [i], 0, { autoAlpha: 1 })
            .to(".twin._2 svg g.keyframe._" + [i], 0, { autoAlpha: 0 }, "+=0.15");
    }

    svgKeyframeTimelineTwin1.play();
    svgKeyframeTimelineTwin2.play();
});
