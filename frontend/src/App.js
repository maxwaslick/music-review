import './App.css';
import React from 'react';
import Modal from "./components/songModal";
import ratingModal from "./components/ratingModal";
import axios from 'axios';
import Form1 from "./components/Form";



class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      viewSongs: true,
      activeItem: {
        Song: "",
        Artist: "",
      },
    songlist: [],
    ratings: [],
    };
  }


  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get(`http://localhost:8000/api/songs/`)
      .then((res) => this.setState({ songlist: res.data}))
      .catch((err) => console.log(err));

  }

  displaySong = (status) => {
    if (status) {
      return this.setState({ viewSongs: true });
    }
    return this.setState({ viewSongs: false })
  }

  renderSongs = () => {
    const { viewSongs } = this.state;
    const newSongs = this.state.songlist
    return newSongs.map((item) => (
      <li 
        key={item.id}
      >
        <span
          title={item.Rating_song}
        >
          {item.artist_name}: {item.song_name}
        </span>
        <span>
        <button
            onClick={() => this.editItem(item)}
          >
            {" "}Edit Song{" "}
          </button>
          <button
            onClick={() => this.rateItem(item)}
          >
            {" "}Rate {" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  
  handleSubmit = (item) => {
    this.toggle();
    if (item.song_name) {
      axios
        .put(`http://localhost:8000/api/songs/${item.song_name}`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/songs/", item)
      .then((res) => this.refreshList());
  };

  createSong = () => {
    const item = { Song: "" , artist: "", };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal});
  };

  rateItem = (song) => {
    axios
      .get(`http://localhost:8000/api/reviews/${song.Rating_id}`)
    this.setState({ activeItem: song, modal: !this.state.ratingModal})
  };

  handleDelete = (item) => {
    axios
      .delete(`http://localhost:8000/api/songs/${item.song_name}`)
      .then((res) => this.refreshList());
  };

  render(){
    return (
      <main className="content">
        <h3>Songs:</h3>
        {/* {this.renderLogin()} */}
        {this.renderSongs()}
        <button onClick={this.createSong}>
          Add Song
        </button>
        {this.state.modal ? (
        <Modal
          activeItem={this.state.activeItem}
          toggle={this.toggle}
          onSave={this.handleSubmit}
        />
        ) : null}
      </main>
    )  
  }
    
}

export default App;
