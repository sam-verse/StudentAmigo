import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import appStore from './utils/Appstore';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
       <Provider store={appStore}>
      
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
