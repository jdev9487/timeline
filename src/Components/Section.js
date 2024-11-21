import { motion } from "framer-motion";

export default function Section({ title, facts, url }) {

  return (
    <section>
      <motion.div>
        <h2>
          {title}
        </h2>
        <div style={{display: "flex"}}>
          <div style={{margin: "16px"}}>
            <img src={`/images/${url}`} alt={title} />
          </div>
          <div style={{margin: "16px"}}>
            {facts.map((f, index) => {
              return (
                <p key={index}>
                {f.text}
                <sup>
                    <a href={f.reference} target="_blank" rel="noreferrer">
                        {index + 1}
                    </a>
                </sup>
                </p>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}