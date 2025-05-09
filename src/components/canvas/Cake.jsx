import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import MineCake from "../../../public/minecraft_cake/MineCake"
import CanvasLoader from "./Loader"

const CakeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)")

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])
  
  return (
    <>
      <Canvas
        frameloop="demand"
        shadows
        camera={{position: [40, 3, 5], fov: 25}}
        gl={{ preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.5}/>
          <group
            position={isMobile ? [0, -2.5, 0] : [0, -3, 0]}
            rotation={[0, -0.2, -0.3]}
          >
            <MineCake scale={isMobile ? 4 : 6} />
            <directionalLight 
              position={[0, 10, 0]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              target-position={[0, 0, 0]}
            />
          </group>
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  )
}

export default CakeCanvas