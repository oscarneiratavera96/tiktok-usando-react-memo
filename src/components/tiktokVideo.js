import { useEffect, useRef, useState } from "react";

const TiktokVideo = ({ item, current }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (current && ref.current) {
      ref.current.play();
    } else {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  }, [current]);

  return (
    <div className="tiktokVideo">
      <video ref={ref} width="540" height="960" muted="muted">
        <source
          src={`http://localhost:4000/videos/${item.path}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default TiktokVideo;
