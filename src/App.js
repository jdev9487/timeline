import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react";
import "./styles.css";

var json = require('./data.json')

function Images({ text, url }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);
  return (
    <section>
      <div ref={ref}>
        <img src={url} alt={text} />
      </div>
      <motion.h2 style={{ y }}>{text}</motion.h2>
    </section>
  );
}

export default function App() {
  return (
    <div className="App">
      {json.map((img) => (
        <Images key={img.id} text={img.text} url={img.url} />
      ))}
    </div>
  );
}
