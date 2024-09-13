import Navbar from "../navbar";
import Title from "../title";
import Top3 from "../top3"
import RestRank from "../rest_rank";
import styles from "../styles/background.module.css"

const series_page = () => {
  return (
    <div className={styles.grad_all}>
      <Title />
      <Navbar highlighted="series"/>

      <Top3/>
      <RestRank/>
    </div>
  );
}

export default series_page;
