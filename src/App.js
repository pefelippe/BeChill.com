import VideoPlayer from "./Components/VideoPlayer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <aside className="lateral">
        <span className="logo">Be Chill</span>

        <menu className="radio-options">
          <ul>
            <li>ablbalbla</li>
            <li>ablbalbla</li>
            <li>ablbalbla</li>
          </ul>
        </menu>
      </aside>

      <div className="video-player">
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
