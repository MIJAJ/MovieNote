import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './component/Navbar';
import Navbar_Login from './component/Navbar_Login';
import Footer from './component/Footer';
import Home from './page/Home';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import Profile from './page/Profile';
import New_Popular from './page/New_Popular';
import Currently_Watching from './page/Currently_Watching';
import Watch_Later from './page/Watch_Later';
import Finished_Watching from './page/Finished_Watching';
import Favorite_Movie from './page/Favorite_Movie';
import Privacy from './page/Privacy';
import Service from './page/Service';
import './App.css';


export default function App() {
  return (
    <>
    <div className="bg min-h-screen max-w-full">
      <Router>
        <Navbar_Login />
        {/*<Navbar_Login />*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/newpopular" component={New_Popular} />
          <Route exact path="/currentlywatching" component={Currently_Watching} />
          <Route exact path="/watchlater" component={Watch_Later} />
          <Route exact path="/finishedwatching" component={Finished_Watching} />
          <Route exact path="/favoritemovie" component={Favorite_Movie} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/service" component={Service} />
        </Switch>
        
      </Router>
    </div>
    <Footer />
    </>
  );
}