import './App.css';
import Counter from './components/Counter';
import FormInput from './components/FormInput';
import CounterRef from './components/CounterRef';
import QuoteGenerator from "./components/QuoteGenerator"
import MemeGenerator from "./components/MemeGenerator"

import { Routes,Route, HashRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Read  from './components/Read';

function App() {

  return (
    <div className="App">
      <HashRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="read" element={<Read />} />
        <Route path="counter" element={<Counter />} />
        <Route path="counter" element={<CounterRef />} />
        <Route path="form" element={<FormInput />} />
        <Route path="quote" element={<QuoteGenerator />} />
        <Route path="meme" element={<MemeGenerator />} />


        </Routes>
        </HashRouter>
     </div>
  );
}


export default App;
