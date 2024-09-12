import Navbar from "../navbar";
import Title from "../title";
import Top3 from "../top3"

const movies_page = () => {
  return (
    <div>
      <Title />
      <Navbar highlighted="movie"/>

      <Top3/>
    </div>
  );
}

export default movies_page;
