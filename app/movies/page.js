import Navbar from "../navbar";
import Title from "../title";
import Top3 from "../top3"
import RestRank from "../rest_rank";
import styles from "../styles/background.module.css"

const getMovies = async () =>{
  try{
    const res = await fetch(`${process.env.API_URL}/movies`);
    if(!res.ok){
      throw new Error("Failed to fetch topic")
    }
    console.log(res);
    return res.json();
  }catch(error){
    console.log("Error on fetching data: ",error);
  }
}

const movies_page = async () => {

  const {topics} = await getMovies();
  
  return (
    <div className={styles.grad_all}>
      <Title />
      <Navbar highlighted="movie"/>

      <Top3 data={topics}/>
      <RestRank data={topics}/>
    </div>
  );
}

export default movies_page;
