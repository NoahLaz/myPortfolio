import "./services.scss";
import { motion, transform } from "framer-motion";

const list = [
  {
    id: 1,
    title: "branding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa inventore, quasi quaerat nobis totam minus deleniti suscipit, veniam iste commodi necessitatibus a ex. Ducimus blanditiis sint veritatis repellat impedit.",
  },
  {
    id: 2,
    title: "branding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa inventore, quasi quaerat nobis totam minus deleniti suscipit, veniam iste commodi necessitatibus a ex. Ducimus blanditiis sint veritatis repellat impedit.",
  },
  {
    id: 3,
    title: "branding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa inventore, quasi quaerat nobis totam minus deleniti suscipit, veniam iste commodi necessitatibus a ex. Ducimus blanditiis sint veritatis repellat impedit.",
  },
  {
    id: 4,
    title: "branding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa inventore, quasi quaerat nobis totam minus deleniti suscipit, veniam iste commodi necessitatibus a ex. Ducimus blanditiis sint veritatis repellat impedit.",
  },
];
const Services = () => {
  const variants = {
    initial: {
      x: "-500px",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div className="services">
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        {list.map((item) => (
          <motion.div
            key={item.id}
            className="box"
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
