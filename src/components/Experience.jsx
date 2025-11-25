import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Image, ContactShadows, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const JEWEL_URLS = [
  'https://placehold.co/400x400/1a1a1a/ffffff/png?text=Yell+Lab',
  'https://placehold.co/400x400/222222/eeeeee/png?text=Silver',
  'https://placehold.co/400x400/111111/dddddd/png?text=Chrome',
  'https://placehold.co/400x400/050505/cccccc/png?text=Onyx',
  'https://placehold.co/400x400/1a1a1a/ffffff/png?text=Chain',
];

function Jewel({ url, position, rotation, scale = 1, speed = 1, ...props }) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (ref.current) {
       // Rotation continue sur soi-même (axe Y)
       ref.current.rotation.y += delta * 0.8 * speed;
       
       // Effet interactif subtil au survol
       const targetScale = hovered ? 1.1 : 1;
       ref.current.material.zoom = THREE.MathUtils.lerp(ref.current.material.zoom, targetScale, 0.1);
       // On enlève le grayscale pour qu'ils brillent tout le temps
       ref.current.material.color.setScalar(hovered ? 1.2 : 1); // "Shine" au survol (augmente la luminosité)
    }
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.2} 
      floatIntensity={1} 
      floatingRange={[-0.1, 0.1]}
      {...props}
    >
      <group position={position} rotation={rotation} scale={scale}>
        <Image 
          ref={ref}
          url={url} 
          transparent 
          opacity={1}
          side={THREE.DoubleSide}
          onPointerOver={() => { document.body.style.cursor = 'pointer'; setHover(true); }}
          onPointerOut={() => { document.body.style.cursor = 'auto'; setHover(false); }}
        />
        {/* Petites étincelles autour de chaque bijou pour l'effet "bling" */}
        <Sparkles count={10} scale={scale * 1.2} size={4} speed={0.4} opacity={0.5} color="#ffffff" />
      </group>
    </Float>
  );
}

export default function Experience() {
  return (
    <>
      <group position={[0, 0, 0]}>
        {/* On écarte un peu les bijoux pour laisser voir le fond rouge/noir */}
        
        <Jewel 
          url={JEWEL_URLS[0]} 
          position={[-2.5, 1.5, 0]} 
          rotation={[0, 0, 0]} 
          scale={2} 
          speed={0.5}
        />
        
        <Jewel 
          url={JEWEL_URLS[1]} 
          position={[2.5, -1.5, 0]} 
          rotation={[0, 0.2, 0]} 
          scale={1.8} 
          speed={0.7}
        />
        
        <Jewel 
          url={JEWEL_URLS[2]} 
          position={[-3, -2, 1]} 
          rotation={[0, -0.2, 0]} 
          scale={1.5} 
          speed={0.6}
        />
        
         <Jewel 
          url={JEWEL_URLS[3]} 
          position={[3, 2, 1]} 
          rotation={[0, 0, 0]} 
          scale={1.6} 
          speed={0.8}
        />
      </group>

      {/* Particules globales pour l'ambiance "Magic/Luxury" */}
      <Sparkles count={50} scale={10} size={2} speed={0.2} opacity={0.2} color="#ff0000" />

      <ContactShadows 
        opacity={0.6} 
        scale={15} 
        blur={3} 
        far={4} 
        color="#000000" 
      />
      
      <ambientLight intensity={0.8} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
    </>
  );
}
