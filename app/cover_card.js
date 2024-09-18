import styles from "./styles/covercard.module.css";
import Image from "next/image";

const CoverCard = ({name,index,des,url}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.back}>
          <div className={styles.backContent}>
            {/* back content here */}
            <h1 className={styles.indexText}>#{index}</h1>
            <Image className={styles.imageCover} src={url} width={255} height={290} alt="" style={{
          objectFit: 'cover',
        }}/>
          </div>
        </div>

        
        <div className={styles.front}>
          <div className={styles.img}>
            <div className={styles.circle}></div>
            <div className={styles.circle} id={styles.right}></div>
            <div className={styles.circle} id={styles.bottom}></div>
          </div>

          <div className={styles.frontContent}>
            {/* front content here */}
            <h1 className={styles.movie_name}>{name}</h1>
            <h2 className={styles.movie_des}>&quot;{des}&quot;</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoverCard;
