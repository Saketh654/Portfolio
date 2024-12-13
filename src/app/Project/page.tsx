import styles from "../page.module.css";
import Navbar from "../components/navbar/navbar";
import Projtemp from "../components/projtemp/projtemp";

export default function Project() {
  return (
    <body>
        <Navbar/>
      <main className={styles.main}>
        <Projtemp
        pname={"RandB Cube"}
        descp={"A simple First Person Shooter game developed to understand the basics of game development."}
        tech={"Unity and C#"}
        link={"https://github.com/Saketh654/RandBcube"}
        />
      </main>
    </body>
  );
}