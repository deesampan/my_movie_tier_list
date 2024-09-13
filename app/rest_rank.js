import styles from "./styles/restrank.module.css"
import RestCard from "./rest_card";

const RestRank = ({data}) => {
    const my_data = data.splice(3);
    return(
        <div className={styles.container}>
            {
                my_data.map((t)=>(
                    <RestCard rank={t.rank} movie_url={t.movie_url} movie_name={t.movie_name} movie_des={t.movie_des} key={t._id}/>
                ))
            }
            
            
        </div>
    )
}

export default RestRank;