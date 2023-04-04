import classes from './Home.module.css'
import headshot from '../../images/headshot.png'
import resume from '../../images/resume.pdf'
import { AiOutlineFilePdf } from "react-icons/ai";

const handleURL = (url) => {
  return () => window.open(url, "_blank");
};

const Home = () => {
  return (
    <div className={classes.Home} id="home">
      <div className={classes.Container}>
        <h1 className={classes.Hello}>Hello World.</h1>
        <img className={classes.Headshot} src={headshot} alt="headshot img"></img>
        <h1>Chris Behrens</h1>
        <h2>Full-Stack Engineer</h2>
        <div className={classes.Resume} onClick={handleURL(resume)}>
          <h5><AiOutlineFilePdf 
              style={{ marginBottom: "-1.5%" }}/>   Full Resume</h5>
        </div>
      </div>
    </div>
  )
};

export default Home;