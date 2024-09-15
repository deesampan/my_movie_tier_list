import styles from "./styles/creatorline.module.css"
import MyCard from "./my_card";

const CreatorLine = ({header}) =>{
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>{header}</h1>
            <div className={styles.lister}>
                <div className={styles.border}>
                    <MyCard status="card" name="Rick And Morty" des="So fun"/>
                    <MyCard status="card" name="Rick And Morty" des="So fun"/>
                    <MyCard status="card" name="Rick And Morty" des="So fun"/>
                    <MyCard status="card" name="Rick And Morty" des="So fun"/>
                    <MyCard status="card" name="Rick And Morty" des="So fun"/>
                    <MyCard status="add" />
                </div>
            </div>
        </div>
    );
}

export default CreatorLine;