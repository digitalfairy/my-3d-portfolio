import { useGLTF } from "@react-three/drei";
import React from "react";

export function Office(props) {
  const { scene } = useGLTF("models/scene.glb");
  const { section } = props; 

  return (
    <group {...props} dispose={null}>
      <primitive 
        object={scene} 
        castShadow    
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload("models/scene.glb");