
const DISTANCE = 50;

const TRANSITION_ENTER = {
  duration: 0.2,
  ease: [0.43, 0.13, 0.23, 0.96]
};
const TRANSITION_EXIT = {
  duration: 0.2,
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const varSlideInUp = {
  initial: { x: DISTANCE },
  animate: { x: 0, transition: DISTANCE },
  exit: { x: DISTANCE, transition: TRANSITION_EXIT }
};

