import './App.css';
import { Carousel } from '../Carousel/Carousel';
import { useState } from 'react';
import { programming, tattoos, art } from '../../assets/work/work';
import { IntroCard } from '../ItemCards/IntroCard/IntroCard';
import { Aside } from '../Aside/Aside';
import { AboutCard } from '../ItemCards/AboutCard/AboutCard';
import { ContactCard } from '../ItemCards/ContactCard/ContactCard';
import { Switch, Route } from 'react-router-dom';

function App() {
  const handleClick = (medium) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  };

  return (
    <div className="App">
      <Aside handleClick={handleClick}
      />
      <Switch>
        <Route exact path='/'render= {() => <IntroCard />}/>
        <Route exact path='/art' render= {() => <Carousel content={ art }/>}/>
        <Route exact path='/programming' render= {() => <Carousel content={ programming }/>}/>
        <Route exact path='/tattoos'render= {() => <Carousel content={ tattoos }/>}/>
        <Route exact path='/about'render= {() => <AboutCard/> }/>
        <Route exact path='/contact' render= {() => <ContactCard/>}/>
      </Switch>
    </div>
  );
}

export default App;
