"use client";

import { useEffect, useRef } from "react";
import { NeatGradient, NeatConfig } from "@firecms/neat";

const config: NeatConfig = {
  
    
    colors: [
        {
            color: '#0b3954',
            enabled: true,
        },
        {
            color: '#087e8b',
            enabled: true,
        },
        {
            color: '#97D8B7',
            enabled: true,
        },
        {
            color: '#AABF98',
            enabled: true,
        },
        {
            color: '#8DB99E',
            enabled: true,
        },
    ],
    speed: 4,
    horizontalPressure: 4,
    verticalPressure: 3,
    waveFrequencyX: 0,
    waveFrequencyY: 0,
    waveAmplitude: 0,
    shadows: 2,
    highlights: 7,
    colorBrightness: 1,
    colorSaturation: 8,
    wireframe: false,
    colorBlending: 5,
    backgroundColor: '#FF0000',
    backgroundAlpha: 1,
    grainScale: 0,
    grainSparsity: 0,
    grainIntensity: 0,
    grainSpeed: 0,
    resolution: 0.5,
    yOffset: 0,



};

export default function FullPageNeat() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Función para ajustar el tamaño del canvas
    const resizeCanvas = () => {
      const doc = document.documentElement;
      canvasRef.current!.width = doc.scrollWidth;
      canvasRef.current!.height = doc.scrollHeight;
    };

    // Observer que detecta cambios en el tamaño del documento
    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(document.body);

    // Primera vez
    resizeCanvas();

    // Crear el gradient
    const neat = new NeatGradient({
      ref: canvasRef.current,
      ...config,
    });

    return () => {
      neat.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 -z-10"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    />
  );
}