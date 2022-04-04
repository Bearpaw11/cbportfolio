import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import Chris from './../../images/Chris.png'

const About = () => {
  return (
    <div className={classes.AboutMe}>
      <PageHeader title={'About Me'}/>
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>Hello, I'm Chris</h2>
          <p>
          I am a Full Stack Web Developer who is a critical thinker, team player and someone who loves a challenge. I have a Full Stack Web Development certificate from The University of Arizona. I enjoy front end programming and have extensive experience using React and continue to learn more and more. I have built this portfolio to help showcase my skills with front end programs such as HTML5, CSS, JavaScript, Bootstrap, React as well as back end programs and frameworks such as Node.js, express, MongoDB and MySQL.
          <br/>
          <br/>
          My experience as a Systems Engineer has given me knowledge of the cutting edge hardware and software being used to accelerate growth and new technologies in this space. I also have a strong business background that includes a Bachelor’s degree in Finance that can be used to put a monetary perspective on projects. I am excited to leverage my expertise, education and knowledge to become an asset to a software development team.
          </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={Chris} alt={"Photo of Chris"}></img>
        </div>
      </div>
      
    </div>
  )
};

export default About;