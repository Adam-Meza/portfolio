import "./App.css";
import { ArtCard } from "../ItemCards/ArtCard/ArtCard";
import { ProgrammingCard } from "../ItemCards/ProgrammingCard/ProgrammingCard";
import { useEffect, useState } from "react";
import { programming, tattoos, art } from "../../assets/work/work";
import { IntroCard } from "../ItemCards/IntroCard/IntroCard";
import { Aside } from "../Aside/Aside";
import { AboutCard } from "../ItemCards/AboutCard/AboutCard";
import { ContactCard } from "../ItemCards/ContactCard/ContactCard";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Header } from "../Header/Header";

function App() {
  const history = useHistory(),
    [windowWidth, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNav = (route) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    history.push(`/${route}`);
  };

  const displayElements = (content) => {
    const display = content.map((item, index) => {
      return content === programming ? (
        <ProgrammingCard application={item} key={index} />
      ) : (
        <ArtCard item={item} key={index} />
      );
    });

    return <div className="page-wrapper">{display}</div>;
  };

  return (
    <div className="App">
      {windowWidth > 1100 && <Aside handleNav={handleNav} />}
      {windowWidth < 1100 && <Header handleNav={handleNav} />}
      <Switch>
        <Route exact path="/" render={() => <IntroCard />} />
        <Route exact path="/art" render={() => displayElements(art)} />
        <Route exact path="/tattoos" render={() => displayElements(tattoos)} />
        <Route exact path="/contact" render={() => <ContactCard />} />
        <Route
          exact
          path="/programming"
          render={() => displayElements(programming)}
        />
        <Route
          exact
          path="/about"
          render={() => <AboutCard handleNav={handleNav} />}
        />
      </Switch>
    </div>
  );
}

export default App;
