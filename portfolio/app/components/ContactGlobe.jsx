"use client";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Earth({ textureUrl }) {
  const earthRef = useRef();
  const texture = useLoader(THREE.TextureLoader, textureUrl);

  useFrame(() => {
    earthRef.current.rotation.y += 0.0015;
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function ConnectingLines() {
  const groupRef = useRef();
  const lines = useMemo(() => {
    const result = [];
    for (let i = 0; i < 25; i++) {
      const lat1 = (Math.random() - 0.5) * Math.PI;
      const lon1 = (Math.random() - 0.5) * 2 * Math.PI;
      const lat2 = (Math.random() - 0.5) * Math.PI;
      const lon2 = (Math.random() - 0.5) * 2 * Math.PI;

      const radius = 1.02;
      const start = new THREE.Vector3(
        radius * Math.cos(lat1) * Math.cos(lon1),
        radius * Math.sin(lat1),
        radius * Math.cos(lat1) * Math.sin(lon1)
      );
      const end = new THREE.Vector3(
        radius * Math.cos(lat2) * Math.cos(lon2),
        radius * Math.sin(lat2),
        radius * Math.cos(lat2) * Math.sin(lon2)
      );

      const mid = start.clone().add(end).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(radius + 0.3); // curve height

      const curve = new THREE.CatmullRomCurve3([start, mid, end]);
      const points = curve.getPoints(50);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      result.push({ geometry, points });
    }
    return result;
  }, []);

  useFrame(() => {
    groupRef.current.rotation.y += 0.0006;
  });

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <line key={i} geometry={line.geometry}>
          <lineBasicMaterial
            color={"#00aaff"}
            linewidth={2}
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </line>
      ))}
    </group>
  );
}

function Particles() {
  const groupRef = useRef();
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      const phi = Math.random() * Math.PI;
      const theta = Math.random() * 2 * Math.PI;
      const radius = 1.3 + Math.random() * 0.4;
      arr.push({
        position: new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ),
        speed: 0.002 + Math.random() * 0.002,
      });
    }
    return arr;
  }, []);

  useFrame(() => {
    groupRef.current.rotation.y += 0.0004;
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[0.008, 8, 8]} />
          <meshBasicMaterial color="#00ccff" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export default function ContactGlobe({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <directionalLight position={[-2, -2, -1]} intensity={0.4} />

        <Earth textureUrl="/pngegg.png" />
        <ConnectingLines />
        <Particles />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
