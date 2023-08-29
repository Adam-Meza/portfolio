import './App.css';
import { Carousel } from '../Carousel/Carousel';
import { useState } from 'react';
import { programming } from '../../assets/work/work';
import { ProgrammingCard } from '../ItemCards/ProgrammingCard/ProgrammingCard';
import { use } from 'chai';

function App() {
  const [medium, setMedium] = useState(''),
        [cards, setCards] = useState([]);
 
  const handleClick = (medium) => {


    const mediumArray = programming.map(item => <ProgrammingCard application={item}/>)
    setMedium(medium)
    setCards(mediumArray)
  }



  return (
    <div className="App">
      <aside>
        <div className='name-container'>
          <h1>Adam</h1>
          <h1>Meza</h1>
          <span className="creative">creative</span>
        </div>
        <div className='link-container'>
          <span onClick={()=> handleClick('programming')} className='link'>programming</span>
          <span className='link'>tattoos</span>
          <span className='link'>art</span>
          <span className='contact link'>contact</span>
        </div>
      </aside>
      {medium === 'programming' ? <Carousel content={cards}/> : null }


      {/* // <Carousel />   */}
    </div>
  );
}

export default App;
