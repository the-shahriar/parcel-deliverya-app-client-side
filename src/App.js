import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageBooking from './Pages/ManageBooking/ManageBooking';
import MyBooking from './Pages/MyBooking/MyBooking';
import NotFound from './Pages/NotFound/NotFound';
import ThankYou from './Pages/ThankYou/ThankYou';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
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
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/manage-booking">
            <ManageBooking></ManageBooking>
          </Route>
          <Route path="/my-booking">
            <MyBooking></MyBooking>
          </Route>
          <PrivateRoute path="/book/:id">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/booking-received/:id">
            <ThankYou></ThankYou>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
