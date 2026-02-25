import React, { useEffect, useRef } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useControls } from 'leva'
import * as THREE from "three";

export function Avatar(props) {
  const { animation } = props;
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });

  const group = useRef();
  const { scene } = useGLTF('models/68f77804f367100305838e40.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
  const { animations: standingAnimation } = useFBX("animations/Standing Idle.fbx");
  const { animations: fallingAnimation } = useFBX("animations/Falling Idle.fbx");

  typingAnimation[0].name = "Typing";
  standingAnimation[0].name = "Standing";
  fallingAnimation[0].name = "Falling";

  const { actions } = useAnimations(
    [typingAnimation[0], standingAnimation[0], fallingAnimation[0]],
    group
  );
  
  useFrame((state) => {
    if (headFollow && group.current.getObjectByName("Head")) {
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollow && group.current.getObjectByName("Spine2")) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine2").lookAt(target);
    }
  });

  useEffect(() => {
    const action = actions[animation];
    if (action) {
      action.reset().fadeIn(0.5).play();
    }
    return () => {
      if (action) action.fadeOut(0.5);
    };
  }, [animation, actions]);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
    });
  }, [wireframe, materials]);

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh frustumCulled={false} name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh frustumCulled={false} name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh frustumCulled={false} name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh frustumCulled={false} name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  )
}

useGLTF.preload('models/68f77804f367100305838e40.glb')