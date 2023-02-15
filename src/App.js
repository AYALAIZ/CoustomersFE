import './App.css';
import { BrowserRouter } from 'react-router-dom'
import UserContext from './Components/UserContext';
import MyRouter from './Components/MyRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext>
          <MyRouter/>
        </UserContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
