import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const WebGLBackground = ({ progress }: { progress: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vsSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uProgress;

      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        float t = iTime * 0.04;
        float drift = sin(uv.x * 1.5 + t) * 0.03 + sin(uv.y * 2.0 - t * 0.7) * 0.02;
        float y = uv.y + drift + uProgress * 0.05;

        vec3 cBlue   = vec3(0.745, 0.824, 1.0);    // #BED2FF
        vec3 cAmber  = vec3(1.0, 0.690, 0.325);    // #FFB053
        vec3 cOrange = vec3(0.976, 0.451, 0.047);   // #F9730C

        vec3 color;
        if (y > 0.5) {
          color = mix(cAmber, cOrange, smoothstep(0.5, 1.0, y));
        } else {
          color = mix(cBlue, cAmber, smoothstep(0.0, 0.5, y));
        }
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (source: string, type: number) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, createShader(vsSource, gl.VERTEX_SHADER));
    gl.attachShader(program, createShader(fsSource, gl.FRAGMENT_SHADER));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, 'iResolution');
    const timeLoc = gl.getUniformLocation(program, 'iTime');
    const progLoc = gl.getUniformLocation(program, 'uProgress');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize);
    resize();

    const start = performance.now();
    const render = () => {
      const time = (performance.now() - start) / 1000;
      gl.uniform1f(timeLoc, time);
      gl.uniform1f(progLoc, progress);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [progress]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default function StackLayersNew() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const layers = [
    {
      id: "register",
      title: "Register & Set Your Goals",
      description: "The student registers on the platform and fills in their learning goals, what they want to learn, their level, and schedule preferences.",
      tags: ["Quick Sign Up", "Learning Goals", "Personalised Profile"],
      image: "/step-1.png"
    },
    {
      id: "match",
      title: "Browse, Match & Schedule a Demo",
      description: "Browse tutors or choose AI matchmaking to find the right Guru. Send a demo request and schedule a free trial session.",
      tags: ["AI Matchmaking", "Free Demo", "Tutor Profiles"],
      image: "/step-2.png"
    },
    {
      id: "start",
      title: "Confirm & Start Learning",
      description: "After the demo, confirm your tutor, make the payment, and regular 1 on 1 classes begin. Learn at your pace, on your schedule.",
      tags: ["Secure Payment", "Regular Classes", "1 on 1 Sessions"],
      image: "/step-3.png"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !pinRef.current || !textRef.current) return;

    const textBlocks = textRef.current.querySelectorAll('.text-block');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: `+=${(layers.length - 1) * 100}%`,
        pin: pinRef.current,
        pinSpacing: true,
        scrub: 0.5,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / (layers.length - 1),
          duration: { min: 0.25, max: 0.5 },
          delay: 0,
          ease: "power2.inOut"
        },
        onUpdate: (self) => setProgress(self.progress)
      }
    });

    // Initial state
    gsap.set(textBlocks, { opacity: 0 });
    gsap.set(textBlocks[0], { opacity: 1 });

    layers.forEach((_, i) => {
      if (i === 0) return;

      const prevBlock = textBlocks[i - 1];
      const currBlock = textBlocks[i];

      tl.to(prevBlock, { opacity: 0, duration: 0.35, ease: "power1.in" }, (i - 1) * 1.35 + 0.35)
        .to(currBlock, { opacity: 1, duration: 0.5, ease: "power1.out" }, (i - 1) * 1.35 + 0.65);

      // Word staggering reveal
      const currWords = currBlock.querySelectorAll('.blur-word');
      const currPills = currBlock.querySelectorAll('.pill');

      tl.fromTo(currWords,
        { filter: "blur(4px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1, duration: 0.5, stagger: 0.02, ease: "power1.out" },
        (i - 1) * 1.35 + 0.65
      );

      tl.fromTo(currPills,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.04, ease: "power2.out" },
        (i - 1) * 1.35 + 0.73
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const renderWords = (text: string) =>
    text.split(' ').map((word, i) => (
      <span key={i} className="inline-block blur-word mr-[0.3em]">{word}</span>
    ));

  return (
    <div ref={containerRef} className="w-full">
      <div ref={pinRef} className="flex flex-col items-center gap-12 md:gap-16 py-20">
        <div className="flex flex-col items-center gap-4">
          <p className="font-matter font-medium text-tx-tertiary text-xs text-center uppercase tracking-[2px]">
            Your Learning Journey
          </p>
          <div className="text-center">
            <h2 className="font-season-mix text-3xl md:text-[42px] leading-[1.2] text-tx">
              Everything you need to succeed
            </h2>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-stretch w-full max-w-[1280px] mx-auto px-4">
          <div className="relative border border-st rounded-[48px] w-full md:w-1/2 h-[320px] md:h-[480px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            {layers.map((layer, i) => {
              const activeIndex = Math.round(progress * (layers.length - 1));
              const isActive = activeIndex === i;
              return (
                <img
                  key={layer.id}
                  src={layer.image}
                  alt={layer.title}
                  className="absolute inset-0 w-full h-full object-contain p-6"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(20px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                  }}
                />
              );
            })}
          </div>

          <div ref={textRef} className="relative w-full md:w-1/2 min-h-[350px] md:min-h-0">
            {layers.map((layer, i) => (
              <div
                key={layer.id}
                className="text-block absolute inset-0 flex flex-col gap-8 px-6 md:px-20 py-8 md:py-16 justify-center"
              >
                <div className="flex flex-col gap-3 md:gap-4">
                  <h3 className="font-matter font-medium text-tx md:text-[26px] text-xl leading-tight tracking-[-0.26px]">
                    {renderWords(layer.title)}
                  </h3>
                  <p className="max-w-[480px] font-matter text-tx-tertiary md:text-[18px] text-base leading-[1.55] tracking-[-0.18px] desc">
                    {layer.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {layer.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="pill inline-flex items-center bg-sr-indigo-50 px-3 md:px-5 py-2 md:py-2.5 border border-sr-indigo-100 rounded-full font-matter text-tx-secondary md:text-[18px] text-sm tracking-[-0.18px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
