import classes from "./Projects.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import bottomsup from '../../images/bottomsup.png'
import speech from '../../images/speech.png'
import weather from '../../images/weather.png'

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

const speechTitle= "Speech Therapy"
const speechDescription = "This app allows you to practice your speech using voice-to-text technology. You will receive analysis on filler words you may be saying and the length of your speech."
const speechTechnologies = "Technologies used: React, MySQL/Sequelize, Nodemailer, Express, Node, Bootstrap, HTML, CSS, Sass, WebSpeech API, Passport, Heroku."
const speechLink = <a href="https://speechtherapyapp.herokuapp.com/" target='-blank'>App</a>
const speechGithub =  <a href="https://github.com/Bearpaw11/speech_app/" target="_blank">GitHub Repo</a>

const bottomsupTitle= "Bottoms Up"
const bottomsupDescription = "This is a Full Stack social media app aimed at those who have an interest in consuming adult libations, whether at home or out and about, painting the town red! "
const bottomsupTechnologies = "Technologies used: Node.js, express, bcrypt, Passport, MySQL, sequelize, CSS, Bootstrap, Heroku"
const bottomsupLink = <a href="https://bottoms-up-app.herokuapp.com/" target='-blank'>App</a>
const bottomsupGithub = <a href="https://github.com/zace118/BottomsUp" target="_blank">GitHub Repo</a>

const weatherTitle= "Weather Dashboard"
const weatherDescription = "Enter a city in the search box and the current weather pops up including a 5 day forecast. The five most recent cities are saved in local stoarge and shown on the page."
const weatherTechnologies = "Technologies used: HTML, CSS, JavaScript, jQuery, OpenWeatherMap API and moment.js"
const weatherLink = <a href="https://bearpaw11.github.io/Unit_06_Weather_Dashboard/" target='-blank'> App</a>
const weatherGithub = <a href="https://github.com/Bearpaw11/Unit_06_Weather_Dashboard" target="_blank">GitHub Repo</a>




const Projects = () => {
  return (
    <div className={classes.Projects}>
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
          {Apps(speech, speechTitle, speechDescription, speechTechnologies, speechLink, speechGithub)}
          {Apps(bottomsup, bottomsupTitle, bottomsupDescription, bottomsupTechnologies, bottomsupLink, bottomsupGithub)}
          {Apps(weather, weatherTitle, weatherDescription, weatherTechnologies, weatherLink, weatherGithub)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
