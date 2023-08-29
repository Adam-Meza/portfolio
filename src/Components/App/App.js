import './App.css';
import { Carousel } from '../Carousel/Carousel';

function App() {
  const handleClick = (event) => {
    console.log(event.target)
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
          <span onClick={handleClick}>programming</span>
          <span>tattoos</span>
          <span>art</span>
          <span className='contact'>contact</span>
        </div>
      </aside>
      <Carousel />  
    </div>
  );
}

export default App;
