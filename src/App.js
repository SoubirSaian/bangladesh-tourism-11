import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
       <BrowserRouter>
         <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
       </BrowserRouter>
    </div>
  );
}

export default App;
