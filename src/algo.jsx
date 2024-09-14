import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';

const sounds = {
  'pinto': new Howl({ src: ['https://www.myinstants.com/media/sounds/gay-echo.mp3'], volume: 1.0 }),
  'teste': new Howl({ src: ['https://www.myinstants.com/media/sounds/fail-sound-effect.mp3'], volume: 1.0 }),
  'bemtevi': new Howl({ src: ['https://www.myinstants.com/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3'], volume: 1.0 }),
  'iptv': new Howl({ src: ['https://www.myinstants.com/media/sounds/brain-fart-reverbed.mp3'], volume: 1.0 }),
  'msg': new Howl({ src: ['https://www.myinstants.com/media/sounds/olha-a-mensagem-a.mp3'], volume: 1.0 }),
  'anao': new Howl({ src: ['https://www.myinstants.com/media/sounds/im-a-gnome-meme-sound-effect-woo.mp3']})
  
};

const SecretSoundPlayer = () => {
  const [keySequence, setKeySequence] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeySequence((prevSequence) => {
        const newSequence = prevSequence + event.key;
        

      
        for (const soundKey in sounds) {
          if (newSequence.startsWith(soundKey)) {
            sounds[soundKey].play()
            
            return '';
          }
        }

        console.log(newSequence);
        return newSequence.slice(-9); // Keep the last 9 characters
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // This component doesn't render anything visually
};

export default SecretSoundPlayer;
