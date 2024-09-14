import styles from "./styles/card.module.css"
import Image from "next/image";
import Link from "next/link";

const Card = ({link,index,url}) => {
    let texting = "";
    if(link != null){
        texting = <Link href={link} className={styles.cover_link}><h1 className={styles.seemore}>See More 🔎</h1></Link>
    }else{
        texting = <><h1 className={styles.colorr}>{index}</h1>
            <Image className={styles.img_board} src={url} fill sizes="100" alt=""/></>
    }
    return (
        <div className={styles.card}>
            {texting}
        </div>

    ); 
};

export default Card;