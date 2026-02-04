const orbs = [
  {
    size: 500,
    color: 'hsl(38 70% 55% / 0.08)',
    position: { top: '10%', left: '15%' },
    duration: 25,
    delay: 0,
  },
  {
    size: 600,
    color: 'hsl(160 60% 40% / 0.06)',
    position: { top: '50%', right: '10%' },
    duration: 30,
    delay: -10,
  },
  {
    size: 400,
    color: 'hsl(38 70% 55% / 0.05)',
    position: { bottom: '20%', left: '40%' },
    duration: 35,
    delay: -15,
  },
  {
    size: 350,
    color: 'hsl(350 75% 45% / 0.04)',
    position: { top: '30%', right: '25%' },
    duration: 28,
    delay: -5,
  },
  {
    size: 450,
    color: 'hsl(160 60% 40% / 0.05)',
    position: { bottom: '40%', left: '10%' },
    duration: 32,
    delay: -20,
  },
];

const GradientOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {orbs.map((orb, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-orb-drift"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: 'blur(80px)',
            ...orb.position,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default GradientOrbs;
