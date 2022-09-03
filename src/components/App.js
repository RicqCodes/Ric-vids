import React, { useEffect, useState } from 'react';
import '../style.css';
import Navbar from './Navbar';
import useVideos from '../hooks/useVideos';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('manchester united');
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  console.log(videos);

  return (
    <div className="container">
      <Navbar onTermSubmit={search} />
      <div className="content-container">
        <div className="more-details__container">
          <VideoDetails video={selectedVideo} />
        </div>

        <div className="snippet-container">
          <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default App;
