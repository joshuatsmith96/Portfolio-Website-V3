import { motion } from "framer-motion";

function Test() {
  return (
    <div className="Test">
      <motion.div
      className="TestThing"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}

export default Test;
