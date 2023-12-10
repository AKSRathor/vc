const applyAnima = ()=>{
    // const flightPath = {
    //     curviness: 1.25,
    //     autoRotate: true,
    //     values: [
    //         { x: 100, y: -20 }, { x: 300, y: 10 }, { x: 500, y: 100 }, { x: 750, y: -100 },{x:150, y:-50}, {x:600, y:100}, {x:800, y:0}, {x:window.innerWidth, y:-400}
    //     ]
    // }
    const flightPath = {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {scale:2}
        ]
    }
    
    const tween = new TimelineLite();
    
    tween.add(
        TweenLite.to('.paper-plane', 1, {
            bezier: flightPath,
            ease: Power1.easeInOut
        })
    )
    
    const controller = new ScrollMagic.Controller()
    const scene = new ScrollMagic.Scene({
        triggerElement:'#page2HomeDiv',
        duration: 3000,
        triggerHook: 0
    
    })
    .setTween(tween)
    .setPin("#page2HomeDiv")
    .addIndicators()
    .addTo(controller)
}

export default applyAnima