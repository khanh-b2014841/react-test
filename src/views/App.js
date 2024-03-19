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
        
        <ExComponent />
        {/* <ExComponent></ExComponent> */}
      </header>
    </div>
  );
}

export default App;
