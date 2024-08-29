// SecretSoundPlayer.js
import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';



// Create a Howl instance for your hidden sound
const sound = new Howl({
  src: ['https://www.myinstants.com/media/sounds/gay-echo.mp3'],
  volume: 1.0,
});

const SecretSoundPlayer = () => {
  const [keySequence, setKeySequence] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeySequence((prevSequence) => {
        // Append the new key to the sequence
        const newSequence = prevSequence + event.key;

        
        if (newSequence.endsWith('de4')) {
          sound.play();
        }

        console.log(newSequence)
        return newSequence.slice(-4);
      });
    };

    
    window.addEventListener('keydown', handleKeyDown);
    

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

 
};

export default SecretSoundPlayer;
