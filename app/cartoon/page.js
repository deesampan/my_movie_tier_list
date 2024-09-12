import Navbar from "../navbar";
import Title from "../title";
import Top3 from "../top3"
import RestRank from "../rest_rank";

const cartoon_page = () => {
  return (
    <div>
      <Title />
      <Navbar highlighted="cartoon"/>

      <Top3/>
      <RestRank/>
    </div>
  );
}

export default cartoon_page;
