import ReactPlayer from "react-player/youtube";
import { useState } from "react";

export default function VideoPlayer(options) {
  const { url } = options;

  const [isPaused, setPaused] = useState(false);
  const [isMuted, setMuted] = useState(true);

  return (
    <div>
      <ReactPlayer
        className="video-player-wrapper"
        url="https://www.youtube.com/watch?v=5qap5aO4i9A"
        width="100vw"
        height="100vh"
        controls={false}
        muted={isMuted}
        pip={false}
        config={{
          youtube: {
            playerVars: { showinfo: 0 },
          },
        }}
      />
    </div>
  );
}
