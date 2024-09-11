import styles from "./styles/card.module.css"
import Image from "next/image";

const Card = ({seemore}) => {
    let texting = "";
    if(seemore=="true"){
        texting = <h1 className={styles.colorr}>See More 🔎</h1>
    }else{
        texting = <h1 className={styles.colorr}>Something Else</h1>
    }
    return (
        <div className={styles.card}>
            {/* {texting} */}
            <Image src="/images/rick_n_morty.jpg" width={500} height={500}/>
        </div>
    );
};

export default Card;