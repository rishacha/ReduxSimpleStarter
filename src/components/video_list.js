import React from 'react';
import VideoListItem from './video_list_item';

// Use map instead of a for loop

const VideosList = (props)=>{
  const videoItems=props.videos.map((videoItem)=>{
    return (
      //<VideoListItem video={videoItem} />
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={videoItem.etag}
        video={videoItem} />
    );
  });

  return (
    <ul className="col-md-4 list-group" >
      {videoItems}
    </ul>
  );
}

export default VideosList;
