import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, RoundedBox } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

type NeonNodeProps = {
  position: [number, number, number];
  color: string;
};

function NeonNode({ position, color }: NeonNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.elapsedTime * 0.35;
    meshRef.current.rotation.y = clock.elapsedTime * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} />
    </mesh>
  );
}

function FloatingMesh() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.12;
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Float speed={0.9} rotationIntensity={0.16} floatIntensity={0.16}>
        <RoundedBox args={[1.1, 1.1, 0.12]} radius={0.08} position={[-1.15, 0.8, 0]}>
          <meshStandardMaterial color="#E0835F" emissive="#C84B31" emissiveIntensity={0.25} wireframe />
        </RoundedBox>
      </Float>
      <Float speed={0.8} rotationIntensity={0.14} floatIntensity={0.14}>
        <Sphere args={[0.42, 24, 24]} position={[1.2, -0.75, 0.12]}>
          <meshStandardMaterial color="#8DAE9A" emissive="#6B9A7B" emissiveIntensity={0.25} wireframe />
        </Sphere>
      </Float>
      <Float speed={0.7} rotationIntensity={0.12} floatIntensity={0.12}>
        <mesh position={[-0.15, 1.15, -0.16]} rotation={[0.6, 0.3, 0.5]}>
          <torusGeometry args={[0.5, 0.06, 12, 40]} />
          <meshStandardMaterial color="#F0EBE3" emissive="#C84B31" emissiveIntensity={0.15} wireframe />
        </mesh>
      </Float>
      <Float speed={0.6} rotationIntensity={0.1} floatIntensity={0.1}>
        <mesh position={[0.95, 0.55, 0.08]} rotation={[0.4, 0.8, 0.2]}>
          <boxGeometry args={[0.35, 0.35, 0.1]} />
          <meshStandardMaterial color="#C84B31" emissive="#E0835F" emissiveIntensity={0.18} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene() {
  const nodes = useMemo(
    () => [
      { position: [-1.15, 0.9, 0.1] as [number, number, number], color: '#C84B31' },
      { position: [1.05, -0.25, 0.1] as [number, number, number], color: '#6B9A7B' },
      { position: [0.15, -0.95, -0.1] as [number, number, number], color: '#E0835F' },
      { position: [-0.45, -0.35, 0.05] as [number, number, number], color: '#F0EBE3' },
      { position: [0.8, 0.75, 0.08] as [number, number, number], color: '#C84B31' },
    ],
    []
  );

  return (
    <Canvas
      className="pointer-events-none"
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.2], fov: 24 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <fog attach="fog" args={['#FAF8F5', 3.6, 7.2]} />
      <ambientLight intensity={0.9} />
      <pointLight position={[2.4, 1.8, 2.8]} intensity={1.45} color="#C84B31" />
      <pointLight position={[-2.2, -1.2, 1.6]} intensity={1.05} color="#8DAE9A" />
      <directionalLight position={[0, 2, 2]} intensity={0.8} color="#FAF8F5" />
      <FloatingMesh />
      {nodes.map((node) => (
        <NeonNode key={`${node.position[0]}-${node.position[1]}`} position={node.position} color={node.color} />
      ))}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}
