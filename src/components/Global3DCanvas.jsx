import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, Sphere, Icosahedron, Octahedron } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

function Dynamic3DShape({ activeTab }) {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.25;
    }
  });

  const shape = activeTab === 'Skills' ? (
    <Torus args={[2.1, 0.42, 16, 32]} />
  ) : activeTab === 'Projects' ? (
    <Icosahedron args={[2.1, 1]} />
  ) : activeTab === 'Experience' ? (
    <Octahedron args={[2.2, 0]} />
  ) : activeTab === 'Achievements' ? (
    <Sphere args={[1.8, 24, 24]} />
  ) : (
    <Icosahedron args={[2.1, 1]} />
  );

  return (
    <Float floatIntensity={1.5} rotationIntensity={1} speed={2}>
      <mesh ref={meshRef}>
        {shape}
        <meshBasicMaterial wireframe color="#c85a32" transparent opacity={0.25} />
      </mesh>
    </Float>
  );
}

export default function Global3DCanvas({ activeTab = 'Home' }) {
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
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-30">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.7]}
        camera={{ position: [0, 0, 6], fov: 22 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[2, 2, 3]} intensity={0.9} color="#c85a32" />
        <pointLight position={[-2, -1.2, 2]} intensity={0.8} color="#8DAE9A" />
        <group rotation={[pointer.y * 0.08, pointer.x * 0.12, 0]}>
          <Dynamic3DShape activeTab={activeTab} />
        </group>
      </Canvas>
    </div>
  );
}
