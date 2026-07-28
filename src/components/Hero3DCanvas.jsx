import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

function NeuralNode({ position, color, index, pointer }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.elapsedTime;
    meshRef.current.position.y = Math.sin(time * 0.8 + index * 0.65) * 0.18;
    meshRef.current.rotation.x = time * 0.16 + index * 0.22;
    meshRef.current.rotation.y = time * 0.12 + pointer.x * 0.2 + index * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.06, 14, 14]} />
      <meshBasicMaterial color={color} transparent opacity={0.75} />
    </mesh>
  );
}

function NeuralField({ pointer }) {
  const groupRef = useRef();

  useFrame(({ clock, camera }) => {
    if (!groupRef.current) return;

    const time = clock.elapsedTime;
    groupRef.current.rotation.y = time * 0.08 + pointer.x * 0.16;
    groupRef.current.rotation.x = pointer.y * 0.12 + Math.sin(time * 0.6) * 0.04;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.8, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -pointer.y * 0.55, 0.04);
    camera.lookAt(0, 0, 0);
  });

  const nodes = useMemo(
    () => [
      { position: [-1.15, 0.85, 0.25], color: '#c85a32' },
      { position: [0.95, -0.45, 0.15], color: '#8DAE9A' },
      { position: [0.1, -0.95, -0.15], color: '#fdfbf7' },
      { position: [-0.35, -0.2, 0.1], color: '#c85a32' },
      { position: [0.75, 0.75, 0.2], color: '#8DAE9A' },
    ],
    []
  );

  return (
    <group ref={groupRef}>
      <Float speed={1.05} rotationIntensity={0.55} floatIntensity={0.8}>
        <Icosahedron args={[1.1, 1]} position={[0, 0, 0]}>
          <meshBasicMaterial color="#c85a32" wireframe transparent opacity={0.32} />
        </Icosahedron>
      </Float>
      <Float speed={0.95} rotationIntensity={0.35} floatIntensity={0.6}>
        <mesh rotation={[0.7, 0.4, 0.3]} position={[0, 0.05, 0]}>
          <torusKnotGeometry args={[0.72, 0.1, 80, 10]} />
          <meshBasicMaterial color="#fdfbf7" wireframe transparent opacity={0.2} />
        </mesh>
      </Float>
      {nodes.map((node, index) => (
        <NeuralNode key={`${node.position[0]}-${node.position[1]}`} {...node} index={index} pointer={pointer} />
      ))}
    </group>
  );
}

export default function Hero3DCanvas() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = 1 - (event.clientY / window.innerHeight) * 2;
      setPointer({ x, y });
    };

    const handleLeave = () => setPointer({ x: 0, y: 0 });

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-30">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.7]}
        camera={{ position: [0, 0, 5.2], fov: 24 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      >
        <fog attach="fog" args={['#F9F4EB', 3.4, 7.2]} />
        <ambientLight intensity={0.9} />
        <pointLight position={[2.2, 1.4, 2.8]} intensity={1.3} color="#c85a32" />
        <pointLight position={[-2.1, -1.2, 1.8]} intensity={0.95} color="#8DAE9A" />
        <directionalLight position={[0, 2, 2]} intensity={0.75} color="#fdfbf7" />
        <NeuralField pointer={pointer} />
      </Canvas>
    </div>
  );
}
