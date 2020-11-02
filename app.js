const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to('.text', { x: "0%", duration: 2, stagger: 1 });
tl.to('.slider', { x: "-100%", duration: 5, delay: 0.5 });
tl.to('.intro', { x: "-100%", duration: 5 }, "-=1");
tl.fromTo('h2', { color: "purple" }, { color: "black", duration: 3 });


