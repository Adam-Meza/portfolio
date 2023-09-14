import './App.css';
import { Carousel } from '../Carousel/Carousel';
import { useEffect, useState } from 'react';
import { programming, tattoos, art } from '../../assets/work/work';
import { IntroCard } from '../ItemCards/IntroCard/IntroCard';
import { Aside } from '../Aside/Aside';
import { AboutCard } from '../ItemCards/AboutCard/AboutCard';
import { ContactCard } from '../ItemCards/ContactCard/ContactCard';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Header } from '../Header/Header';

function App() {
  const history = useHistory(),
        [windowWidth, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNav = (route) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    history.push(`/${route}`)
  };

  return (
    <div className="App">
      {windowWidth > 700 && <Aside handleNav={handleNav}/>}
      {windowWidth < 700 && <Header handleNav={handleNav}/>}
      <Switch>
        <Route exact path='/'render= {() => <IntroCard />}/>
        <Route exact path='/art' render= {() => <Carousel content={ art }/>}/>
        <Route exact path='/programming' render= {() => <Carousel content={ programming }/>}/>
        <Route exact path='/tattoos'render= {() => <Carousel content={ tattoos }/>}/>
        <Route exact path='/about'render= {() => <AboutCard handleNav={handleNav}/> }/>
        <Route exact path='/contact' render= {() => <ContactCard/>}/>
      </Switch>
    </div>
  );
}

export default App;
