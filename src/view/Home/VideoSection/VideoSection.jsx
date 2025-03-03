import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section">

           <video className="video-bg" autoPlay loop muted controls>
       <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
       Your browser does not support the video tag.
     </video>
     

      <div className="video-overlay">
        <div className="container text-center">
          <h1 className="display-4">Giải pháp tiên tiến cho môi trường</h1>
          <p className="lead">
            Công nghệ, tài nguyên và môi trường – Đồng hành cùng sự phát triển bền vững
          </p>
          <a href="#cta" className="btn btn-primary">Tìm hiểu thêm</a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
