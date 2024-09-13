import Navbar from "./navbar";
import Title from "./title";
import Film_line from "./film_line";
import Blankspace from "./blankspace"
import styles from "./styles/background.module.css"

export default function Home() {
  return (
    <div className={styles.grad}>

      <Title />
      <Navbar highlighted="home"/>

      <Blankspace animated="true" />

      <Film_line title="Movies🎬" linker="/movies"/>
      <Blankspace animated="false" />
      <Film_line title="Series🎬" linker="/series"/>
      <Blankspace animated="false" />
      <Film_line title="Animations🎬" linker="/cartoon"/>
    </div>
  );
}
