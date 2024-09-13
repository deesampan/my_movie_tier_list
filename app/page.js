import Navbar from "./navbar";
import Title from "./title";
import Film_line from "./film_line";
import Blankspace from "./blankspace"
import styles from "./styles/background.module.css"

const getMovies = async () =>{
  try{
    const res = await fetch("http://localhost:3000/api/movies");
    if(!res.ok){
      throw new Error("Failed to fetch topic")
    }
    console.log(res);
    return res.json();
  }catch(error){
    console.log("Error on fetching data: ",error);
  }
}
const getSeries = async () =>{
  try{
    const res = await fetch("http://localhost:3000/api/series");
    if(!res.ok){
      throw new Error("Failed to fetch topic")
    }
    console.log(res);
    return res.json();
  }catch(error){
    console.log("Error on fetching data: ",error);
  }
}
const getCartoon = async () =>{
  try{
    const res = await fetch("http://localhost:3000/api/cartoons");
    if(!res.ok){
      throw new Error("Failed to fetch topic")
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
    <div className={styles.grad}>

      <Title />
      <Navbar highlighted="home"/>

      <Blankspace animated="true" />

      <Film_line title="Movies🎬" linker="/movies" data={topics}/>
      <Blankspace animated="false" />
      <Film_line title="Series🎬" linker="/series" data={Seriess}/>
      <Blankspace animated="false" />
      <Film_line title="Animations🎬" linker="/cartoon" data={Cartoons}/>
    </div>
  );
}
