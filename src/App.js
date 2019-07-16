import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Addpost from './Components/Addpost/Addpost';
import Gallery from './Components/Gallery/Gallery';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.state = {
      postFeed: []
    }
  }


  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              {/* <Link to="/">LOGIN</Link> */}
            </li>
            <li>
              <Link to="/add">ADD A POST</Link>
            </li>
            <li>
              <Link to="/gallery">GALLERY</Link>
            </li>
          </ul>
        </div>

        {/* <Route path="/" exact component={Home}></Route> */}
        <Route path="/add" exact render={(props) => <Addpost {...props} postFeed={this.state.postFeed}></Addpost>}></Route>
        <Route path="/gallery" exact component={Gallery}></Route>

      </Router>
    );
  }
}



export default App;
