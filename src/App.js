import { motion, useTransform, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./styles.css";

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

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data.json').then((res) => {
      setData(res.data)
    })
  })

  return (
    <div className="App">
      {data.map((img) => (
        <Images key={img.id} text={img.text} url={img.url} />
      ))}
    </div>
  );
}
