import classes from "./Gallery.module.css";
import littleHouse from "../images/little-house.jpg";
import tree from "../images/tree.JPG";
import hobart from "../images/hobart.JPG";
import sydney from "../images/sydney.JPG";
import adelaide from "../images/adelaide.jpg";
import uni from "../images/uni.JPG";
import koala from "../images/koala.jpg";
import cafe from "../images/cafe.JPG";
import friends from "../images/friends.JPG";
import beach from "../images/beach.jpg";

const Gallery = () => {
  return (
    <section className={classes.gallery}>
      <img
        src={hobart}
        alt=""
        className={`
      ${classes.widePhoto} ${classes.photo1}`}
      />
      <img
        src={sydney}
        alt=""
        className={`
      ${classes.widePhoto} ${classes.photo2}`}
      />
      <img
        src={adelaide}
        alt=""
        className={`
      ${classes.widePhoto} ${classes.photo3}`}
      />
      <img
        src={uni}
        alt=""
        className={`
      ${classes.widePhoto} ${classes.photo4}`}
      />
      <img
        src={beach}
        alt=""
        className={`
      ${classes.widePhoto} ${classes.photo5}`}
      />
      <img
        src={koala}
        alt=""
        className={`
      ${classes.widePhoto} ${classes.photo6}`}
      />
      <img
        src={cafe}
        alt=""
        className={`
      ${classes.narrowPhoto} ${classes.photo7}`}
      />
      <img
        src={littleHouse}
        alt=""
        className={`
      ${classes.narrowPhoto} ${classes.photo8}`}
      />
      <img
        src={tree}
        alt=""
        className={`
      ${classes.narrowPhoto} ${classes.photo9}`}
      />
      <img
        src={friends}
        alt=""
        className={`
      ${classes.narrowPhoto} ${classes.photo10}`}
      />
    </section>
  );
};

export default Gallery;
