import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Home from './home'
import About from './About/About'
import Artists from './Artists/Artists'
import ArtistDetails from './Artists/ArtistDetails'
import Works from './Art/Works'
import PieceDetails from './Art/PieceDetails'

class App extends Component {

    render() {
        return (
            <Router>
              <div>
                <nav>
                  <Link to="/">Home</Link>{" "}
                  <Link to="/about">About</Link>{" "}
                  <Link to="/artists">Artists</Link>
                </nav>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/artists/:artistId/:artist/art/:id" component={PieceDetails} />
                <Route path="/artists/:artistId/:artist/art" component={Works} />
                <Route path="/artists/:artistId/:artist" component={ArtistDetails} />
                <Route path="/artists" component={Artists} />
                <Route path="/about" component={About} />
                </Switch>
              </div>
          </Router>
        );
    }
}

export default App;