
import './App.css';
import youtube from './api/youtube';
import {Grid} from "@material-ui/core";
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState({id : {}, snippet: {}})

  return (
    <div className="App">
      <Grid style = {{justifyContent: "center"}} container spacing = {10}>
        <Grid item xs = {11}>
          <Grid container spacing={10}>
            <Grid item xs = {12}>
              <SearchBar onSubmit = {handleSubmit}/>
            </Grid>
            <Grid item xs = {8}>
              <VideoDetail video = {selectedVideos} />
            </Grid>
            <Grid item xs = {4}>
              <VideoList videos = {videos} onVideoSelect = {setSelectedVideos} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  async function handleSubmit(searchItem){
    const {data : {items : videos}} = await youtube.get("search", {
      params:{
        part : "snippet",
        maxResult : 5,
        key : "AIzaSyDiwHa6YTPJQUgkpYXz6N9Opmvan4IpJOI",
        q : searchItem
      }
    })
    setVideos(videos);
    setSelectedVideos(videos[0]);
  }
}

export default App;
