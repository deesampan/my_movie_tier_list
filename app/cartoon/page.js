import Navbar from "../navbar";
import Title from "../title";
import Top3 from "../top3"
import RestRank from "../rest_rank";
import styles from "../styles/background.module.css"

const API_URL = process.env.NEXT_PUBLIC_API_URL

const getCartoon = async () =>{
  try{
    const res = await fetch(`${API_URL}/api/cartoons`);
    if(!res.ok){
      // throw new Error("Failed to fetch topic")
      console.log("error on carton so what??")
    }
    console.log(res);
    return res.json();
  }catch(error){
    console.log("Error on fetching data: ",error);
  }
}

const cartoon_page = async () => {

  const {Cartoons} = await getCartoon();

  return (
    <div className={styles.grad_all}>
      <Title />
      <Navbar highlighted="cartoon"/>

      <Top3 data={Cartoons}/>
      <RestRank data={Cartoons}/>
    </div>
  );
}

export default cartoon_page;
