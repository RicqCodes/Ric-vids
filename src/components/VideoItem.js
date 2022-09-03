import moment from 'moment';
import React from 'react';

const VideoItem = ({ onVideoSelect, video }) => {
  console.log(video);
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item">
      <div className="snippet-image__box">
        <img
          alt={video.snippet.title}
          className="snippet-image"
          src={video.snippet.thumbnails.medium.url}
        />
      </div>

      <div className="content">
        <div className="content-text">
          {video.snippet.title.length > 56
            ? `${video.snippet.title.slice(0, 56)}...`
            : video.snippet.title}
        </div>
        <div className="channel-info">
          <div className="channel-title">{video.snippet.channelTitle}</div>
          <div className="publish-time">
            {moment(video.snippet.publishTime).fromNow()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
