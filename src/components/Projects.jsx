import { useState } from "react";
import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Suburbia",
    url: "https://custom.anitacreativestudio.com/",
    image: "projects/custom.jpg",
    description: "Custom 3D skateboard configurator.",
  },
  {
    title: "3d Photo Album",
    url: "https://album.anitacreativestudio.com/",
    image: "projects/album.jpg",
    description: "Interactive 3D photo album. Add your own photos.",
  },
  {
    title: "Fizzi Soda",
    url: "https://fizzi.anitacreativestudio.com/",
    image: "projects/fizzi.jpg",
    description: "Immersive product showcase for a probiotic soda brand.",
  },
  {
    title: "3d Car Showcase",
    url: "https://showcase.anitacreativestudio.com/",
    image: "projects/showcase.jpg",
    description: "High-performance automotive interactive slideshow.",
  },
  {
    title: "Luxury Cologne",
    url: "https://luxury.anitacreativestudio.com/",
    image: "projects/luxury.jpg",
    description: "Premium digital experience for a luxury fragrance brand.",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;
  const [hovered, setHovered] = useState(false);

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.9 : 0.5);
  }, [highlighted]);

  useFrame(() => {
    if (background.current) {
      background.current.material.opacity = bgOpacity.get();
    }
  });

  return (
    <group {...props}>
      {/* 1. Base Layer: Deep Slate Plate (No Offset) */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[2.3, 2.6]} />
        <meshBasicMaterial 
          color="#020617" 
          transparent 
          opacity={highlighted ? 0.9 : 0.5} 
        />
      </mesh>

      {/* 2. Highlight Frame: "The Pop" effect (Slightly larger, glowing) */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[2.26, 2.66]} />
        <meshBasicMaterial 
          color={highlighted ? "#3b82f6" : "#1e1b4b"} 
          transparent 
          opacity={0.9} 
        />
      </mesh>
 
      <motion.group
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        whileHover={{ scale: 1.14 }}
        transition={{ duration: 0.3 }}
      >
      <mesh position={[0, 0.4, 0.04]}>
        <planeGeometry args={[2.06, 1.25]} />
        <meshBasicMaterial color="#fffff" transparent opacity={1}/>
      </mesh>
        <Image
          scale={[2, 1.2, 1]}
          url={project.image}
          toneMapped={false}
          position={[0, 0.4, 0.05]}
          color={hovered ? "#ffffff" : "#cccccc"}
        />
      </motion.group>

      {/* 4. Text Content (Ensuring clear hierarchy and no overlap) */}
      <motion.group
        whileHover={{ scale: 1.06 }} 
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Text
        maxWidth={3}
        anchorX="center"
        anchorY="top"
        fontSize={0.22}
        position={[0, -0.3, 0.06]}
        color="white"
        letterSpacing={0.07} 
      >
        {project.title.toUpperCase()}
      </Text>
      </motion.group>

      <motion.group
        whileHover={{ scale: 1.04 }} 
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Text
          maxWidth={1.8}
          anchorX="center"
          anchorY="top"
          fontSize={0.13}
          position={[0, -0.6, 0.06]}
          // color="#94a3b8" 
          color="white"
          letterSpacing={0.1}
        >
        {project.description}
        </Text>
      </motion.group>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};