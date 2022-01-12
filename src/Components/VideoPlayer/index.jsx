import { useState } from "react";

import ReactPlayer from "react-player/youtube";
import { AiOutlineSound, AiFillSound } from "react-icons/ai";
import { BsFillPauseFill, BsPlayFill, BsList } from "react-icons/bs";

import { data } from "../../data";

import "./styles.css";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const DEFAULT_RADIO = "https://www.youtube.com/watch?v=5qap5aO4i9A";

export default function VideoPlayer() {
  const [url, setURL] = useState(DEFAULT_RADIO);
  const [isPlaying, setPlaying] = useState(true);
  const [isMuted, setMuted] = useState(true);

  const [open, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  let MuteOption = isMuted ? <AiOutlineSound /> : <AiFillSound />;
  let PlayOption = isPlaying ? <BsFillPauseFill /> : <BsPlayFill />;

  return (
    <div className="video-player-container">
      <Dialog open={open} onClick={handleCloseModal} setURL={setURL}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {data.map((data, key) => {
              return (
                <Card sx={{ minWidth: 275, border: 5 }}>
                  <CardContent>
                    <button onClick={() => setURL(data.url)}>
                      {data.name}
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <div className="video-player-details">
        <ReactPlayer
          url={url}
          fullscreen
          width="100%"
          height="115vh"
          playing={isPlaying}
          muted={isMuted}
          pip={false}
          config={{
            youtube: {
              playerVars: { showinfo: 1, disablekb: 1 },
            },
          }}
        />
      </div>

      <div className="video-player-btns">
        <button className="mute-btn" onClick={() => handleOpenModal()}>
          <BsList />
        </button>

        {/* <button className="mute-btn" onClick={() => setMuted(!isMuted)}>
          <GrCaretPrevious />
        </button> */}

        <button className="play-btn" onClick={() => setPlaying(!isPlaying)}>
          {PlayOption}
        </button>

        {/* <button className="mute-btn">
          <GrCaretNext />
        </button> */}

        <button className="mute-btn" onClick={() => setMuted(!isMuted)}>
          {MuteOption}
        </button>

        {/* <button className="mute-btn">
          <BsArrowsFullscreen />
        </button> */}
      </div>
    </div>
  );
}
