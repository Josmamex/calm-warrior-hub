const FloatingParticles = () => {
  return (
    <div className="particles-container">
      {/* Floating golden particles - Increased count */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="particle" />
      ))}
      
      {/* Orb particles - larger glowing orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      
      {/* Ambient haze effect - Enhanced */}
      <div className="ambient-haze" />
      <div className="ambient-haze-2" />
      
      {/* Scan lines for texture */}
      <div className="scan-lines" />
      
      {/* Glowing border accents */}
      <div className="glow-accent glow-accent-top" />
      <div className="glow-accent glow-accent-bottom" />
    </div>
  );
};

export default FloatingParticles;
