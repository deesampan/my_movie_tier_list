import styles from "./styles/filmline.module.css"
import Card from "./card";

const Film_line = ({title,linker,data}) => {



  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.listfilm}>
            {
              data.slice(0,5).map((t)=>(
                <Card index={t.rank} url={t.movie_url} key={t._id}/>
              ))
            }
            <Card link={linker}/>
        </div>
        
    </div>
  );
};

export default Film_line;
