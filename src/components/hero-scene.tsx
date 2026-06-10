"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 1500;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.06;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#7dd3fc"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function EnergyRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z = state.clock.elapsedTime * 0.25;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    group.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.2) * 0.4;
  });

  return (
    <group ref={group}>
      {[2.6, 3.2, 3.8].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / 2 + i * 0.4, i * 0.6, 0]}>
          <torusGeometry args={[radius, 0.004, 16, 100]} />
          <meshBasicMaterial
            color={i === 1 ? "#a78bfa" : "#38bdf8"}
            transparent
            opacity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingCore({
  mouse,
}: {
  mouse: React.RefObject<{ x: number; y: number }>;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = Math.sin(t * 0.8) * 0.3;
    ref.current.rotation.y = t * 0.5 + mouse.current.x * 0.6;
    ref.current.rotation.x = t * 0.15 + mouse.current.y * 0.4;
    const scale = 1 + Math.sin(t * 1.2) * 0.06;
    ref.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshStandardMaterial
        color="#0ea5e9"
        emissive="#3b82f6"
        emissiveIntensity={0.4}
        roughness={0.1}
        metalness={0.8}
        wireframe
      />
    </mesh>
  );
}

function Scene() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      onPointerMove={(e) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#60a5fa" />
      <pointLight position={[-5, -3, -5]} intensity={0.8} color="#a78bfa" />
      <FloatingCore mouse={mouse} />
      <EnergyRings />
      <Particles />
    </Canvas>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Scene />
    </div>
  );
}
