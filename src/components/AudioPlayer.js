import { Fragment, useState, useRef, useEffect } from "react";
import music from "../music/happy-birthday.mp3";
import classes from "./AudioPlayer.module.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsFillPauseCircleFill } from "react-icons/bs";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioPlayer = useRef();

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }, [isPlaying]);
  return (
    <Fragment>
      <audio
        className={classes.audio}
        src={music}
        type="audio/mpeg"
        ref={audioPlayer}
      />

      <button onClick={togglePlayPause} className={classes.btn}>
        {isPlaying ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
      </button>
    </Fragment>
  );
};

export default AudioPlayer;
