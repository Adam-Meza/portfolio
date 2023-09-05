import './App.css';
import { Carousel } from '../Carousel/Carousel';
import { useState } from 'react';
import { programming, tattoos, art } from '../../assets/work/work';
import { ProgrammingCard } from '../ItemCards/ProgrammingCard/ProgrammingCard';
import { ArtCard } from '../ItemCards/ArtCard/ArtCard';
import { IntroCard } from '../ItemCards/IntroCard/IntroCard';
import { Aside } from '../Aside/Aside';

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
    } else if (medium === "home") {
      setDisplay(null)
    }
    
    setCards(mediumArray);
  };

  const handleContact = () => {
  
  }

  return (
    <div className="App">
      <Aside handleClick={handleClick}
            handleContact={handleContact}
      />
      {display ? <Carousel content={cards}/> : null }
      {!display ? <IntroCard />: null}
    </div>
  );
}

export default App;
