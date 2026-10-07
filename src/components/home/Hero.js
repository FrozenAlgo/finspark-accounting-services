"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Check, ShieldCheck } from "lucide-react";
import Form from "../ui/Form";
import AnimatedBtn from "../ui/AnimatedBtn";

const Hero = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 180 };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse collision detection
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 4;
            this.y -= forceDirectionY * force * 4;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particles = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * (canvas.width - size * 4) + size * 2;
        let y = Math.random() * (canvas.height - size * 4) + size * 2;
        let directionX = Math.random() * 0.4 - 0.2;
        let directionY = Math.random() * 0.4 - 0.2;
        let color = "rgba(39, 131, 147, 0.8)"; // Finspark Brand Teal (#278393)
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      init();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance =
            (particles[a].x - particles[b].x) *
              (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) *
              (particles[a].y - particles[b].y);

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;

            if (mouse.x !== null && mouse.y !== null) {
              let dx_mouse_a = particles[a].x - mouse.x;
              let dy_mouse_a = particles[a].y - mouse.y;
              let distance_mouse_a = Math.sqrt(
                dx_mouse_a * dx_mouse_a + dy_mouse_a * dy_mouse_a,
              );

              if (distance_mouse_a < mouse.radius) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
              } else {
                ctx.strokeStyle = `rgba(39, 131, 147, ${opacityValue})`;
              }
            } else {
              ctx.strokeStyle = `rgba(39, 131, 147, ${opacityValue})`;
            }

            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = "#083761"; // Primary Navy Background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15 + 0.3,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="relative w-full min-h-screen lg:max-h-screen flex py-12 lg:py-10 flex-col lg:flex-row items-center md:justify-between px-4 sm:px-8 lg:px-12 overflow-hidden lg:justify-around gap-6 bg-[#083761]">
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-auto"
      />

      {/* Left Content Column */}
      <div className="relative z-10 basis-full lg:basis-[60%]  mb-12 lg:mb-0 space-y-6 max-w-2xl">
        {/* Trust Badge */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#278393]/20 border border-[#278393]/40 backdrop-blur-md"
        >
          <ShieldCheck className="h-4 w-4 text-[#278393]" />
          <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-wide">
            Trusted Accountancy Services in Haven Lane
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300"
        >
          Bookkeeping & Accountancy in Haven Lane
        </motion.h1>

        {/* Updated Subtitle Paragraph */}
        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed"
        >
          Streamline your finances with tailored accounting, VAT compliance, and
          expert business advisory built to help small businesses thrive.
        </motion.p>

        {/* Feature Pill Grid */}
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-xl flex items-center gap-3 text-white text-xs sm:text-sm font-medium">
            <div className="bg-[#278393]/30 text-[#278393] p-1 rounded-lg shrink-0">
              <Check size={18} strokeWidth={3} />
            </div>
            <span>Bookkeeping & VAT</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-xl flex items-center gap-3 text-white text-xs sm:text-sm font-medium">
            <div className="bg-[#278393]/30 text-[#278393] p-1 rounded-lg shrink-0">
              <Check size={18} strokeWidth={3} />
            </div>
            <span>Company Year-End Accounts</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-xl flex items-center gap-3 text-white text-xs sm:text-sm font-medium">
            <div className="bg-[#278393]/30 text-[#278393] p-1 rounded-lg shrink-0">
              <Check size={18} strokeWidth={3} />
            </div>
            <span>Self Assessment Tax</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-xl flex items-center gap-3 text-white text-xs sm:text-sm font-medium">
            <div className="bg-[#278393]/30 text-[#278393] p-1 rounded-lg shrink-0">
              <Check size={18} strokeWidth={3} />
            </div>
            <span>Payroll & CIS Schemes</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="pt-2"
        >
          <AnimatedBtn
            hoverText="Book an Appointment Now"
            icon={CalendarCheck}
            bgColor="bg-[#278393]"
            hoverBgColor="hover:bg-[#1f6875]"
            textColor="text-white"
            hoverTextColor="hover:text-white"
          >
            Book an Appointment
          </AnimatedBtn>
        </motion.div>
      </div>

      {/* Right Form Column */}
      <div className="relative z-10 basis-full lg:basis-[40%] max-w-lg w-full">
        <Form />
      </div>
    </section>
  );
};

export default Hero;
