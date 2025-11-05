//  ROOM + AVATAR

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/scene.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterSpot" position={[-0.146, 0.46, -0.157]} rotation={[Math.PI, -0.008, Math.PI]}>
          <group name="Armature">
            <primitive object={nodes.Hips} />
            <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
            <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
            <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
            <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
          </group>
        </group>
        <mesh name="Floor" geometry={nodes.Floor.geometry} material={materials.M_Floor_LightBrown} position={[-0.178, 0.32, 0.373]} />
        <group name="Wall_Window" position={[-2.138, 1.776, 0.373]}>
          <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.M_Wall} />
          <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials.M_Glass} />
          <mesh name="Cube001_2" geometry={nodes.Cube001_2.geometry} material={materials.M_Window} />
          <mesh name="Cube001_3" geometry={nodes.Cube001_3.geometry} material={materials.M_Floor_LightBrown} />
        </group>
        <group name="Wall" position={[-0.178, 1.776, -1.586]}>
          <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials.M_Wall} />
          <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={materials.M_Floor_LightBrown} />
        </group>
        <group name="Chair" position={[-0.122, 0.975, -0.23]}>
          <mesh name="Cylinder011" geometry={nodes.Cylinder011.geometry} material={materials.M_DarkGrey} />
          <mesh name="Cylinder011_1" geometry={nodes.Cylinder011_1.geometry} material={materials.M_LightGrey1} />
          <mesh name="Cylinder011_2" geometry={nodes.Cylinder011_2.geometry} material={materials.M_LightGrey2} />
        </group>
        <group name="Computer" position={[-0.868, 0.579, -0.958]}>
          <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials.M_Computer} />
          <mesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials.M_ComputerButtons} />
        </group>
        <group name="Monitor" position={[-0.17, 1.507, -1.13]}>
          <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials.M_ScreenBlack} />
          <mesh name="Cube015_1" geometry={nodes.Cube015_1.geometry} material={materials.M_ScreenGrey} />
        </group>
        <mesh name="MousePad" geometry={nodes.MousePad.geometry} material={materials.M_MousePad} position={[0.158, 1.178, -0.725]} scale={0.934} />
        <group name="Mouse" position={[0.087, 1.197, -0.727]}>
          <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials.M_MouseGrey} />
          <mesh name="Cube018_1" geometry={nodes.Cube018_1.geometry} material={materials.M_MouseBlack} />
        </group>
        <mesh name="Cable1" geometry={nodes.Cable1.geometry} material={materials.M_Cable} position={[-0.483, 0.969, -1.076]} />
        <mesh name="Cable2" geometry={nodes.Cable2.geometry} material={materials.M_Cable} position={[-0.654, 1.067, -1.261]} />
        <group name="Keyboard" position={[-0.33, 1.193, -0.736]} scale={0.909}>
          <mesh name="Cube020" geometry={nodes.Cube020.geometry} material={materials.M_Keyboard} />
          <mesh name="Cube020_1" geometry={nodes.Cube020_1.geometry} material={materials.M_KeyboardButton} />
        </group>
        <mesh name="Cable3" geometry={nodes.Cable3.geometry} material={materials.M_Cable} position={[-0.682, 0.955, -1.124]} />
        <mesh name="Shelf" geometry={nodes.Shelf.geometry} material={materials.M_ShelfBrown} position={[-0.124, 1.858, -1.406]} />
        <group name="Book4" position={[-0.826, 2.078, -1.431]}>
          <mesh name="Cube026" geometry={nodes.Cube026.geometry} material={materials.M_Book_Red} />
          <mesh name="Cube026_1" geometry={nodes.Cube026_1.geometry} material={materials.M_Book_Paper} />
        </group>
        <group name="Book5" position={[-0.741, 2.052, -1.431]}>
          <mesh name="Cube030" geometry={nodes.Cube030.geometry} material={materials.M_Book_Paper} />
          <mesh name="Cube030_1" geometry={nodes.Cube030_1.geometry} material={materials.M_Book_Blue} />
        </group>
        <group name="Book6" position={[-0.673, 2.052, -1.431]}>
          <mesh name="Cube032" geometry={nodes.Cube032.geometry} material={materials.M_Book_Paper} />
          <mesh name="Cube032_1" geometry={nodes.Cube032_1.geometry} material={materials.M_Book_yellow} />
        </group>
        <group name="Plant1" position={[-0.384, 1.974, -1.368]}>
          <mesh name="Cylinder015" geometry={nodes.Cylinder015.geometry} material={materials.M_PlantPot} />
          <mesh name="Cylinder015_1" geometry={nodes.Cylinder015_1.geometry} material={materials.M_PlantDirt} />
          <mesh name="Cylinder015_2" geometry={nodes.Cylinder015_2.geometry} material={materials.M_PlantGreen} />
        </group>
        <group name="Notepad_open" position={[0.67, 1.186, -0.885]}>
          <mesh name="Cube033" geometry={nodes.Cube033.geometry} material={materials.M_CoverPurple} />
          <mesh name="Cube033_1" geometry={nodes.Cube033_1.geometry} material={materials.M_CoverBlack} />
          <mesh name="Cube033_2" geometry={nodes.Cube033_2.geometry} material={materials.M_Paper} />
        </group>
        <group name="Notepad1" position={[0.768, 1.179, -0.715]}>
          <mesh name="Cube034" geometry={nodes.Cube034.geometry} material={materials.M_CoverPurple} />
          <mesh name="Cube034_1" geometry={nodes.Cube034_1.geometry} material={materials.M_CoverBlack} />
          <mesh name="Cube034_2" geometry={nodes.Cube034_2.geometry} material={materials.M_Paper} />
        </group>
        <group name="Notepad2" position={[0.769, 1.183, -0.716]}>
          <mesh name="Cube035" geometry={nodes.Cube035.geometry} material={materials.M_CoverRed} />
          <mesh name="Cube035_1" geometry={nodes.Cube035_1.geometry} material={materials.M_CoverBlack} />
          <mesh name="Cube035_2" geometry={nodes.Cube035_2.geometry} material={materials.M_Paper} />
        </group>
        <mesh name="PencilPot" geometry={nodes.PencilPot.geometry} material={materials.M_PencilPot} position={[0.649, 1.243, -1.124]} />
        <group name="Pencil1" position={[0.623, 1.279, -1.128]}>
          <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials.M_Pencil_Yellow} />
          <mesh name="Cylinder002_1" geometry={nodes.Cylinder002_1.geometry} material={materials.M_Pencil_Tip} />
          <mesh name="Cylinder002_2" geometry={nodes.Cylinder002_2.geometry} material={materials.M_Pencil_Top} />
        </group>
        <group name="Pencil2" position={[0.634, 1.274, -1.103]}>
          <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials.M_Pencil_Blue} />
          <mesh name="Cylinder003_1" geometry={nodes.Cylinder003_1.geometry} material={materials.M_Pencil_Tip} />
          <mesh name="Cylinder003_2" geometry={nodes.Cylinder003_2.geometry} material={materials.M_Pencil_Top} />
        </group>
        <group name="Pencil3" position={[0.435, 1.187, -1.002]}>
          <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials.M_Pencil_Red} />
          <mesh name="Cylinder004_1" geometry={nodes.Cylinder004_1.geometry} material={materials.M_Pencil_Tip} />
          <mesh name="Cylinder004_2" geometry={nodes.Cylinder004_2.geometry} material={materials.M_Pencil_Top} />
        </group>
        <group name="Carpet" position={[-0.135, 0.346, -0.029]}>
          <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials.M_Carpet_base} />
          <mesh name="Circle002_1" geometry={nodes.Circle002_1.geometry} material={materials.M_Carpet_Ring1} />
          <mesh name="Circle002_2" geometry={nodes.Circle002_2.geometry} material={materials.M_Capet_Ring2} />
          <mesh name="Circle002_3" geometry={nodes.Circle002_3.geometry} material={materials.M_Capet_RingMiddle} />
        </group>
        <group name="Picture" position={[-2.087, 2.064, -0.13]}>
          <mesh name="Cube039" geometry={nodes.Cube039.geometry} material={materials.M_PictureBlue} />
          <mesh name="Cube039_1" geometry={nodes.Cube039_1.geometry} material={materials.M_PictureFrame} />
          <mesh name="Cube039_2" geometry={nodes.Cube039_2.geometry} material={materials.M_PictureBackground} />
        </group>
        <group name="Book3" position={[0.435, 2.078, -1.431]}>
          <mesh name="Cube045" geometry={nodes.Cube045.geometry} material={materials.M_Book_Red} />
          <mesh name="Cube045_1" geometry={nodes.Cube045_1.geometry} material={materials.M_Book_Paper} />
        </group>
        <group name="Book1" position={[-1.985, 1.952, -1.431]}>
          <mesh name="Cube031" geometry={nodes.Cube031.geometry} material={materials.M_Book_Paper} />
          <mesh name="Cube031_1" geometry={nodes.Cube031_1.geometry} material={materials.M_Book_Blue} />
        </group>
        <group name="Book7" position={[-1.924, 1.952, -1.431]}>
          <mesh name="Cube040" geometry={nodes.Cube040.geometry} material={materials.M_Book_Paper} />
          <mesh name="Cube040_1" geometry={nodes.Cube040_1.geometry} material={materials.M_Book_yellow} />
        </group>
        <group name="Plant2" position={[1.32, 0.51, -1.15]}>
          <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials.M_PlantPot} />
          <mesh name="Cylinder010_1" geometry={nodes.Cylinder010_1.geometry} material={materials.M_PlantDirt} />
          <mesh name="Cylinder010_2" geometry={nodes.Cylinder010_2.geometry} material={materials.M_PlantGreen} />
          <mesh name="Cylinder010_3" geometry={nodes.Cylinder010_3.geometry} material={materials.M_PlantBrown} />
        </group>
        <group name="Table" position={[-0.135, 1.122, -0.925]}>
          <mesh name="Cube042" geometry={nodes.Cube042.geometry} material={materials.M_Table} />
          <mesh name="Cube042_1" geometry={nodes.Cube042_1.geometry} material={materials.M_TableLeg} />
        </group>
        <group name="Curtain" position={[-2.063, 1.821, 1.137]}>
          <mesh name="Cube046" geometry={nodes.Cube046.geometry} material={materials.M_Curtains} />
          <mesh name="Cube046_1" geometry={nodes.Cube046_1.geometry} material={materials.M_LightGrey1} />
          <mesh name="Cube046_2" geometry={nodes.Cube046_2.geometry} material={materials.M_LightGrey2} />
        </group>
        <group name="Decor1" position={[-0.007, 1.975, -1.412]}>
          <mesh name="Cube052" geometry={nodes.Cube052.geometry} material={materials.M_DecorYellow} />
          <mesh name="Cube052_1" geometry={nodes.Cube052_1.geometry} material={materials.M_DarkGrey} />
        </group>
        <group name="Cupboard" position={[-1.829, 0.389, -0.104]}>
          <mesh name="Cylinder021" geometry={nodes.Cylinder021.geometry} material={materials.M_LightGrey2} />
          <mesh name="Cylinder021_1" geometry={nodes.Cylinder021_1.geometry} material={materials.M_LightGrey1} />
          <mesh name="Cylinder021_2" geometry={nodes.Cylinder021_2.geometry} material={materials.M_Cupboard} />
        </group>
        <group name="Clock" position={[-0.104, 2.707, -1.542]}>
          <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={materials.M_Black} />
          <mesh name="Plane015_1" geometry={nodes.Plane015_1.geometry} material={materials.M_White} />
        </group>
        <group name="Book2" position={[0.37, 2.052, -1.431]}>
          <mesh name="Cube055" geometry={nodes.Cube055.geometry} material={materials.M_Book_Paper} />
          <mesh name="Cube055_1" geometry={nodes.Cube055_1.geometry} material={materials.M_Book_Orange} />
        </group>
        <group name="Book8" position={[0.302, 2.052, -1.431]}>
          <mesh name="Cube056" geometry={nodes.Cube056.geometry} material={materials.M_Book_Paper} />
          <mesh name="Cube056_1" geometry={nodes.Cube056_1.geometry} material={materials.M_Book_Blue} />
        </group>
        <group name="Book9" position={[-2.048, 1.49, -1.431]}>
          <mesh name="Cube058" geometry={nodes.Cube058.geometry} material={materials.M_Book_Red} />
          <mesh name="Cube058_1" geometry={nodes.Cube058_1.geometry} material={materials.M_Book_Paper} />
        </group>
        <group name="Book" position={[-2.048, 1.979, -1.431]}>
          <mesh name="Cube061" geometry={nodes.Cube061.geometry} material={materials.M_Book_Red} />
          <mesh name="Cube061_1" geometry={nodes.Cube061_1.geometry} material={materials.M_Book_Paper} />
        </group>
        <group name="Book10" position={[-1.851, 1.946, -1.431]}>
          <mesh name="Cube062" geometry={nodes.Cube062.geometry} material={materials.M_Book_Paper} />
          <mesh name="Cube062_1" geometry={nodes.Cube062_1.geometry} material={materials.M_Book_Orange} />
        </group>
        <group name="Decor2" position={[-1.905, 2.334, -1.383]}>
          <mesh name="Cube067" geometry={nodes.Cube067.geometry} material={materials.M_DecorWhite} />
          <mesh name="Cube067_1" geometry={nodes.Cube067_1.geometry} material={materials.M_DarkGrey} />
        </group>
        <group name="CornerShelf" position={[-2.079, 1.742, -1.341]}>
          <mesh name="Cylinder024" geometry={nodes.Cylinder024.geometry} material={materials.M_LightGrey1} />
          <mesh name="Cylinder024_1" geometry={nodes.Cylinder024_1.geometry} material={materials.M_ShelfBrown} />
        </group>
        <group name="Decor3" position={[-1.883, 1.367, -1.4]}>
          <mesh name="Cube041" geometry={nodes.Cube041.geometry} material={materials.M_DarkGrey} />
          <mesh name="Cube041_1" geometry={nodes.Cube041_1.geometry} material={materials.M_DecorBlue} />
        </group>
        <mesh name="Cable4" geometry={nodes.Cable4.geometry} material={materials.M_Cable} position={[-1.042, 0.854, -1.28]} />
        <mesh name="Cable5" geometry={nodes.Cable5.geometry} material={materials.M_Cable} position={[-2.039, 0.928, -0.493]} />
        <group name="Connector2" position={[-2.09, 0.529, -0.69]}>
          <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials.M_Connector} />
          <mesh name="Cube011_1" geometry={nodes.Cube011_1.geometry} material={materials.M_DarkGrey} />
        </group>
        <group name="Lamp" position={[-0.857, 1.467, -0.88]}>
          <mesh name="Cylinder028" geometry={nodes.Cylinder028.geometry} material={materials.M_LampBase} />
          <mesh name="Cylinder028_1" geometry={nodes.Cylinder028_1.geometry} material={materials.M_LampLightGrey} />
          <mesh name="Cylinder028_2" geometry={nodes.Cylinder028_2.geometry} material={materials.M_LampDarkGrey} />
        </group>
        <group name="Printer" position={[-1.85, 1.454, -0.095]}>
          <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials.M_Printer_LightGrey} />
          <mesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={materials.M_PrinterBlue} />
          <mesh name="Plane002_2" geometry={nodes.Plane002_2.geometry} material={materials.M_Printer_Grey} />
          <mesh name="Plane002_3" geometry={nodes.Plane002_3.geometry} material={materials.M_Paper} />
        </group>
        <group name="Scrissors" position={[0.663, 1.287, -1.138]}>
          <mesh name="Cylinder017" geometry={nodes.Cylinder017.geometry} material={materials.M_LightGrey1} />
          <mesh name="Cylinder017_1" geometry={nodes.Cylinder017_1.geometry} material={materials.M_DarkGrey} />
          <mesh name="Cylinder017_2" geometry={nodes.Cylinder017_2.geometry} material={materials.M_ScrissorsBlue} />
        </group>
        <group name="Connector1" position={[-1.04, 0.529, -1.54]}>
          <mesh name="Cube043" geometry={nodes.Cube043.geometry} material={materials.M_Connector} />
          <mesh name="Cube043_1" geometry={nodes.Cube043_1.geometry} material={materials.M_DarkGrey} />
        </group>
        <mesh name="Bin" geometry={nodes.Bin.geometry} material={materials.M_Bin} position={[-1.853, 0.498, 0.591]} scale={0.83} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.glb')
