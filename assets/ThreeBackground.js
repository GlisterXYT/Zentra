// ThreeBackground.js
// Advanced 3D animated background for Zentra homepage

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a23);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Add glowing blue waves (plane geometry with sine animation)
    const waveGeometry = new THREE.PlaneGeometry(120, 20, 64, 16);
    const waveMaterial = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.18 });
    const wave = new THREE.Mesh(waveGeometry, waveMaterial);
    wave.position.y = -18;
    scene.add(wave);

    // Add more/larger floating blue particles
    const particles = [];
    const particleGeometry = new THREE.SphereGeometry(1.2, 16, 16);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0x60a5fa });
    for (let i = 0; i < 220; i++) {
      const mesh = new THREE.Mesh(particleGeometry, particleMaterial);
      mesh.position.x = (Math.random() - 0.5) * 120;
      mesh.position.y = (Math.random() - 0.5) * 60;
      mesh.position.z = (Math.random() - 0.5) * 80;
      scene.add(mesh);
      particles.push(mesh);
    }

    // Mouse-follow effect
    function onMouseMove(e) {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("mousemove", onMouseMove);

    // Animate particles and wave
    function animate() {
      requestAnimationFrame(animate);
      const t = Date.now() * 0.001;
      particles.forEach((p, idx) => {
        p.position.x += Math.sin(t + idx) * 0.01 + mouse.current.x * 0.05;
        p.position.y += Math.cos(t + idx) * 0.01 + mouse.current.y * 0.05;
      });
      // Animate wave vertices
      for (let i = 0; i < waveGeometry.vertices?.length || 0; i++) {
        const vertex = waveGeometry.vertices[i];
        vertex.y = Math.sin(t * 2 + i * 0.3) * 1.5;
      }
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
      window.removeEventListener("mousemove", onMouseMove);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  // Animated SVG blob for extra visual impact
  return (
    <>
      <div
        ref={mountRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 100,
          pointerEvents: "none",
          opacity: 1,
          border: "4px dashed #3b82f6",
          background: "rgba(59,130,246,0.15)",
        }}
      />
      <svg
        style={{
          position: "fixed",
          top: "10vh",
          left: "60vw",
          width: "400px",
          height: "400px",
          zIndex: 101,
          opacity: 0.9,
          filter: "blur(10px)",
          pointerEvents: "none",
          border: "2px solid #3b82f6",
          background: "rgba(59,130,246,0.10)",
        }}
        viewBox="0 0 400 400"
      >
        <defs>
          <radialGradient id="blueBlob" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#0a0a23" />
          </radialGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="160" ry="120" fill="url(#blueBlob)">
          <animate attributeName="rx" values="160;180;160" dur="4s" repeatCount="indefinite" />
          <animate attributeName="ry" values="120;140;120" dur="4s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      {/* Floating social sidebar */}
      <div
        style={{
          position: "fixed",
          top: "50vh",
          left: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          padding: "12px 0",
        }}
      >
        <a href="https://discord.com/invite/ronix" target="_blank" rel="noopener noreferrer" style={{filter: "drop-shadow(0 0 8px #3b82f6)", transition: "transform 0.2s", background: "#0a0a23", borderRadius: "50%", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="#3b82f6"><circle cx="16" cy="16" r="16" /><text x="16" y="21" textAnchor="middle" fontSize="16" fill="#fff">D</text></svg>
        </a>
        <a href="https://github.com/AdvanceFTeam" target="_blank" rel="noopener noreferrer" style={{filter: "drop-shadow(0 0 8px #3b82f6)", transition: "transform 0.2s", background: "#0a0a23", borderRadius: "50%", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="#3b82f6"><circle cx="16" cy="16" r="16" /><text x="16" y="21" textAnchor="middle" fontSize="16" fill="#fff">G</text></svg>
        </a>
      </div>
    </>
  );
}
