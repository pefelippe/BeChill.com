import { Button } from "@mui/material";
import { useState } from "react";

import { LofiList } from "./Components/Modal";
import VideoPlayer from "./Components/VideoPlayer";

import "./App.css";

function App() {
  const [open, setOpenModal] = useState(false);
  const [url, setURL] = useState("https://www.youtube.com/watch?v=5qap5aO4i9A");

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="App">
      <LofiList
        open={open}
        setURL={setURL}
        handleCloseModal={handleCloseModal}
      />

      <div className="container">
        <div className="video-player">
          <VideoPlayer url={url} />
        </div>

        <footer className="footer">
          <div className="btn-modal">
            <Button onClick={handleOpenModal}>Change Radio</Button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
