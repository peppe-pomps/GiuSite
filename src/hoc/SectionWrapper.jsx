import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"
import "../styles.css"

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="section-wrapper"
      >
        <span
          className="hash-span"
          id={idName}
          style={{ display: "block", height: "80px", marginTop: "-80px" }}
        >
          &nbsp;
        </span>

        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
