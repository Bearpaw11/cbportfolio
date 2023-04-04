import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import Chris from './../../images/Chris.png'

const About = () => {
  return (
    <div className={classes.AboutMe} id="about">
      <PageHeader title={'About Me'}/>
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>Hello, I'm Chris</h2>
          <p>
          I am a Full Stack Web Developer who is a critical thinker, team player and someone who loves a challenge. I have a Full Stack Web Development certificate from The University of Arizona and TEKsystems. I have built this portfolio to help showcase my skills which include Java, HTML5, CSS, JavaScript, Bootstrap, React, MySQL, and Snowflake. 
          <br/> 
          <br/>
          I have experience working as a sofware developer at United Health Group where I developed and maintained our BCP mirroring program which mirrors over 50 billion rows of data from our on prem SQL Server to Snowflake. My experience as a Systems Engineer has given me knowledge of the cutting edge hardware and software being used to accelerate growth and new technologies in this space. I also have a strong business background that includes a Bachelor’s degree in Finance that can be used to put a monetary perspective on projects. I am excited to leverage my expertise, education and knowledge to become an asset to a software development team.
          </p>
        </div>
        {/* <div className={classes.Photo}>
          <img className={classes.Me} src={Chris} alt={"Photo of Chris"}></img>
        </div> */}
      </div>
      
    </div>
  )
};

export default About;