// Welcome to Framer Motion Variant use and add if necessary --------------------- by famak

const selectionVariant = {
  hoverEffect: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 500,
    },
  },
  clickEffect: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
  visible: {
    x: "-128px",
    y: "80px",
    transition: {
      type: "spring",
    },
  },
};

const glowVariant = {
  hoverEffect: {
    boxShadow: "0px 0px 8px rgb(0, 100, 244)",
    transition: {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const containerVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      delay: 0.3,
      stiffness: 120,
      mass: 0.5,
      damping: 15,
      type: "spring",
    },
  },
  exit: {
    x: "100vw",
    transition: {
      delay: 0.3,
      stiffness: 120,
      mass: 0.5,
      damping: 15,
      type: "spring",
    },
  },
};

const headerVariant = {
  hidden: {
    y: "-100vw",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.6,
      stiffness: 120,
      mass: 0.5,
      damping: 15,
      type: "spring",
    },
  },
  exit: {
    y: "-100vw",
    transition: {
      delay: 0.6,
      stiffness: 120,
      mass: 0.5,
      damping: 15,
      type: "spring",
    },
  },
};

export { selectionVariant, glowVariant, containerVariant, headerVariant };
