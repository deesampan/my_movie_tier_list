"use client"

import styles from "./styles/mycard.module.css"
import Link from "next/link";

const MyCard = ({status,name,des,type,url,card_id,movie_type}) =>{
    const API_URL = process.env.NEXT_PUBLIC_API_URL



    async function handleDelete(){
        const comfirm = confirm(`Are You Sure?🤔 To Deleting {${name}}`)
        if(comfirm){
            const res = await fetch(`${API_URL}/api/${movie_type}?id=${card_id}`,{
                method:"DELETE",
            });

            location.href="/creator"
        }
    }
    const data_url = url

    if(status == "card"){
        return(
            
            <div className={styles.card}>
                <h1>1</h1>
                <div className={styles.cardImg}> 
                    <img src={data_url}/>
                </div>
                    <ul className={styles.socialMedia}>
                        <li><Link href={{
                                pathname: '/creator/edit',
                                query:{
                                    movie_type:type,
                                    card_id:card_id
                                }
                            }}><img src="/edit-text.png" width={25}/></Link></li>
                        <li><button onClick={handleDelete}><img src="/bin.png" width={25}/></button></li>
                    </ul>
                <div className={styles.cardInfo}>
                <p className={styles.title}>{name}</p>
                    <p className={styles.subtitle}>{des}</p>
                </div>
            </div>
        );
    }else if(status == "add"){
        return(
            <Link href={{
                pathname: '/creator/create',
                query:{
                    movie_type:type,
                }
            }}>
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
                <h1 className={styles.add_more}>You Reach The Limit Of Data😢</h1>
            </div>
        );
    }
}
export default MyCard;