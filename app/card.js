import styles from "./styles/card.module.css"
import Image from "next/image";
import Link from "next/link";

const Card = ({link,index}) => {

    let texting = "";
    if(link != null){
        texting = <Link href={link} className={styles.cover_link}><h1 className={styles.seemore}>See More 🔎</h1></Link>
    }else{
        texting = <div><h1 className={styles.colorr}>{index}</h1>
            <Image className={styles.img_board} src="/rick_n_morty.jpg" fill/></div>
    }
    return (
        <div className={styles.card}>
            {texting}
        </div>

    ); 
};

export default Card;