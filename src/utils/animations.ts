export const details_container = {
    hidden: { opacity: 0 ,scale: 0, originX: 0},
    visible: {
      opacity: 1,
      scale:1,
      originX: 1
    }
  };

export const card_container = {
  hidden: { },
  visible: {
    transition: {
      opacity: 1,
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}

export const card_item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};