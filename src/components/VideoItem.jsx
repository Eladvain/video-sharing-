import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({video, onSelectVideo}) =>{
  return(
    <Grid item xs = {12}>
      <Paper style = {{display : "flex", alignItems : "center", cursor : "pointer"}} onClick={
      ()=>onSelectVideo(video)}>
        <img style = {{marginRight: "10px"}} alt = "thumbnail" src = {video.snippet.thumbnails.medium.url}/>
        <Typography variant = "subtitle1">
        </Typography>
        <b>{video.snippet.title}</b>
        

      </Paper>

    </Grid>
  )
} 

export default VideoItem;