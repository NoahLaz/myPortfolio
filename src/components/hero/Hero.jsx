import { motion } from "framer-motion";
import "./hero.scss";
const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const slidingTextVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-100%",
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2>Noah Lazreq</motion.h2>
          <motion.h1>Web and Software Developer</motion.h1>
          <motion.div className="buttons">
            <motion.button>See the Latest Works</motion.button>
            <motion.button>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        variants={slidingTextVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        MSc in Computer Science, Software developer and Web Designer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
