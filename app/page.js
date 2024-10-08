import Navbar from "./navbar";
import Title from "./title";
import Film_line from "./film_line";
import Blankspace from "./blankspace"
import styles from "./styles/background.module.css"

const API_URL = process.env.NEXT_PUBLIC_API_URL

const getMovies = async () =>{
  try{
    const res = await fetch(`${API_URL}/api/movies`);
    if(!res.ok){
      throw new Error("Failed to fetch movie")
    }
    console.log(res);
    return res.json();
  }catch(error){
    console.log("Error on fetching data: ",error);
  }
}
const getSeries = async () =>{
  try{
    const res = await fetch(`${API_URL}/api/series`);
    if(!res.ok){
      throw new Error("Failed to fetch series")
    }
    console.log(res);
    return res.json();
  }catch(error){
    console.log("Error on fetching data: ",error);
  }
}
const getCartoon = async () =>{
  try{
    const res = await fetch(`${API_URL}/api/cartoons`);
    if(!res.ok){
      throw new Error("Failed to fetch cartoon")
    }
    console.log(res);
    return res.json();
  }catch(error){
    console.log("Error on fetching data: ",error);
  }
}

export default async function Home() {

  const {topics} = await getMovies();
  const {Seriess} = await getSeries();
  const {Cartoons} = await getCartoon();
  
  return (
    <div className={styles.grad_all}>
      
      <Title />
      <Navbar highlighted="home"/>

      <Blankspace animated="balls" />

      <Film_line title="Movies🍎" linker="/movies" data={topics}/>
      <Blankspace animated="false" />
      <Film_line title="Series🍇" linker="/series" data={Seriess}/>
      <Blankspace animated="false" />
      <Film_line title="Cartoons🥦" linker="/cartoon" data={Cartoons}/>


      <Blankspace animated="true" />
    </div>
  );
}
