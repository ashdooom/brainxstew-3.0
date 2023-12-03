import React, { useState, useEffect } from 'react';
import capricornzArt from '../assets/capricornzArt.png';
import ikissedagirlart from '../assets/ikissedagirlart.jpeg';
import attackattack from '../assets/attackattack.jpeg';
import ilikemoneyart from '../assets/ilikemoneyart.jpeg';
import prettyravegirlart from '../assets/prettyravegirlart.jpeg';
import scenegirlsart from '../assets/scenegirlsart.jpg';
import medicDroid from '../assets/medicDroid.jpeg';
import insomniac from '../assets/insomniac.jpg'
import capricornz from '../data/muzikk/capricornz.mp3';
import iKissedAGirl from '../data/muzikk/iKissedAGirl.mp3';
import crankThat from '../data/muzikk/crankThat.mp3';
import iLikeMoney from '../data/muzikk/iLikeMoney.mp3';
import prettyRaveGirl from '../data/muzikk/prettyRaveGirl.mp3';
import sceneGirlz from '../data/muzikk/sceneGirlz.mp3';
import ferSure from '../data/muzikk/ferSure.mp3';
import brainStew from '../data/muzikk/brainStew.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepBackward,
  faPause,
  faPlay,
  faRedo,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';

// ... (import statements remain unchanged)

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const audioRef = React.createRef();

  const songs = [
    {
      src: brainStew,
      thumbnail: insomniac
    },
    {
      src: capricornz,
      thumbnail: capricornzArt,
    },
    {
      src: crankThat,
      thumbnail: attackattack,
    },
    {
      src: ferSure,
      thumbnail: medicDroid,
    },
    {
      src: iKissedAGirl,
      thumbnail: ikissedagirlart,
    },
    {
      src: iLikeMoney,
      thumbnail: ilikemoneyart,
    },
    {
      src: prettyRaveGirl,
      thumbnail: prettyravegirlart,
    },
    {
      src: sceneGirlz,
      thumbnail: scenegirlsart,
    },
  ];


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


  useEffect(() => {
    const shuffledSongs = shuffleArray([...songs]);
    setCurrentSongIndex(0);
    audioRef.current.src = shuffledSongs[0].src;
 
  }, []);


  useEffect(() => {
    audioRef.current.src = songs[currentSongIndex].src;
    audioRef.current.play();
    setIsPlaying(true);
  
  }, [currentSongIndex]);

  const currentSong = songs[currentSongIndex];

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSongChange = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleRewind = () => {
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
  };

  const handleNextSong = () => {
    handleSongChange((currentSongIndex + 1) % songs.length);
  };

  const handlePreviousSong = () => {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    handleSongChange(newIndex);
  };

  return (
    <div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextSong}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className="audio-controls">
        <button onClick={handlePreviousSong}>
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button onClick={handleRewind}>
          <FontAwesomeIcon icon={faRedo} />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        <button onClick={handleNextSong}>
          <FontAwesomeIcon icon={faStepForward} />
        </button>
      </div>
      <div>
        <img
          className='audio-thumbnail'
          src={currentSong.thumbnail}
          alt={`Thumbnail for ${currentSong.src}`}
        />
        <ul>
          {songs.map((song, index) => (
            <li key={index} onClick={() => handleSongChange(index)}>
              {/* Display song information or title here */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AudioPlayer;


