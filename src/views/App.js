import logo from './logo.svg';
import './App.scss';

import ExComponent from './ex/component_ex';

/**
 * 2 component: class component && funcion component
 * 
 * 
 * 
 */

const App = () => {
// function App() {
  //JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello word!
        </p>

     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ExComponent />
        {/* <ExComponent></ExComponent> */}
      </header>
    </div>
  );
}

export default App;
