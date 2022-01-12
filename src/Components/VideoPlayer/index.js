import ReactPlayer from "react-player/youtube";
import { Button } from "@mui/material";
import { useState } from "react";
import "./styles.css";

export default function VideoPlayer(config) {
  const { url } = config;
  const [isPlaying, setPlaying] = useState(true);
  const [isMuted, setMuted] = useState(true);

  return (
    <div className="video-player-wrapper">
      <ReactPlayer
        className="videoplayer"
        url={url}
        width="100%"
        height="120vh"
        playing={isPlaying}
        muted={isMuted}
        pip={false}
        config={{
          youtube: {
            playerVars: { showinfo: 0, disablekb: 1 },
          },
        }}
      />

      <div className="player-btns">
        <Button onClick={() => setMuted(!isMuted)}>Mutar</Button>
        <Button onClick={() => setPlaying(!isPlaying)}>Play</Button>
      </div>
    </div>
  );
}
