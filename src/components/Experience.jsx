import { Float, MeshDistortMaterial, MeshWobbleMaterial, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Background } from "./Background";
import { Office } from "./Office";
import { Projects } from "./Projects";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const isMiddleSize = window.innerWidth >= 768 && window.innerWidth < 1200;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const [section, setSection] = useState(0);
  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

  useEffect(() => {
    if (characterGroup.current) {
      characterGroup.current.position.set(0, 5, 0);
    }
  }, []); 

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, { ...framerMotionConfig });
    animate(cameraLookAtX, menuOpened ? 5 : 0, { ...framerMotionConfig });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();
  const characterGroup = useRef();
  const [characterAnimation, setCharacterAnimation] = useState("Typing");

 useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 200);
  }, [section]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);
    if (curSection > 3) curSection = 3;
    if (curSection !== section) setSection(curSection);

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0.8, 0);

    if (section === 0 && characterGroup.current && characterContainerAboutRef.current) {
      const chairPos = new THREE.Vector3();
      characterContainerAboutRef.current.getWorldPosition(chairPos);
      const zOffset = (isMobile || isMiddleSize) ? -0.22 : -0.35;

      const offset = new THREE.Vector3(0, 0.25 * officeScaleRatio, zOffset);
      offset.applyQuaternion(characterContainerAboutRef.current.getWorldQuaternion(new THREE.Quaternion()));
      chairPos.add(offset);

      characterGroup.current.position.copy(chairPos);
      characterGroup.current.rotation.set(0, 2.2, 0);
    }
  });

  return (
    <>
      <Background />
      <motion.group
        ref={characterGroup}
        animate={"" + section}
        transition={{ duration: 0.6 }}
        variants={{
         0: { scale: officeScaleRatio },
          1: {
            y: -viewport.height + 1.4, x: isMobile ? 0.35 : 0, z: 7,
            rotateY: 0, rotateX: 0, rotateZ: 0, scale: isMobile ? 1.5 : 0.9
          },
          2: {
            x: isMobile ? -1.4 : -2, y: -viewport.height * 2 + 0.2, z: 0,
            rotateY: Math.PI / 2, rotateX: 0, rotateZ: 0, scale: 0.9
          },
          3: {
            y: -viewport.height * 3 + 1.37, x: 0.22, z: 8.5,
            rotateY: 0, rotateX: 0, rotateZ: 0, scale: 0.9,
          },
        }}
      >
      <Avatar animation={characterAnimation} wireframe={section === 1} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[isMobile ? 0 : 1.5, isMobile ? -viewport.height / 6 : 0, 3]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI / 4}
        animate={{ y: isMobile ? -viewport.height / 6 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Office section={section} />
        <group ref={characterContainerAboutRef} name="CharacterSpot" position={[0.07, 0.16, -0.57]} rotation={[-Math.PI, 0.42, -Math.PI]} />
      </motion.group>
      <motion.group
        position={[0, -10, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5 * officeScaleRatio,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        {section === 1 && (
          <>
            <Float>
              <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
                <sphereGeometry />
                <MeshDistortMaterial opacity={0.8} transparent distort={0.4} speed={4} color="red" />
              </mesh>
            </Float>
            <Float>
              <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
                <sphereGeometry />
                <MeshDistortMaterial opacity={0.8} transparent distort={1} speed={5} color="yellow" />
              </mesh>
            </Float>
            <Float>
              <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
                <boxGeometry />
                <MeshWobbleMaterial opacity={0.8} transparent factor={1} speed={5} color="blue" />
              </mesh>
            </Float>
          </>
          )}
      </motion.group>
      <Projects />
    </>
  );
};