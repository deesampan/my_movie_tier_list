import styles from "./styles/filmline.module.css"
import Card from "./card";

const Film_line = ({title,linker}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.listfilm}>
            <Card index="1"/>
            <Card index="2"/>
            <Card index="3"/>
            <Card index="4"/>
            <Card index="5"/>
            <Card link={linker}/>
        </div>
    </div>
  );
};

export default Film_line;
