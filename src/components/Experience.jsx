import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { Office } from "./Office"; 

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });

  const { positionX, positionY, positionZ, rotationY } = useControls({
    // Fine-tune the horizontal position
    positionX: { value: -0.2, min: -2, max: 2, step: 0.01, label: "X Position" },
    // Fine-tune the vertical position (essential for sitting correctly)
    positionY: { value: 0.4, min: -1, max: 1, step: 0.01, label: "Y Position" }, 
    // Fine-tune the forward/backward position
    positionZ: { value: -0.5, min: -2, max: 2, step: 0.01, label: "Z Position" },
    // Fine-tune rotation offset (starts at 0 since the 180° fix is inside Avatar.jsx)
    rotationY: {
     value: Math.PI / 2, 
      min: -Math.PI * 2,
      max: Math.PI * 2,
      step: 0.01,
      label: "Find Rotation",
    },
  });

  return (
    <>
      <OrbitControls 
        target={[0, 0.7, 0]} 
      />
      
      {/* Existing Environment: Sky and Environment preset */}
      <Sky />
      <Environment preset="sunset" />

      <group position-y={-1}>
        
        {/* 1. CONTACT SHADOWS (Kept) */}
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        
        {/* 2. THE OFFICE MODEL (Replaces the old ground plane) */}
        <Office 
          position-y={-0.001} 
          scale={1.0} 
          receiveShadow
        />

        {/* 3. AVATAR AND DESK SETUP */}
        <Avatar 
          animation={animation} 
          position={[positionX, positionY, positionZ]}
          rotation-y={rotationY}
        />
      </group>
    </>
  );
};