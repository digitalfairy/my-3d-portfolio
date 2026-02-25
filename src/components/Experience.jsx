import { Float, MeshDistortMaterial, MeshWobbleMaterial, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
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
          0: { scale: 0.9 },
          1: { y: -viewport.height + 0.5, x: 0, z: 7, rotateY: 0 },
          2: { x: -2, y: -viewport.height * 2 + 0.5, z: 0, rotateY: Math.PI / 2 },
          3: { y: -viewport.height * 3 + 1, x: 0.3, z: 8.5, rotateY: -Math.PI / 4 },
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
      </motion.group>

      <Projects />
    </>
  );
};