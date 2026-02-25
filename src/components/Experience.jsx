import { Float, MeshDistortMaterial, MeshWobbleMaterial, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Background } from "./Background";
import { Office } from "./Office";
import { Projects } from "./Projects";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();
  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, { ...framerMotionConfig });
    animate(cameraLookAtX, menuOpened ? 5 : 0, { ...framerMotionConfig });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);
    if (curSection > 3) curSection = 3;
    if (curSection !== section) setSection(curSection);

    state.camera.position.x = cameraPositionX.get();
    // Targeted lookAt: Points camera at the desk/screen level (~0.8 height)
    state.camera.lookAt(cameraLookAtX.get(), 0.8, 0);
  });

  return (
    <>
      <Background />
      <motion.group
        position={[1.390, 0.327, 2.83]}
        rotation={[-3.141, 1, 3.141]}
        animate={"" + section}
        transition={{ duration: 0.6 }}
        variants={{
          0: { 
            scale: 0.9, 
            y: 0.40,     
            x: 1.445, 
            z: 2.83, 
            rotateY: 1 
          },
          1: { 
            y: -viewport.height + 1.4, 
            x: 0.35, 
            z: 7, 
            rotateY: Math.PI
          },
          2: { 
            x: -2, 
            y: -viewport.height * 2 + 0.2, 
            z: 0, 
            rotateY: Math.PI / 2 
          },
          3: { 
            y: -viewport.height * 3 + 1.37, 
            x: 0.22, 
            z: 8.5, 
            rotateY: Math.PI 
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>

      <ambientLight intensity={1} />

      <motion.group
        // FIXED POSITION: Brought the room down from y: 2 to y: 0
        position={[1.5, 0, 3]} 
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{ y: section === 0 ? 0 : -1 }}
      >
        <Office section={section} />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.07, 0.16, -0.57]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>
      </motion.group>
      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
      <Projects />
    </>
  );
};