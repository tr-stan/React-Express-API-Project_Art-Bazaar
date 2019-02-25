import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';

// import logistical components
import Home from './home'
import About from './About/About'
import Auth from './Admin/Auth'
// import Admin from './Admin/Admin'
import AddArtistAuth from './Admin/AddArtistAuth'

// import relevant Artist-related components
import Artists from './Artists/Artists'
import ArtistDetails from './Artists/ArtistDetails'

// import relevant Art-related components
import Works from './Art/Works'
import PieceDetails from './Art/PieceDetails'

// import relevant Event-related components
import Upcoming from './Events/Upcoming'
import EventDetails from './Events/EventDetails'

class App extends Component {

    render() {
        return (
            <Router>
              <div>
                <nav className='nav'>
                  <Link to="/">Home</Link>{" "}
                  <Link to="/about">About</Link>{" "}
                  <Link to="/artists">Artists</Link>{" "}
                </nav>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/artists/:artistId/:artist/art/:id" component={PieceDetails} />
                <Route path="/artists/:artistId/:artist/art" component={Works} />
                <Route path="/artists/:artistId/:artist" component={ArtistDetails} />
                <Route path="/artists" component={Artists} />
                <Route path="/events/upcoming/:id" component={EventDetails} />
                <Route path="/events/upcoming" component={Upcoming} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Auth} />
                <Route path="/admin/add" component={AddArtistAuth} />
                </Switch>
              </div>
          </Router>
        );
    }
}

export default App;