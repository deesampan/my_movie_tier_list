import Navbar from "../navbar";
import Title from "../title";
import Top3 from "../top3"
import RestRank from "../rest_rank";
import styles from "../styles/background.module.css"
import Series from "@/models/series";

const API_URL = process.env.VERCEL_URL

const getSeries = async () =>{
  try{
    const res = await fetch(`${API_URL}/api/series`);
    if(!res.ok){
      throw new Error("Failed to fetch topic")
    }
    console.log(res);
    return res.json();
  }catch(error){
    console.log("Error on fetching data: ",error);
  }
}

const series_page = async () => {

  const {Seriess} = await getSeries();
  return (
    <div className={styles.grad_all}>
      <Title />
      <Navbar highlighted="series"/>

      <Top3 data={Seriess}/>
      <RestRank data={Seriess}/>
    </div>
  );
}

export default series_page;
