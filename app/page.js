import Navbar from "./navbar";
import Title from "./title";
import Film_line from "./film_line";
import Blankspace from "./blankspace"

export default function Home() {
  return (
    <div>
      <Title />
      <Navbar highlighted="home"/>

      <Blankspace animated="true" />

      <Film_line title="Movies🎬"/>
      <Blankspace animated="false" />
      <Film_line title="Series🎬"/>
      <Blankspace animated="false" />
      <Film_line title="Animations🎬"/>
    </div>
  );
}
