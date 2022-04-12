import './App.css';
import React from 'react';
import songModal from "./components/songModal";
import ratingModal from "./components/ratingModal";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        title: "",
        description: "",
        rated: false,
      },
    songlist: []
    };
  }


componentDidMount() {
  this.refreshList();
}

refreshList = () => {
  axios
    .get("http://localhost:8000/api/songs")
    .then((res) => this.setState({ songlist: res.data }))
    .catch((err) => console.log(err));

}

render() {
  return ( 
    )
}
}
export default App;
