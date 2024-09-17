import styles from "./styles/creatorline.module.css"
import MyCard from "./my_card";

const CreatorLine = ({header,type,data}) =>{
    let status = "add"
    if(data.length >= 5){
        status = ""
    }
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>{header}</h1>
            <div className={styles.lister}>
                <div className={styles.border}>
                    

                    {
                        data.map((i)=>(
                            <MyCard status="card" name={i.movie_name} des={i.movie_des} card_id={i._id} url={i.movie_url} movie_type={i.movie_type} type={type}/>
                        ))
                    }
                    
                    <MyCard status={status} type={type} />
                </div>
            </div>
        </div>
    );
}

export default CreatorLine;