import { motion } from "framer-motion";

export default function Section({ title, facts, image }) {

  return (
    <section>
      <motion.div>
        <h2>
          {title}
        </h2>
        <div style={{display: "flex"}}>
          <div style={{margin: "16px"}}>
            <img src={`/images/${image.url}`} alt={title} />
            <p style={{fontSize: "12px"}}>{image.source}</p>
          </div>
          <div style={{margin: "16px"}}>
            {facts.map((f, f_i) => {
              return (
                <p key={f_i} style={{textAlign: "left"}}>
                {f.text + " "}
                <sup>
                  {f.references.map((r, r_i) => {
                    return (
                        <a href={r} target="_blank" rel="noreferrer" style={{color: "inherit", textDecoration: "none"}}>
                          [{r_i + 1}]
                        </a>
                    )
                  }).reduce((prev, curr) => [prev, ', ', curr])}
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