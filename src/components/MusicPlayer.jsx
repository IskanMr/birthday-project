import Player from "@madzadev/audio-player";
import "./MusicPlayer.css";

const tracks = [
  {
    url: "https://pointxpal.com/wp-content/uploads/2024/03/Close_To_You.mp3",
    title: "Fujii Kaze - Close to You",
    tags: ["love"],
  },
  {
    url: "https://pointxpal.com/wp-content/uploads/2024/03/Kingston.mp3",
    title: "Faye Webster - Kingstone",
    tags: ["love"],
  },
  {
    url: "https://pointxpal.com/wp-content/uploads/2024/03/Pretty_Girl.mp3",
    title: "Clairo - Pretty Girl",
    tags: ["love"],
  },
];

const colors = {
  tagsBackground: "#3e32e4",
  tagsText: "#3F4254",
  tagsBackgroundHoverActive: "#6e65f1",
  tagsTextHoverActive: "#3F4254",
  searchBackground: "#FED4E7",
  searchText: "#3F4254",
  searchPlaceHolder: "#575a77",
  playerBackground: "#FED4E7",
  titleColor: "#3F4254",
  timeColor: "#3F4254",
  progressSlider: "#3F4254",
  progressUsed: "#3F4254",
  progressLeft: "#151616",
  bufferLoaded: "#1f212b",
  volumeSlider: "#3e32e4",
  volumeUsed: "#3F4254",
  volumeLeft: "#151616",
  playlistBackground: "#FED4E7",
  playlistText: "#575a77",
  playlistBackgroundHoverActive: "#FED4E7",
  playlistTextHoverActive: "#3F4254",
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
        autoPlayNextTrack={true}
      />
    </div>
  );
}
