import './App.css';
import { Carousel } from '../Carousel/Carousel';
import { useState } from 'react';
import { programming, tattoos, art } from '../../assets/work/work';
import { ProgrammingCard } from '../ItemCards/ProgrammingCard/ProgrammingCard';
import face from '../../assets/images/face.jpg'
import { ArtCard } from '../ItemCards/ArtCard/ArtCard';

function App() {
  const [display, setDisplay] = useState(''),
        [cards, setCards] = useState([]);
 
  const handleClick = (medium) => {
    let mediumArray
    setDisplay(medium)

    if(medium === programming) {
      mediumArray = programming.map(item => <ProgrammingCard application={item}/>)
    } else if (medium === tattoos || medium === art) {
      mediumArray = medium.map(item => <ArtCard item={item}/> )
    }
    
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
          <span onClick={()=> handleClick(programming)} className='link'>programming</span>
          <span className='link' onClick={()=> handleClick(tattoos)}>tattoos</span>
          <span className='link' onClick={()=> handleClick(art)}>art</span>
          <span className='contact link'>contact</span>
        </div>
      </aside>
      {display ? <Carousel content={cards}/> : null }
      {!display ? <Carousel content={<img src ={face} className='carousel-item'/>} /> : null}
    </div>
  );
}

export default App;
