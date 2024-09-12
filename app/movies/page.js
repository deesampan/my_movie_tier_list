import Navbar from "../navbar";
import Title from "../title";
import Top3 from "../top3"
import RestRank from "../rest_rank";

const movies_page = () => {
  return (
    <div>
      <Title />
      <Navbar highlighted="movie"/>

      <Top3/>
      <RestRank/>
    </div>
  );
}

export default movies_page;
