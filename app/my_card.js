import styles from "./styles/mycard.module.css"
import Link from "next/link";

const MyCard = ({status,name,des}) =>{
    if(status == "card"){
        return(
            
            <div className={styles.card}>
                <h1>1</h1>
                <div className={styles.cardImg}> 
                    <img src="/rick_n_morty.jpg"/>
                </div>
                    <ul className={styles.socialMedia}>
                        <li><img src="/edit-text.png" width={25}/></li>
                        <li><img src="/bin.png" width={25}/></li>
                    </ul>
                <div className={styles.cardInfo}>
                <p className={styles.title}>{name}</p>
                    <p className={styles.subtitle}>{des}</p>
                </div>
            </div>
        );
    }else if(status == "add"){
        return(
            <Link href="/creator/create">
                <div className={styles.card_add}>
                    <h1 className={styles.add_more}>Add More😻</h1>
                    <img src="/add.png" width={35}/>
                </div>
            </Link>
        );
    }
    else{
        return(
             
            <div className={styles.card_add}>
                <h1 className={styles.add_more}>Maximum Data😢</h1>
            </div>
        );
    }
}
export default MyCard;