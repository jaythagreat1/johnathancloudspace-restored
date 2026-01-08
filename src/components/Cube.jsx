import React, { useRef, useState } from 'react';
import { PerspectiveCamera, RenderTexture, Image } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
  const textRef = useRef();
  const [textPosition, setTextPosition] = useState([0, 0, 0]);

  useFrame((state) => {
    setTextPosition([
      textPosition[0],
      Math.sin(state.clock.elapsedTime) * 2,
      textPosition[2],
    ]);
  });

  const handleClick = () => {
    window.location.href = "https://www.techwayurself.com/";
  };

  return (
    <mesh onClick={handleClick}>
      <boxGeometry />
      <meshPhongMaterial color="0e80d4" transparent={true}>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={['lightblue']} />
          <Image ref={textRef} url="./img/Techwlogo.jpg" scale={4} />
        </RenderTexture>
      </meshPhongMaterial>
    </mesh>
  );
};

export default Cube;
