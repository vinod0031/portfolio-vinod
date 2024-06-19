import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Text3DAnimation = () => {
const textRef = useRef(null);

useEffect(() => {
gsap.fromTo(
    textRef.current,
    { rotationX: -90, opacity: 0 },
    { rotationX: 0, opacity: 1, duration: 2, ease: "power4.out" }
);
}, []);

return (
<div
    ref={textRef}
    style={{
    fontSize: '3rem',
    fontWeight: 'bold',
    perspective: '500px',
    transformStyle: 'preserve-3d',
    }}
>
    Full Stack Developer
</div>
);
};

export default Text3DAnimation;
