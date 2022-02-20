import "bootstrap/dist/css/bootstrap.css";
import {motion} from 'framer-motion';
import QuizBox from './QuizBox';
function Quiz(){

  const slideIn = {
    hidden: {
        y: -1250,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition : {
            delay : 1.0, type: 'spring', stiffness: 125,
        }
    },
    exit: {
        y: -1250,
        opacity: 0,
        transition: {ease: 'easeInOut'}
    }
  }
  return(
      <motion.div variants={slideIn} initial = "hidden" animate= "visible" exit="exit">
        <QuizBox />
      </motion.div>
    );
}

export default Quiz