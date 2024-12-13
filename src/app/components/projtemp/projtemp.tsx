import "./projtemp.css";

interface projtempprop{
    pname: string;
    descp: string;
    tech: string;
    link: string;

}

function Projtemp({pname,descp,tech,link} : projtempprop){
    return(
        <div id="main">
            <h2>{pname}</h2>
            <br></br>
            <p>{descp}</p>
            <p><span>Technology used :</span> {tech}</p>
            <a href={link}>Github Link</a>
        </div>
    );
}
export default Projtemp;