import Navbar from "../navbar";
import Title from "../title";
import {getMovies} from "../../lib/mongo/movie_data"

async function fetchMovies(){
  const {movies} = await getMovies();
  if(!movies) console.log("failed somehow")

  return movies
}

const creator_page = async (req,res) => {
  // return (
  //   <div>
  //     <Title />
  //     <Navbar highlighted="creator"/>

  //     <h1>this is creator</h1>
  //   </div>
  // );
  const movies = await fetchMovies();

  return(
    <div>
      <ul>
        {movies.map(movie =>(
          <li>{movies.movie_name}</li>
        ))}
      </ul>
    </div>
  )
}

export default creator_page;
