import PageHeader from './../PageHeader/PageHeader'
import classes from './Skills.module.css'
import Languages from './../../images/languages.png'


const backendSkills = 
  <ul>
    <li className={classes.Title}>BACKEND</li>
    <li>Express.js</li>
    <li>Node</li>
    <li>NPM</li>
    <li>MySQL</li>
    <li>MongoDB</li>
    <li>BACKEND</li>
  </ul>

const frontendSkills = 
  <ul>
    <li className={classes.Title}>FRONTEND</li>
    <li>ReactJS</li>
    <li>Redux</li>
    <li>JavaScript</li>
    <li>JSX</li>
    <li>ES6</li>
    <li>jQuery</li>
    <li>CSS</li>
    <li>BootStrap</li>
  </ul>

const otherSkills = 
  <ul>
    <li className={classes.Title}>OTHER</li>
    <li>BIG O</li>
    <li>Data Structures</li>
    <li>Heroku</li>
    <li>Git</li>
    <li>JSON</li>
    <li>Firebase</li>
    <li>Netlify</li>
    <li>TDD</li>
  </ul>

const totalSkills = [frontendSkills, backendSkills, otherSkills]

const Skills = () => {
  return (
    <div className={classes.Skills} id="skills">
      <PageHeader title={'Skills'} />
      <p>Below are some programming languages, toolkits, frameworks and libraries that I have worked with. I am a life long learner so this list will continue to grow!
      </p>
      <img className={classes.Languages} src={Languages} alt="Languages"></img>
      <div className={classes.Container}>
        {totalSkills.map(skills => {
            return (
              <div className={classes.List}>
                {skills}
              </div>
            )
        })}
      </div>
    </div>

  )
};

export default Skills;