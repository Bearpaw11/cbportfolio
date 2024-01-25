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
          As a seasoned developer, I bring a unique blend of critical thinking, teamwork, experience working in an agile environment, and a passion for challenges. Armed with a Full Stack Web Development certificate from The University of Arizona and TEKsystems, my skill set encompasses Java, Spring Boot, HTML5, CSS, JavaScript, Bootstrap, React, MySQL, Postgres, and Snowflake.
          <br/> 
          <br/>
          I have experience working as a software developer at Deloitte, contributing to a project for the IRS where I created and maintained API endpoints for seamless communication among microservices. During my tenure at United Health Group, I played a key role in developing and maintaining our BCP mirroring program, responsible for mirroring over 50 billion rows of data from our on-prem SQL Server to Snowflake. Additionally, my role as a Systems Engineer at TD Synnex has equipped me with knowledge of cutting-edge hardware and software, fostering growth and the implementation of new technologies in this space. Complementing my technical expertise is a strong business background, highlighted by a Bachelor’s degree in Finance, which enables me to provide a monetary perspective on projects.
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