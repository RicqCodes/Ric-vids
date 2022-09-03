import moment from 'moment';
import React from 'react';
import Loader from './Loader';

const VideoDetails = ({ video }) => {
  if (!video)
    return (
      <div>
        <Loader />
      </div>
    );

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="videoembed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="videodetails-container">
        <div className="video-title">
          <h2> {decodeURI(video.snippet.title)}</h2>
        </div>
        <div className="videodetails">
          <div className="videodetails_channel">
            {video.snippet.channelTitle}
          </div>
          <div>.</div>
          <div className="videodetails_updatetime">
            {moment(video.snippet.publishTime).format('MMM DD, YYYY')}
          </div>
        </div>
        <div className="videodetails-description">
          <p>{`${video.snippet.description}`}</p>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default VideoDetails;
