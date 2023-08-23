import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/*left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Find your dream
              <br /> home with Us
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Discover a beautiful & comfortable Home with ease
            </span>
            <span className="secondaryText">
              Just scroll, have a 'wow' moment and select the best!
            </span>
          </div>

          <SearchBar />

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={6345} end={7684} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Affordable Housing</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp start={1325} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Living Happy</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={34} />
                <span>+</span>
              </span>
              <span className="secondaryText">Valued #1</span>
            </div>
          </div>
        </div>

        {/*right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
