import './App.css';
import face from '../../assets/face.jpg'
import { useScroll, motion, useTransform } from 'framer-motion';
import { Carousel } from '../Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <aside>
        <div className='name-container'>
          <h1>ADAM MEZA</h1>
          <span className="creative">creative</span>
        </div>
        <span>code</span>
        <span>ink</span>
        <span>graphite</span>
        <span>contact</span>
      </aside>
      <Carousel />  
    </div>
  );
}

export default App;
