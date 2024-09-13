import Navbar from "../navbar";
import Title from "../title";
import styles from "../styles/background.module.css"

const creator_page = async (req,res) => {
  

  return(
    <div className={styles.grad_all}>
      <Title />
      <Navbar highlighted="movie"/>
    </div>
  )
}

export default creator_page;
