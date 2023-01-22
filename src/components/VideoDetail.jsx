import { Paper, Typography } from "@material-ui/core";
import React from "react";

const VideoDetail = ({video: {id: {videoId}, snippet: {title, channelTitle, description}}})=>{
  console.log("videoId = "+videoId);
  if(!videoId) return <div>Loading...</div>
  const videoSrc = `https:///www.youtube.com/embed/${videoId}`;
  console.log(videoSrc);
  return(
    <React.Fragment>
      <Paper elevation = {6} style = {{height : "40%"}}>
        <iframe style={{border : "0px"}}
            height="100%"
            width = "100%"
            title = "Video Player"
            src = {videoSrc}
        />
      </Paper>
      <Paper elevation = {6} style = {{padding : "15px"}} >
        <Typography variant = "h4">
          {title} - {channelTitle}
        </Typography>
        <Typography variant = "subtitle1">
          {channelTitle}
        </Typography>
        <Typography variant = "subtitle2">
          {description}
        </Typography>
      </Paper>
    </React.Fragment>
  )
}

export default VideoDetail;