import { Fragment, useState } from "react";
import fireworks from "../images/fireworks1.jpg";
import AudioPlayer from "./AudioPlayer";
import classes from "./Frontpage.module.css";
import { FaBirthdayCake } from "react-icons/fa";
import Gallery from "./Gallery";

const Frontpage = () => {
  const [morePhotos, setMorePhotos] = useState(false);

  const showPhotosHandler = () => {
    setMorePhotos((prevState) => !prevState);
  };

  return (
    <Fragment>
      <h3 className={classes.title}>
        祝老妈生日快乐
        <FaBirthdayCake />
      </h3>

      <AudioPlayer />
      <img src={fireworks} alt="" className={classes.fireworks} />
      <button className={classes.btn} onClick={showPhotosHandler}>
        {morePhotos ? "收起照片" : "展开照片"}
      </button>
      {morePhotos && <Gallery />}
      <footer className={classes.footer}>
        <p className={classes.date}>2022.07.26</p>
      </footer>
    </Fragment>
  );
};

export default Frontpage;
