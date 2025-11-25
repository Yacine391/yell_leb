import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls, Scroll } from '@react-three/drei';
import Experience from './components/Experience';
import Overlay from './components/Overlay';
import Loading from './components/Loading';

function App() {
  return (
    <div 
      className="w-full h-screen relative bg-neutral-950 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/background.jpg')", 
        backgroundColor: '#0a0a0a' 
      }}
    >
      {/* Dark overlay + Vignette for Edgy feel */}
      <div className="absolute inset-0 bg-black/30 z-0 mix-blend-multiply"></div>
      <div className="absolute inset-0 vignette z-0"></div>

      <Suspense fallback={<Loading />}>
        <Canvas
          shadows
          className="z-10"
          camera={{ position: [0, 0, 5], fov: 30 }}
          dpr={[1, 2]}
        >
          <Environment preset="city" />
          
          <ScrollControls pages={1} damping={0.1}>
             <Experience />
             <Scroll html>
               <Overlay />
             </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
