import { Link } from 'react-router-dom';

import "./Home.css"
const Home = ()=> {

  return (
    <div className='container'>
      <Link to="/read">Read More</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/quote">Quote Generator</Link>
      <Link to="/meme">Meme Generator</Link>

    </div>
  );
}


export default Home;
