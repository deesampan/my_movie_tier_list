import styles from "./styles/music.module.css"

const MusicPlayer = () => {
  return(
    <div className={styles.container}>
        <audio controls loop autoplay className={styles.musicer}>
            <source src="/alwayswithme.mp3" type="audio/ogg" />
        </audio>
    </div>
  )
};

export default MusicPlayer;
