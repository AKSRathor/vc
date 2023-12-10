import React, { Suspense, useEffect } from 'react'
import { useRef, useState } from 'react'
import { Canvas, useThree } from "@react-three/fiber"
import gsap from "gsap"
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'




function Model(props) {
    const { nodes, materials } = useGLTF('/scene.gltf')
    const objectRef = useRef();
    useEffect(() => {
        // Rotate the object when the component mounts
        gsap.to(objectRef.current.rotation, {
          z: Math.PI * 2,  // Rotate 360 degrees (in radians)
          duration: 3,     // Animation duration in seconds
          repeat: -1,      // Repeat indefinitely
        //   ease: 'power2.inOut', // Easing function
        });
        gsap.to(objectRef.current.position, {
            x:"1100",
            duration:0
          });

        gsap.to(objectRef.current.scale,{
            x:1.5,
            y:1.5,
            z:1.5,
            scrollTrigger:{
                trigger:"#page2Home",
                start:"-30% center",
                end: "bottom center",
                // toggleActions: "restart reverse restart none",
                // markers:true,
                scrub:true,


            }
        })

        gsap.to(objectRef.current.rotation, {
            x: Math.PI/7,
            y: Math.PI/10,   

            scrollTrigger:{
                trigger:"#page2Home",
                start:"-30% center",
                end: "bottom center",
                // toggleActions: "restart reverse restart none",
                // markers:true,
                scrub:true,


            }
        })

        gsap.to("#canvas-div",{
            zIndex:5,
            y:-150,
            scrollTrigger:{
                trigger:"#page2Home",
                start:"-70% center",
                end: "bottom center",
                // toggleActions: "restart reverse restart none",
                // markers:true,
                scrub:true,


            }
            

        })
    

      }, []);
      
    return (
        <group {...props} dispose={null} scale={0.8} >
            <group scale={0.01}>
                <group scale={0.379}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        {/* <ambientLight intensity={200}/> */}
                        {/* <directionalLight intensity={200}/> */}
                        <mesh ref={objectRef} color="white" metalness = {0.5} geometry={nodes.Ethereum_3D_logoObject_0_lambert2_0.geometry} material={materials.lambert2} scale={[1, 0.655, 1]}  />
                    </group>
                </group>
            </group>
        </group>
    )
}



const WebObj = () => {



    return (
        <div id='canvas-div'>
            <Canvas>
                <Suspense id = 'canvas-container' fallback={null}>
                    
                    {/* <ambientLight intensity={500}  position={[-1,-1,1]}/> */}
                    <directionalLight intensity={200} />
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default WebObj