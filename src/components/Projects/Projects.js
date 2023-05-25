import classes from "./Projects.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import speech from '../../images/speech.png'
import fallingStars from '../../images/fallingstars.png'
import trackThat from '../../images/trackthat.png'

const Apps = (thumbnail,title, description, technologies, appLink, gitHub) => {
  return (
    <div className={classes.AppContainer}>
      <div className={classes.Thumbnail}>
        <img src={thumbnail} alt="thumbnail"></img>
      </div>
      <div className={classes.Text}>
        <p className={classes.Title}>{title}</p>
        <p>{description}</p>
        <p>{technologies}</p>
        <p>{appLink}</p>
        <p>{gitHub}</p>
      </div>
    </div>
  )
}



const TrackThatTitle ="Track That Track"
const TrackThatDescription="Track That Track is a vinyl record management system. A user may sign up, signin and create a visual representation of all the records they own or want to add to their wish list."
const TrackThatTechnologies="Technologies used: Java, Springboot, MySQL, clearDB MYSQL, Heroku, JavaScript, JSP"
const TrackThatLink= <a href="https://trackthattrackapp.herokuapp.com/" target='-blank'>App</a>
const TrackThatGithub= <a href="https://github.com/Bearpaw11/TrackThat" target="_blank">GitHub Repo</a>


const fallingStarsTitle ="Falling Stars Design"
const fallingStarsDescription="The is website that I was contracted to build for a local residential design company. This site is used to market her company and display projects that she has completed."
const fallingStarsTechnologies="Technologies used: React, React-Router, CSS, Bootstrap, Netlify, GoDaddy for hosting"
const fallingStarsLink= <a href="https://fallingstarsdesign.com/" target='-blank'>App</a>
const fallingStarsGithub= <a href="https://github.com/Bearpaw11/falling_stars" target="_blank">GitHub Repo</a>

const speechTitle= "Speech Therapy"
const speechDescription = "This app allows you to practice your speech using voice-to-text technology. You will receive analysis on filler words you may be saying and the length of your speech."
const speechTechnologies = "Technologies used: React, MySQL/Sequelize, Nodemailer, Express, Node, Bootstrap, HTML, CSS, Sass, WebSpeech API, Passport, Heroku."
const speechLink = <a href="https://speechtherapyapp.herokuapp.com/" target='-blank'>App</a>
const speechGithub =  <a href="https://github.com/Bearpaw11/speech_app/" target="_blank">GitHub Repo</a>


const Projects = () => {
  return (
    <div className={classes.Projects} id="projects">
      <PageHeader title={"Projects"} />
      <div className={classes.Content}>
        <div className={classes.Paragraph}>
          <p>
            Here are a few projects that I have worked on. These demonstrate
            some of my frontend and backend skills. Each one will provide a
            short description of the app, some of the technologies used, the
            link to the app and the Github repository if you want to check out
            the code.
          </p>
        </div>
        <div className={classes.Apps}>
          {Apps(trackThat, TrackThatTitle, TrackThatDescription, TrackThatTechnologies, TrackThatLink, TrackThatGithub)}
          {Apps(fallingStars, fallingStarsTitle, fallingStarsDescription, fallingStarsTechnologies, fallingStarsLink, fallingStarsGithub)}
          {Apps(speech, speechTitle, speechDescription, speechTechnologies, speechLink, speechGithub)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
