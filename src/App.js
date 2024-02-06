import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';

function App() {
  return (
    <div className='app'>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
