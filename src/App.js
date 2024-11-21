import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Section from "./Components/Section";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/data.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div className="App">
      {data.map((section, index) => (
        <Section key={index} title={section.title} facts={section.facts} url={section.url} />
      ))}
    </div>
  );
}