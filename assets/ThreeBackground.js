// ThreeBackground.js
// Advanced 3D animated background for Zentra homepage
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a23);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Add floating blue particles
    const particles = [];
    const particleGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    for (let i = 0; i < 120; i++) {
      const mesh = new THREE.Mesh(particleGeometry, particleMaterial);
      mesh.position.x = (Math.random() - 0.5) * 80;
      mesh.position.y = (Math.random() - 0.5) * 40;
      mesh.position.z = (Math.random() - 0.5) * 60;
      scene.add(mesh);
      particles.push(mesh);
    }

    // Animate particles
    function animate() {
      requestAnimationFrame(animate);
      particles.forEach((p, idx) => {
        p.position.x += Math.sin(Date.now() * 0.001 + idx) * 0.002;
        p.position.y += Math.cos(Date.now() * 0.001 + idx) * 0.002;
      });
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
