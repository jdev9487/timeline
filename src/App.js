import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

function Images({ title, texts, url }) {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useTransform(scrollYProgress, [0, 1], [-1000, 350]);
  // const y2 = useTransform(scrollYProgress, [0, 1], [-800, 350]);
  return (
    <section>
      <motion.div>
        <h2>
          {title}
        </h2>
        <div style={{display: "flex"}}>
          <div style={{margin: "16px"}}>
            <img src={url} alt={title} />
          </div>
          <div style={{margin: "16px"}}>
            {texts.map((t) => {
              return (
                <p>
                  {t}
                </p>
              )
            })}
          </div>
        </div>
      </motion.div>
      {/* <div ref={ref}>
        <img src={url} alt={title} />
      </div>
      <motion.h2 style={{ y }}>
        {title}
      </motion.h2>
      {texts.map((t) => {
        return (
          <motion.p style={{ y2 }}>
            {t}
          </motion.p>
        )
      })} */}
    </section>
  );
}


export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div className="App">
      {data.map((img, index) => (
        <Images key={index} title={img.title} texts={img.texts} url={img.url} />
      ))}
    </div>
  );
}

  // {
  //   "title": "Kyoto",
  //   "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   "url": "https://images.pexels.com/photos/19488566/pexels-photo-19488566/free-photo-of-kyoto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  // },
  // {
  //   "title": "Forest",
  //   "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   "url": "https://images.pexels.com/photos/19237996/pexels-photo-19237996/free-photo-of-empty-road-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  // }