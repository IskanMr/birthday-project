import Player from "@madzadev/audio-player";
// import "@madzadev/audio-player/dist/index.css";
import "./MusicPlayer.css";

const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

const colors = {
  tagsBackground: "#3e32e4",
  tagsText: "#F7F7F7",
  tagsBackgroundHoverActive: "#6e65f1",
  tagsTextHoverActive: "#F7F7F7",
  searchBackground: "#08A78B",
  searchText: "#F7F7F7",
  searchPlaceHolder: "#575a77",
  playerBackground: "#08A78B",
  titleColor: "#F7F7F7",
  timeColor: "#F7F7F7",
  progressSlider: "#F7F7F7",
  progressUsed: "#F7F7F7",
  progressLeft: "#151616",
  bufferLoaded: "#1f212b",
  volumeSlider: "#3e32e4",
  volumeUsed: "#F7F7F7",
  volumeLeft: "#151616",
  playlistBackground: "#08A78B",
  playlistText: "#575a77",
  playlistBackgroundHoverActive: "#08A78B",
  playlistTextHoverActive: "#F7F7F7",
};

export function MusicPlayer({ className = "" }) {
  return (
    <div className={`${className} px-4`}>
      <Player
        trackList={tracks}
        customColorScheme={colors}
        includeTags={false}
        includeSearch={false}
        showPlaylist={false}
      />
    </div>
  );
}
