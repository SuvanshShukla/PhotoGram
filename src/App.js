import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import Addpost from "./Components/Addpost/Addpost";
import Gallery from "./Components/Gallery/Gallery";
import Home from "./Components/Home/Home";
import MyPosts from "./Components/Myposts/MyPosts";
import axios from "axios";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const history = createBrowserHistory()
// const customHistory = createBrowserHistory();


//!!Gotta make the website more secure and format the remaining stuff

var firebaseConfig = {
  apiKey: "AIzaSyD4xKC6UoenEJsCYa9bALPVdkv4t_91zXA",
  authDomain: "super-photogram.firebaseapp.com",
  databaseURL: "https://super-photogram.firebaseio.com",
  projectId: "super-photogram",
  storageBucket: "super-photogram.appspot.com",
  messagingSenderId: "659416245147",
  appId: "1:659416245147:web:96a9ef697fc6574d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      postFeed: "",
      postTitle: "",
      postDesc: "",
      postImage: "",
      user: null,
      personalFeed: "",
      uid: ""
    };
  }

  componentDidMount() {
    //here we are updating the gallery everytime postFeed is updated!
    axios.get("/posts").then(res => {
      this.setState({
        postFeed: res.data
      });
      console.log(res.data);
    });

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

  pushPost() {
    //pushing object after title and desc have been added, posts with empty titles and desc wont be pushed
    let arr = this.state.postFeed;
    let obj = {
      title: this.state.postTitle,
      desc: this.state.postDesc,
      imgUrl: this.state.postImage,
      uid: this.state.user.uid
    };

    axios.post("/post", obj).then(res => {
      if (res.data.title !== "") {
        arr.push(res.data);

        this.setState({
          postFeed: arr,
          postTitle: "",
          postDesc: "",
          postImage: "",
          uid: ""
        });

        console.log(this.state.postFeed);
      }
    });
  }

  postDel(i) {
    //post is deleted based on the index passed at the gallery
    let arr = this.state.postFeed;
    let item = arr[i];

    axios.delete("/post/" + item._id).then(res => {
      arr.splice(i, 1);
      console.log(res.data); //this shows which obj is being deleted

      this.setState({
        postFeed: arr
      });
    });
  }

  googleLogin() {
    // const history = createBrowserHistory();

    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;

      // The signed-in user info.
      var user = result.user;
      this.setState({
        user: user
      });

      // this.props.dispatch(push("/gallery"));

      // window.location.reload()
      // router.transitionTo("/gallery")

      console.log(user.displayName, user.email);
      console.log(this.state.user);
      console.log(history);

      history.replace("/gallery");

    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    })
  }

  checkLogin() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        console.log("User is signed in");

      } else {
        // No user is signed in.
        console.log("user is not signed in ");

      }
    });
  }

  logout() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.setState({
        user: null
      })
      console.log(this.state.user);
      // this.props.history.push("/gallery")


    }).catch(function (error) {
      // An error happened.
    });
  }

  uploadFile(e) {
    console.log(e.target.files[0])
    let fd = new FormData()
    fd.append("avatar", e.target.files[0])

    axios.post("/postImage", fd, {
      headers: {
        'Content-Type': "multipart/form-data"
      }
    })
  }

  fileUploadFirebase(e) {
    console.log(e.target.files[0]);
    var storageRef = firebase.storage().ref();

    var userImagesRef = storageRef.child(`image_${this.state.postTitle}`); //>> here if you don't add a template which changes the name of the file then the file will keep overwriting and only the most recent one will be shown
      //>> another way to dynamically change the name of the uploading file is to add a date template like -> ${Date.now()}

    userImagesRef.put(e.target.files[0]).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      userImagesRef.getDownloadURL().then((url)=>{
        console.log(url);
        
        this.setState({
          postImage: url
        })
      })
    });  
  }

  getpersonalFeed(){
    let person = this.state.user

    axios.get("/myPosts/" +person.uid).then(res=>{
      this.setState({
        personalFeed: res.data
      })
      console.log(res.data);
      
    })
  }


  render() {
    return (
      <Router /* history={history} */>
        <Route
          path="/"
          exact
          render={(props) => (
            <Home
              {...props}
              login={this.googleLogin.bind(this)}
              logout={this.logout.bind(this)}
              check={this.checkLogin.bind(this)}
              user={this.state.user}
              getPersonal={this.getpersonalFeed.bind(this)}
            />
          )}
        />

        <Route
          path="/add"
          exact
          render={(props) => (
            <Addpost
              {...props}
              postTitle={this.state.postTitle}
              postDesc={this.state.postDesc}
              postImage={this.state.postImage}
              pushPost={this.pushPost.bind(this)}
              getPostTitle={this.getPostTitle.bind(this)}
              getPostDesc={this.getPostDesc.bind(this)}
              getPostImage={this.getPostImage.bind(this)}
              user={this.state.user}
              fileUpload={this.fileUploadFirebase.bind(this)}
              user={this.state.user}

            />
          )}
        />

        <Route
          path="/gallery"
          exact
          render={(props) => (
            <Gallery
              {...props}
              postDel={this.postDel.bind(this)}
              user={this.state.user}
              postFeed={this.state.postFeed}
            />
          )}
        />

        <Route
          path="/myposts"
          exact
          render={(props) => (
            <MyPosts
              {...props}
              prsnlFeed={this.state.personalFeed}
              postDel={this.postDel.bind(this)}
              user={this.state.user}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
// var that = this; //>> this line isn't at all necessary because all I had to do was convert the function into an arrow function
