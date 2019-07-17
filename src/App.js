import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Addpost from './Components/Addpost/Addpost';
import Gallery from './Components/Gallery/Gallery';
import Home from './Components/Home/Home';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.state = {
      postFeed: [],
      postTitle: "",
      postDesc: "",
      postImage: ""
    }
  }

  getPostTitle(e) { //trying to get the post title and push it into a state then set obj property as that state then push object
    this.setState({
      postTitle: e.target.value,
    })
  }

  getPostDesc(f) { //getting the post description
    this.setState({
      postDesc: f.target.value
    })
  }

  getPostImage(g) { //getting the post image url
    this.setState({
      postImage: g.target.value
    })
  }

  pushPost() { //pushing object after title and desc have been added posts with empty titles and desc wont be pushed
    let arr = this.state.postFeed
    let obj = { title: this.state.postTitle, desc: this.state.postDesc, imgUrl: this.state.postImage }

    if (obj.title !== "") {
      arr.push(obj);

      this.setState({
        postFeed: arr,
        postTitle: "",
        postDesc: "",
        postImage: ""
      })

      console.log(this.state.postFeed);

    }
  }

  postDel(i) { //post is deleted based on the index passed at the gallery
    let arr = this.state.postFeed
    arr.splice(i, 1)
    this.setState({
      postFeed: arr
    })
  }

  render() {
    return (
      <Router>

        <Route path="/" exact component={Home}></Route>

        <Route path="/add" exact render={(props) => <Addpost {...props}
          postTitle={this.state.postTitle}
          postDesc={this.state.postDesc}
          postImage={this.state.postImage}
          pushPost={this.pushPost.bind(this)}
          getPostTitle={this.getPostTitle.bind(this)}
          getPostDesc={this.getPostDesc.bind(this)}
          getPostImage={this.getPostImage.bind(this)}></Addpost>}>
        </Route>
        
        <Route path="/gallery" exact render={(props) => <Gallery {...props}
          postDel={this.postDel.bind(this)}
          postFeed={this.state.postFeed}></Gallery>}>
        </Route>

      </Router>
    );
  }
}



export default App;
