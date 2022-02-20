import {Route, Routes, useLocation} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Learn from './Learn';
import Quiz from './Quiz';
import Stats from './Stats';
import Login from './Login';
import { AnimatePresence } from "framer-motion";
function App(){

  const location = useLocation();

  return (
    <div className="App">
      <div className="content">
        <NavigationBar />
        <AnimatePresence>
          <Routes location = {location} key = {location.key}>
            <Route exact path="/" element ={<Home />} />
            <Route path ="/learn" element ={<Learn />} />
            <Route path ="/quiz" element ={<Quiz />} />
            <Route path = "/stats" element ={<Stats />} />
            <Route path = "/login" element ={<Login />} /> 
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App