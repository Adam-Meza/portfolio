import './App.css';
import { Carousel } from '../Carousel/Carousel';
import { useState } from 'react';
import { programming, tattoos, art } from '../../assets/work/work';
import { ProgrammingCard } from '../ItemCards/ProgrammingCard/ProgrammingCard';
import { ArtCard } from '../ItemCards/ArtCard/ArtCard';
import { IntroCard } from '../ItemCards/IntroCard/IntroCard';

function App() {
  const [display, setDisplay] = useState(''),
        [cards, setCards] = useState([]);
 
  const handleClick = (medium) => {
    let mediumArray;
    setDisplay(medium);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if(medium === programming) {
      mediumArray = programming.map(item => <ProgrammingCard application={item}/>);
    } else if (medium === tattoos || medium === art) {
      mediumArray = medium.map(item => <ArtCard item={item}/> );
    };
    
    setCards(mediumArray);
  };

  const handleContact = () => {
  
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
        </div>
        <span className='contact link' onClick={()=> handleContact()}>contact</span>
      </aside>
      {display ? <Carousel content={cards}/> : null }
      {!display ? <IntroCard />: null}
    </div>
  );
}

export default App;
