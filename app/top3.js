import styles from "./styles/top3.module.css"
import CoverCard from "./cover_card";

const top3 = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.top_card}>
                <h1>👑</h1>
                <CoverCard name="Tenet" index="1" des="so fun"/>
                <h1>👑</h1>
            </div>
            <div className={styles.rest_card}>
                <CoverCard name="Mario" index="2" des="yummy"/>
            </div>
            <div className={styles.rest_card}>
                <CoverCard name="Catch me if you can" index="3" des="wowww"/>
            </div>
        </div>
    )
}

export default top3;