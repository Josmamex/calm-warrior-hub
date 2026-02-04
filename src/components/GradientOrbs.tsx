const orbs = [
  {
    size: 500,
    color: 'hsl(220 20% 15% / 0.03)',
    position: { top: '10%', left: '15%' },
    duration: 25,
    delay: 0,
  },
  {
    size: 600,
    color: 'hsl(220 15% 20% / 0.03)',
    position: { top: '50%', right: '10%' },
    duration: 30,
    delay: -10,
  },
  {
    size: 400,
    color: 'hsl(220 20% 12% / 0.02)',
    position: { bottom: '20%', left: '40%' },
    duration: 35,
    delay: -15,
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
            filter: 'blur(100px)',
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
