import styles from "./styles/top3.module.css"
import CoverCard from "./cover_card";

const top3 = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.top_card}>
                <h1>👑</h1>
                <CoverCard name="Tenet" index="1"/>
                <h1>👑</h1>
            </div>
            <div className={styles.rest_card}>
                <CoverCard name="Mario" index="2"/>
            </div>
            <div className={styles.rest_card}>
                <CoverCard name="Catch me if you can" index="3"/>
            </div>
        </div>
    )
}

export default top3;