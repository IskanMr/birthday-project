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
        autoPlayNextTrack={true}
      />
    </div>
  );
}
