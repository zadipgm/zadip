import { Video, VideoWrapper } from "comonents/Header/header.styled.components";
import React from "react";

const MainVedioComponent = () => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  React.useEffect(() => {
    setIsVideoLoaded(true);
  }, [isVideoLoaded]);
  return (
    <>
      <VideoWrapper background={isVideoLoaded ? "rgba(0, 0, 0, 0.5)" : ""}>
        <Video
          poster="/images/thumb.webp"
          className="videoTag"
          autoPlay
          loop
          muted
          onLoadedData={() => setIsVideoLoaded(true)}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
        >
          <source
            src="https://zadip-staging.netlify.app/videos/zadipvideo.mp4"
            type="video/mp4"
          />
        </Video>
      </VideoWrapper>
    </>
  );
};
export default MainVedioComponent;
