import Navbar from "../navbar";
import Title from "../title";
import styles from "../styles/background.module.css"
import CreatorLine from "../creator_line";
import Blankspace from "../blankspace";

//fix cache : no-store
import MyMovie from "@/models/my_movie";
import {connectMongoDB} from "@/lib/dbConnect";



const API_URL = process.env.NEXT_PUBLIC_API_URL
export const dynamic = 'force-dynamic';
export const revalidate = 0;
const getMovies = async () =>{
  try{
    const res = await fetch(`${API_URL}/api/my_movie`);
    if(!res.ok){
      throw new Error("Faileder to fetch movie")
    }
    console.log(res);
    return res.json();
  }catch(error){
    console.log("Error on fetching data: ",error);
  }
}
const getSeries = async () =>{
  try{
    const res = await fetch(`${API_URL}/api/my_serie`);
    if(!res.ok){
      throw new Error("Failed to fetch movie")
    }
    console.log(res);
    return res.json();
  }catch(error){
    console.log("Error on fetching data: ",error);
  }
}
const getCartoon = async () =>{
  try{
    const res = await fetch(`${API_URL}/api/my_cartoon`);
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

  const {my_movie} = await getMovies() || {};
  const {my_serie} = await getSeries() || {};
  const {my_cartoon} = await getCartoon() || {};

  return(
    <div className={styles.grad_all}>
      <Title />
      <Navbar highlighted="creator"/>


      <Blankspace animated="justspace"/>
      <Blankspace animated="warning"/>
      <CreatorLine header="My Movie🥪" type="Movie" data={my_movie}/>
      <CreatorLine header="My Series🍙" type="Series" data={my_serie}/>
      <CreatorLine header="My Cartoon🍟" type="Cartoon" data={my_cartoon}/>
    </div>
  )
}

export default creator_page;