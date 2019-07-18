import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Addpost from "./Components/Addpost/Addpost";
import Gallery from "./Components/Gallery/Gallery";
import Home from "./Components/Home/Home";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      postFeed: [],
      postTitle: "",
      postDesc: "",
      postImage: ""
    };
  }

  componentDidMount() {    //here we are updating the gallery everytime postFeed is updated!
    axios.get("http://localhost:8080/posts").then(res => {
      this.setState({
        postFeed: res.data
      })
      console.log(res.data);
    })
  }

  getPostTitle(e) {
    //trying to get the post title and push it into a state then set obj property as that state then push object
    this.setState({
      postTitle: e.target.value
    });
  }

  getPostDesc(f) {
    //getting the post description
    this.setState({
      postDesc: f.target.value
    });
  }

  getPostImage(g) {
    //getting the post image url
    this.setState({
      postImage: g.target.value
    });
  }

  pushPost() {    //>>axios has been installed so you'll have to put the below code in an axios api
    //pushing object after title and desc have been added, posts with empty titles and desc wont be pushed
    let arr = this.state.postFeed;
    let obj = {
      title: this.state.postTitle,
      desc: this.state.postDesc,
      imgUrl: this.state.postImage
    };

    axios.post("http://localhost:8080/post", obj).then(res => {
      if (res.data.title !== "") {
        arr.push(res.data);

        this.setState({
          postFeed: arr,
          postTitle: "",
          postDesc: "",
          postImage: ""
        });

        console.log(this.state.postFeed);
      }
    })
  }

  postDel(i) {
    //post is deleted based on the index passed at the gallery
    let arr = this.state.postFeed;
    let item = arr[i];

    axios.delete("http://localhost:8080/post/" + item._id).then(res => {
      arr.splice(i, 1);
      console.log(res.data);  //this shows which obj is being deleted
      
      this.setState({
        postFeed: arr   
      });
    })

  }

  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />

        <Route
          path="/add"
          exact
          render={props => (
            <Addpost
              {...props}
              postTitle={this.state.postTitle}
              postDesc={this.state.postDesc}
              postImage={this.state.postImage}
              pushPost={this.pushPost.bind(this)}
              getPostTitle={this.getPostTitle.bind(this)}
              getPostDesc={this.getPostDesc.bind(this)}
              getPostImage={this.getPostImage.bind(this)}
            />
          )}
        />

        <Route
          path="/gallery"
          exact
          render={props => (
            <Gallery
              {...props}
              postDel={this.postDel.bind(this)}
              postFeed={this.state.postFeed}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;