import Navbar from "../navbar";
import Title from "../title";
import styles from "../styles/background.module.css"
import CreatorLine from "../creator_line";
import Blankspace from "../blankspace";

const API_URL = process.env.NEXT_PUBLIC_API_URL

const getMovies = async () =>{
  try{
    const res = await fetch(`${API_URL}/api/my_movie`,{
      cache:"no-store"
    });
    if(!res.ok){
      throw new Error("Failed to fetch movie")
    }
    console.log(res);
    return res.json();
  }catch(error){
    console.log("Error on fetching data: ",error);
  }
}


const creator_page = async (req,res) => {

  const {topics} = await getMovies() || {};
  const movie_data = topics.filter(movie => movie.movie_type === 'Movie');
  const serie_data = topics.filter(movie => movie.movie_type === 'Series');
  const cartoon_data = topics.filter(movie => movie.movie_type === 'Cartoon');

  return(
    <div className={styles.grad_all}>
      <Title />
      <Navbar highlighted="creator"/>


      <Blankspace animated="justspace"/>
      <CreatorLine header="My Movie🥪" type="Movie" data={movie_data}/>
      <CreatorLine header="My Series🍙" type="Series" data={serie_data}/>
      <CreatorLine header="My Cartoon🍟" type="Cartoon" data={cartoon_data}/>
    </div>
  )
}

export default creator_page;