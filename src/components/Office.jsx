import { useGLTF } from "@react-three/drei";
import React from "react";

export function Office(props) {
  // Use the path to the renamed file
  const { scene } = useGLTF("models/scene.glb");

  return (
    <group {...props} dispose={null}>
      {/* Renders the entire model hierarchy with its colors/materials instantly */}
      <primitive 
        object={scene} 
        castShadow    // Enable the model to cast shadows from the Directional Light
        receiveShadow // Enable the model to receive shadows (on the floor/walls)
      />
    </group>
  );
}

useGLTF.preload("models/scene.glb");