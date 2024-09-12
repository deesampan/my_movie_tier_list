import Navbar from "../navbar";
import Title from "../title";
import Top3 from "../top3"
import RestRank from "../rest_rank";

const series_page = () => {
  return (
    <div>
      <Title />
      <Navbar highlighted="series"/>

      <Top3/>
      <RestRank/>
    </div>
  );
}

export default series_page;
