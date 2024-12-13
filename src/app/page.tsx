import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/Contact/Contact";
export default function Home() {
  return (
    <body className={styles.body}>
      <Navbar />
      <main className={styles.main}>
        <div id={styles.main}>
          <div id={styles.intro}>
            <div id={styles.pic}>
              <img src="profile.png" alt="Profile Picture" />
            </div>
            <div>
              <div id={styles.about}>
                <p>
                Hello! I’m Nagasaketh Chintaluri, a third-year Computer Science and Engineering student at Vellore Institute of Technology. 
                I bring hands-on experience in web and game development, paired with a growing expertise in Artificial Intelligence and Machine Learning. 
                Driven by a passion for creating engaging and intelligent digital solutions, I'm constantly exploring innovative ways to integrate technology and creativity.
                </p>
              </div>
            </div>
          </div>
          <div id={styles.skill}>
            <h2>Skills</h2>
            <br></br>
            <div id={styles.progSkill}>
              <h3>Programming Languages</h3>
              <ul>
                <li>C++</li>
                <li>Pyhton</li>
                <li>C Programming</li>
                <li>Java</li>
                <li>R Programming</li>
                <li>C#</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java Script</li>
              </ul>
            </div>
            <br></br>
            <h3>Frame Works</h3>
            <ul>
              <li>NextJS</li>
              <li>ReactJS</li>
            </ul>
          </div>
        </div>
        <Contact/>
      </main>
    </body>
  );
}
