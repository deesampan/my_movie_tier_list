import styles from "./styles/music.module.css"

const MusicPlayer = () => {
  return(
    <div className={styles.container}>
        <audio controls loop autoPlay className={styles.musicer}>
            <source src="/alwayswithme.mp3" type="audio/ogg" />
        </audio>
    </div>
  )
};

export default MusicPlayer;
