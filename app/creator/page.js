import Navbar from "../navbar";
import Title from "../title";
import styles from "../styles/background.module.css"
import CreatorLine from "../creator_line";
import Blankspace from "../blankspace";

const creator_page = async (req,res) => {
  

  return(
    <div className={styles.grad_all}>
      <Title />
      <Navbar highlighted="creator"/>


      <Blankspace animated="justspace"/>
      <CreatorLine header="My Movie🥪"/>
      <CreatorLine header="My Series🍙"/>
      <CreatorLine header="My Cartoon🍟"/>
    </div>
  )
}

export default creator_page;
