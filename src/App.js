import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddPlace from './components/AddPlace/AddPlace';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AuthProvider from './context/AuthProvider';
import MyOrder from './components/MyOrder/MyOrder';
import ManageOrder from './components/ManageOrder/ManageOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
       <AuthProvider>
          <BrowserRouter>
            <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                 <PrivateRoute path="/placeorder/:placeId">
                   <PlaceOrder></PlaceOrder>
                 </PrivateRoute>
                <Route path="/about">
                  <About></About>
                </Route>
                <Route path="/contact">
                  <Contact></Contact>
                </Route>
                <Route path="/myorder">
                  <MyOrder></MyOrder>
                </Route>
                <Route path="/manageorder">
                  <ManageOrder></ManageOrder>
                </Route>

                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/register">
                  <Register></Register>
                </Route>
                <Route path="/addplace">
                  <AddPlace></AddPlace>
                </Route>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
              </Switch>
              <Footer></Footer>
          </BrowserRouter>  
       </AuthProvider>
    </div>
  );
}

export default App;
