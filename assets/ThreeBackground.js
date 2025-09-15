// ThreeBackground.js
// Advanced 3D animated background for Zentra homepage

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const orbRef = useRef();
  const burstParticles = useRef([]);

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

    // Mouse-follow effect for orb
    function onMouseMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (orbRef.current) {
        orbRef.current.style.left = `${e.clientX - 25}px`;
        orbRef.current.style.top = `${e.clientY - 25}px`;
      }
    }
    window.addEventListener("mousemove", onMouseMove);

    // Mouse click burst effect
    function onMouseClick(e) {
      const burst = [];
      for (let i = 0; i < 18; i++) {
        const angle = (i / 18) * Math.PI * 2;
        burst.push({
          x: e.clientX,
          y: e.clientY,
          dx: Math.cos(angle) * 6,
          dy: Math.sin(angle) * 6,
          life: 1
        });
      }
      burstParticles.current.push(...burst);
    }
    window.addEventListener("click", onMouseClick);

    // Animate particles and wave
    function animate() {
      requestAnimationFrame(animate);
      const t = Date.now() * 0.001;
      particles.forEach((p, idx) => {
        p.position.x += Math.sin(t + idx) * 0.01 + (mouse.current.x / window.innerWidth - 0.5) * 0.2;
        p.position.y += Math.cos(t + idx) * 0.01 + (mouse.current.y / window.innerHeight - 0.5) * 0.2;
      });
      // Animate wave vertices
      for (let i = 0; i < waveGeometry.vertices?.length || 0; i++) {
        const vertex = waveGeometry.vertices[i];
        vertex.y = Math.sin(t * 2 + i * 0.3) * 1.5;
      }
      renderer.render(scene, camera);

      // Animate burst particles (canvas overlay)
      if (window.burstCanvas) {
        const ctx = window.burstCanvas.getContext("2d");
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        burstParticles.current.forEach((p, idx) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 8 * p.life, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59,130,246,${p.life})`;
          ctx.fill();
          p.x += p.dx;
          p.y += p.dy;
          p.life -= 0.04;
        });
        burstParticles.current = burstParticles.current.filter(p => p.life > 0);
      }
    }
    animate();

    // Handle resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  window.addEventListener("resize", handleResize);

    // Setup burst canvas overlay
    let burstCanvas = document.createElement("canvas");
    burstCanvas.width = window.innerWidth;
    burstCanvas.height = window.innerHeight;
    burstCanvas.style.position = "fixed";
    burstCanvas.style.top = "0";
    burstCanvas.style.left = "0";
    burstCanvas.style.width = "100vw";
    burstCanvas.style.height = "100vh";
    burstCanvas.style.zIndex = 102;
    burstCanvas.style.pointerEvents = "none";
    burstCanvas.style.background = "none";
    window.burstCanvas = burstCanvas;
    document.body.appendChild(burstCanvas);

    function burstResize() {
      burstCanvas.width = window.innerWidth;
      burstCanvas.height = window.innerHeight;
    }
    window.addEventListener("resize", burstResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onMouseClick);
      window.removeEventListener("resize", burstResize);
      mount.removeChild(renderer.domElement);
      document.body.removeChild(burstCanvas);
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
          zIndex: 101,
          pointerEvents: "none",
          opacity: 1,
          border: "4px dashed #3b82f6",
          background: "rgba(59,130,246,0.15)",
        }}
      />
      {/* Mouse-follow glowing orb */}
      <div
        ref={orbRef}
        style={{
          position: "fixed",
          left: "50vw",
          top: "50vh",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #3b82f6 60%, #60a5fa 100%)",
          boxShadow: "0 0 40px 20px #3b82f6, 0 0 80px 40px #60a5fa",
          opacity: 0.7,
          zIndex: 103,
          pointerEvents: "none",
          transition: "left 0.1s, top 0.1s",
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
