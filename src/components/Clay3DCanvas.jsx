import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function ClayMesh({ activeTab, pointer }) {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, Math.sin(t * 0.3) * 0.2, 0.06);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, t * 0.2 + pointer.x * 0.3, 0.06);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, pointer.y * 0.12, 0.06);
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, pointer.x * 0.8, 0.04);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, pointer.y * 0.6, 0.04);
  });

  return (
    <Float floatIntensity={1.8} rotationIntensity={1.2} speed={1.5}>
      <group ref={meshRef}>
        {activeTab === 'Skills' ? (
          <Torus args={[1.2, 0.35, 32, 64]}>
            <meshStandardMaterial color="#38BDF8" roughness={0.5} metalness={0.1} transparent opacity={0.2} />
          </Torus>
        ) : (
          <RoundedBox args={[2.0, 1.2, 1.2]} radius={0.28} smoothness={4}>
            <meshStandardMaterial color="#38BDF8" roughness={0.5} metalness={0.1} transparent opacity={0.2} />
          </RoundedBox>
        )}
      </group>
    </Float>
  );
}

export default function Clay3DCanvas({ activeTab = 'Home' }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // mark as mounted on client to avoid Three.js rendering during SSR or pre-render
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = 1 - (e.clientY / window.innerHeight) * 2;
      setPointer({ x, y });
    };
    const handleLeave = () => setPointer({ x: 0, y: 0 });

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, [mounted]);

  // Keep a lightweight background wrapper on SSR/non-mounted renders to prevent layout shifts.
  if (!mounted) {
    return <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-80" style={{ background: '#090D16' }} />;
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-80" style={{ background: '#090D16' }}>
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.7]}
        camera={{ position: [0, 0, 6], fov: 28 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      >
        <color attach="background" args={["#090D16"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, -5, -2]} intensity={0.3} color="#6366F1" />
        <ClayMesh activeTab={activeTab} pointer={pointer} />
      </Canvas>
    </div>
  );
}
