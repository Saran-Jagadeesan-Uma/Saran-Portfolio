import React from "react";
import Lottie from 'react-lottie-player';

export default function LottieHero({ className = "" }){
  return (
    <div className={className}>
      <Lottie
        loop
        animationData={require('../assets/hero-lottie.json')}
        play
        style={{ width: 220, height: 220 }}
      />
    </div>
  );
}
