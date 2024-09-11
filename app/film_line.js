import styles from "./styles/filmline.module.css"
import Card from "./card";

const Film_line = ({title}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.listfilm}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card seemore="true"/>
        </div>
    </div>
  );
};

export default Film_line;
