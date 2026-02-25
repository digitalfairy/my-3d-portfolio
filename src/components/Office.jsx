import React, { useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Office(props) {
  const { nodes, materials } = useGLTF('models/room_scene.glb')

  // 1. Manual Video Element Strategy
  // This creates a standard HTML5 video tag in memory
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "textures/vscode.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    return vid;
  });

  useEffect(() => {
    const playVideo = () => video.play().catch(e => console.log("Waiting for interaction"));
    playVideo();
    
    window.addEventListener('pointerdown', playVideo);
    return () => window.removeEventListener('pointerdown', playVideo);
  }, [video]);

  return (
    <group {...props} dispose={null}>

      <mesh geometry={nodes.Floor.geometry} material={materials.M_Floor_LightBrown} position={[-0.178, 0.32, 0.373]} />
      
      <group position={[-2.138, 1.776, 0.373]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.M_Wall} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.M_Glass} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials.M_Window} />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.M_Floor_LightBrown} />
      </group>

      <group position={[-0.178, 1.776, -1.586]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.M_Wall} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.M_Floor_LightBrown} />
      </group>

      <group position={[-0.07, 0.975, -0.222]}>
        <mesh geometry={nodes.Cylinder011.geometry} material={materials.M_DarkGrey} />
        <mesh geometry={nodes.Cylinder011_1.geometry} material={materials.M_LightGrey1} />
        <mesh geometry={nodes.Cylinder011_2.geometry} material={materials.M_LightGrey2} />
      </group>

      <group position={[-0.868, 0.579, -0.958]}>
        <mesh geometry={nodes.Cube010.geometry} material={materials.M_Computer} />
        <mesh geometry={nodes.Cube010_1.geometry} material={materials.M_ComputerButtons} />
      </group>

      {/* --- THE MONITOR SECTION --- */}

      <group position={[-0.17, 1.507, -1.13]}>
        <mesh geometry={nodes.Cube015_1.geometry} material={materials.M_ScreenGrey} />
        <mesh position={[0, 0.045, 0.1]}>
          <planeGeometry args={[0.83, 0.45]} />
          <meshBasicMaterial toneMapped={false} >
            <videoTexture attach="map" args={[video]} />
          </meshBasicMaterial>
        </mesh>

        <mesh geometry={nodes.Cube015.geometry}>
          <meshBasicMaterial color="black" />
        </mesh>
      </group>
      <mesh geometry={nodes.MousePad.geometry} material={materials.M_MousePad} position={[0.158, 1.178, -0.725]} scale={0.934} />
      <group position={[0.087, 1.197, -0.727]}>
        <mesh geometry={nodes.Cube018.geometry} material={materials.M_MouseGrey} />
        <mesh geometry={nodes.Cube018_1.geometry} material={materials.M_MouseBlack} />
      </group>
      <mesh geometry={nodes.Cable1.geometry} material={materials.M_Cable} position={[-0.483, 0.969, -1.076]} />
      <mesh geometry={nodes.Cable2.geometry} material={materials.M_Cable} position={[-0.654, 1.067, -1.261]} />
      <group position={[-0.33, 1.193, -0.736]} scale={0.909}>
        <mesh geometry={nodes.Cube020.geometry} material={materials.M_Keyboard} />
        <mesh geometry={nodes.Cube020_1.geometry} material={materials.M_KeyboardButton} />
      </group>
      <mesh geometry={nodes.Cable3.geometry} material={materials.M_Cable} position={[-0.682, 0.955, -1.124]} />
      <mesh geometry={nodes.Shelf.geometry} material={materials.M_ShelfBrown} position={[-0.124, 1.858, -1.406]} />
      <group position={[-0.826, 2.078, -1.431]}>
        <mesh geometry={nodes.Cube026.geometry} material={materials.M_Book_Red} />
        <mesh geometry={nodes.Cube026_1.geometry} material={materials.M_Book_Paper} />
      </group>
      <group position={[-0.741, 2.052, -1.431]}>
        <mesh geometry={nodes.Cube030.geometry} material={materials.M_Book_Paper} />
        <mesh geometry={nodes.Cube030_1.geometry} material={materials.M_Book_Blue} />
      </group>
      <group position={[-0.673, 2.052, -1.431]}>
        <mesh geometry={nodes.Cube032.geometry} material={materials.M_Book_Paper} />
        <mesh geometry={nodes.Cube032_1.geometry} material={materials.M_Book_yellow} />
      </group>
      <group position={[-0.384, 1.974, -1.368]}>
        <mesh geometry={nodes.Cylinder015.geometry} material={materials.M_PlantPot} />
        <mesh geometry={nodes.Cylinder015_1.geometry} material={materials.M_PlantDirt} />
        <mesh geometry={nodes.Cylinder015_2.geometry} material={materials.M_PlantGreen} />
      </group>
      <group position={[0.67, 1.186, -0.885]}>
        <mesh geometry={nodes.Cube033.geometry} material={materials.M_CoverPurple} />
        <mesh geometry={nodes.Cube033_1.geometry} material={materials.M_CoverBlack} />
        <mesh geometry={nodes.Cube033_2.geometry} material={materials.M_Paper} />
      </group>
      <group position={[0.768, 1.179, -0.715]}>
        <mesh geometry={nodes.Cube034.geometry} material={materials.M_CoverPurple} />
        <mesh geometry={nodes.Cube034_1.geometry} material={materials.M_CoverBlack} />
        <mesh geometry={nodes.Cube034_2.geometry} material={materials.M_Paper} />
      </group>
      <group position={[0.769, 1.183, -0.716]}>
        <mesh geometry={nodes.Cube035.geometry} material={materials.M_CoverRed} />
        <mesh geometry={nodes.Cube035_1.geometry} material={materials.M_CoverBlack} />
        <mesh geometry={nodes.Cube035_2.geometry} material={materials.M_Paper} />
      </group>
      <mesh geometry={nodes.PencilPot.geometry} material={materials.M_PencilPot} position={[0.649, 1.243, -1.124]} />
      <group position={[0.623, 1.279, -1.128]}>
        <mesh geometry={nodes.Cylinder002.geometry} material={materials.M_Pencil_Yellow} />
        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials.M_Pencil_Tip} />
        <mesh geometry={nodes.Cylinder002_2.geometry} material={materials.M_Pencil_Top} />
      </group>
      <group position={[0.634, 1.274, -1.103]}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials.M_Pencil_Blue} />
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials.M_Pencil_Tip} />
        <mesh geometry={nodes.Cylinder003_2.geometry} material={materials.M_Pencil_Top} />
      </group>
      <group position={[0.435, 1.187, -1.002]}>
        <mesh geometry={nodes.Cylinder004.geometry} material={materials.M_Pencil_Red} />
        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials.M_Pencil_Tip} />
        <mesh geometry={nodes.Cylinder004_2.geometry} material={materials.M_Pencil_Top} />
      </group>
      <group position={[-0.135, 0.346, -0.029]}>
        <mesh geometry={nodes.Circle002.geometry} material={materials.M_Carpet_base} />
        <mesh geometry={nodes.Circle002_1.geometry} material={materials.M_Carpet_Ring1} />
        <mesh geometry={nodes.Circle002_2.geometry} material={materials.M_Capet_Ring2} />
        <mesh geometry={nodes.Circle002_3.geometry} material={materials.M_Capet_RingMiddle} />
      </group>
      <group position={[-2.087, 2.064, -0.13]}>
        <mesh geometry={nodes.Cube039.geometry} material={materials.M_PictureBlue} />
        <mesh geometry={nodes.Cube039_1.geometry} material={materials.M_PictureFrame} />
        <mesh geometry={nodes.Cube039_2.geometry} material={materials.M_PictureBackground} />
      </group>
      <group position={[0.435, 2.078, -1.431]}>
        <mesh geometry={nodes.Cube045.geometry} material={materials.M_Book_Red} />
        <mesh geometry={nodes.Cube045_1.geometry} material={materials.M_Book_Paper} />
      </group>
      <group position={[-1.985, 1.952, -1.431]}>
        <mesh geometry={nodes.Cube031.geometry} material={materials.M_Book_Paper} />
        <mesh geometry={nodes.Cube031_1.geometry} material={materials.M_Book_Blue} />
      </group>
      <group position={[-1.924, 1.952, -1.431]}>
        <mesh geometry={nodes.Cube040.geometry} material={materials.M_Book_Paper} />
        <mesh geometry={nodes.Cube040_1.geometry} material={materials.M_Book_yellow} />
      </group>
      <group position={[1.32, 0.51, -1.15]}>
        <mesh geometry={nodes.Cylinder010.geometry} material={materials.M_PlantPot} />
        <mesh geometry={nodes.Cylinder010_1.geometry} material={materials.M_PlantDirt} />
        <mesh geometry={nodes.Cylinder010_2.geometry} material={materials.M_PlantGreen} />
        <mesh geometry={nodes.Cylinder010_3.geometry} material={materials.M_PlantBrown} />
      </group>
      <group position={[-0.135, 1.122, -0.925]}>
        <mesh geometry={nodes.Cube042.geometry} material={materials.M_Table} />
        <mesh geometry={nodes.Cube042_1.geometry} material={materials.M_TableLeg} />
      </group>
      <group position={[-2.063, 1.821, 1.137]}>
        <mesh geometry={nodes.Cube046.geometry} material={materials.M_Curtains} />
        <mesh geometry={nodes.Cube046_1.geometry} material={materials.M_LightGrey1} />
        <mesh geometry={nodes.Cube046_2.geometry} material={materials.M_LightGrey2} />
      </group>
      <group position={[-0.007, 1.975, -1.412]}>
        <mesh geometry={nodes.Cube052.geometry} material={materials.M_DecorYellow} />
        <mesh geometry={nodes.Cube052_1.geometry} material={materials.M_DarkGrey} />
      </group>
      <group position={[-1.829, 0.389, -0.104]}>
        <mesh geometry={nodes.Cylinder021.geometry} material={materials.M_LightGrey2} />
        <mesh geometry={nodes.Cylinder021_1.geometry} material={materials.M_LightGrey1} />
        <mesh geometry={nodes.Cylinder021_2.geometry} material={materials.M_Cupboard} />
      </group>
      <group position={[-0.104, 2.707, -1.542]}>
        <mesh geometry={nodes.Plane015.geometry} material={materials.M_Black} />
        <mesh geometry={nodes.Plane015_1.geometry} material={materials.M_White} />
      </group>
      <group position={[0.37, 2.052, -1.431]}>
        <mesh geometry={nodes.Cube055.geometry} material={materials.M_Book_Paper} />
        <mesh geometry={nodes.Cube055_1.geometry} material={materials.M_Book_Orange} />
      </group>
      <group position={[0.302, 2.052, -1.431]}>
        <mesh geometry={nodes.Cube056.geometry} material={materials.M_Book_Paper} />
        <mesh geometry={nodes.Cube056_1.geometry} material={materials.M_Book_Blue} />
      </group>
      <group position={[-2.048, 1.49, -1.431]}>
        <mesh geometry={nodes.Cube058.geometry} material={materials.M_Book_Red} />
        <mesh geometry={nodes.Cube058_1.geometry} material={materials.M_Book_Paper} />
      </group>
      <group position={[-2.048, 1.979, -1.431]}>
        <mesh geometry={nodes.Cube061.geometry} material={materials.M_Book_Red} />
        <mesh geometry={nodes.Cube061_1.geometry} material={materials.M_Book_Paper} />
      </group>
      <group position={[-1.851, 1.946, -1.431]}>
        <mesh geometry={nodes.Cube062.geometry} material={materials.M_Book_Paper} />
        <mesh geometry={nodes.Cube062_1.geometry} material={materials.M_Book_Orange} />
      </group>
      <group position={[-1.905, 2.334, -1.383]}>
        <mesh geometry={nodes.Cube067.geometry} material={materials.M_DecorWhite} />
        <mesh geometry={nodes.Cube067_1.geometry} material={materials.M_DarkGrey} />
      </group>
      <group position={[-2.079, 1.742, -1.341]}>
        <mesh geometry={nodes.Cylinder024.geometry} material={materials.M_LightGrey1} />
        <mesh geometry={nodes.Cylinder024_1.geometry} material={materials.M_ShelfBrown} />
      </group>
      <group position={[-1.883, 1.367, -1.4]}>
        <mesh geometry={nodes.Cube041.geometry} material={materials.M_DarkGrey} />
        <mesh geometry={nodes.Cube041_1.geometry} material={materials.M_DecorBlue} />
      </group>
      <mesh geometry={nodes.Cable4.geometry} material={materials.M_Cable} position={[-1.042, 0.854, -1.28]} />
      <mesh geometry={nodes.Cable5.geometry} material={materials.M_Cable} position={[-2.039, 0.928, -0.493]} />
      <group position={[-2.09, 0.529, -0.69]}>
        <mesh geometry={nodes.Cube011.geometry} material={materials.M_Connector} />
        <mesh geometry={nodes.Cube011_1.geometry} material={materials.M_DarkGrey} />
      </group>
      <group position={[-0.857, 1.467, -0.88]}>
        <mesh geometry={nodes.Cylinder028.geometry} material={materials.M_LampBase} />
        <mesh geometry={nodes.Cylinder028_1.geometry} material={materials.M_LampLightGrey} />
        <mesh geometry={nodes.Cylinder028_2.geometry} material={materials.M_LampDarkGrey} />
      </group>
      <group position={[-1.85, 1.454, -0.095]}>
        <mesh geometry={nodes.Plane002.geometry} material={materials.M_Printer_LightGrey} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.M_PrinterBlue} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials.M_Printer_Grey} />
        <mesh geometry={nodes.Plane002_3.geometry} material={materials.M_Paper} />
      </group>
      <group position={[0.663, 1.287, -1.138]}>
        <mesh geometry={nodes.Cylinder017.geometry} material={materials.M_LightGrey1} />
        <mesh geometry={nodes.Cylinder017_1.geometry} material={materials.M_DarkGrey} />
        <mesh geometry={nodes.Cylinder017_2.geometry} material={materials.M_ScrissorsBlue} />
      </group>
      <group position={[-1.04, 0.529, -1.54]}>
        <mesh geometry={nodes.Cube043.geometry} material={materials.M_Connector} />
        <mesh geometry={nodes.Cube043_1.geometry} material={materials.M_DarkGrey} />
      </group>
      <mesh geometry={nodes.Bin.geometry} material={materials.M_Bin} position={[-1.853, 0.498, 0.591]} scale={0.83} />
    </group>
  )
}

useGLTF.preload('models/room_scene.glb')