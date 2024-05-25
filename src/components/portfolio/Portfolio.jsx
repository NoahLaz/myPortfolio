import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Ecommerce",
    img: "https://images.pexels.com/photos/13433389/pexels-photo-13433389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed odit beatae dicta veritatis quos. Labore hic temporibus dolores necessitatibus alias, quas impedit recusandae assumenda facere doloremque rem unde optio voluptatibus.",
  },
  {
    id: 2,
    title: "React Dashboard",
    img: "https://images.pexels.com/photos/13433389/pexels-photo-13433389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed odit beatae dicta veritatis quos. Labore hic temporibus dolores necessitatibus alias, quas impedit recusandae assumenda facere doloremque rem unde optio voluptatibus.",
  },
  {
    id: 3,
    title: "React Chat app",
    img: "https://images.pexels.com/photos/13433389/pexels-photo-13433389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed odit beatae dicta veritatis quos. Labore hic temporibus dolores necessitatibus alias, quas impedit recusandae assumenda facere doloremque rem unde optio voluptatibus.",
  },
  {
    id: 4,
    title: "React Blog",
    img: "https://images.pexels.com/photos/13433389/pexels-photo-13433389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed odit beatae dicta veritatis quos. Labore hic temporibus dolores necessitatibus alias, quas impedit recusandae assumenda facere doloremque rem unde optio voluptatibus.",
  },
];

const Single = ({ item }) => {
  const sRef = useRef();

  const { scrollYProgress } = useScroll({
    target: sRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section ref={sRef} className="title">
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={y}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const pRef = useRef();

  const { scrollYProgress } = useScroll({
    target: pRef,
    offset: ["end end", "start center"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="portfolio" ref={pRef}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
