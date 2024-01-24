import classes from "./Experience.module.css";
import PageHeader from "../PageHeader/PageHeader";
import optum from '../../images/optum.png'
import TD from '../../images/TD.png'
import deloitte from '../../images/Deloitte.png'

const Apps = (thumbnail, title, jobTitle, description, siteLink) => {
  return (
    <div className={classes.AppContainer}>
      <div className={classes.Thumbnail}>
        <img src={thumbnail} alt="thumbnail"></img>
      </div>
      <div className={classes.Text}>
        <p className={classes.Title}>{title}</p>
        <p className={classes.Title}>{jobTitle}</p>
        <p>{description}</p>
        <p>{siteLink}</p>
      </div>
    </div>
  )
}

const DeloitteTitle ="Deloitte"
const DeloitteJobTitle = "Software Engineer"
const DeloitteDescription="Java development using JDK 11 and Spring Boot. Create and maintain API endpoints for seamless communication among microservices. Work in an Agile environment, adapting quickly to changing project requirements for iterative solutions."
const DeloitteLink= <a href="https://www2.deloitte.com/us/en/pages/about-deloitte/articles/technology-consulting-engineering-advantage.html?id=us:2ps:3gl:firmfy24:eng:greendot:110122:em:na:N6RBN2tG:1294776198:656188483654:p:Generic_Engineering-Advantage-Consulting:Generic_EA-Consulting-Tech_Phrase:nb&gad_source=1&gclid=Cj0KCQiAh8OtBhCQARIsAIkWb6_UMgFUyncGzQJ6qo6fRWF-_6ZbY0konad5BvPYoMVd6RFqj_vbueMaAk8EEALw_wcB" target="_blank">Deloitte.com</a>

const optumTitle ="United Heath Group/Optum"
const optumJobTitle = "Full Stack Engineer"
const optumDescription="Responsible for helping our technology teams with their software and database needs. Responsibilities include, creating CI/CD pipelines for our detokenization functions and row access policies, optimizing queries, mirroring data and creating databases and schemas."
const optumLink= <a href="https://Optum.com" target="_blank">Optum.com</a>

const TDTitle= "TechData/TD SYNNEX"
const TDJobTitle = "Systems Engineer"
const TDdescription = "Responsible for providing expertise on next-generation technology products by designing, building, and testing evaluation units to meet customer requirements. Worked with Netapp and Oracle on premise and cloud products."
const TDlink =  <a href="https://www.tdsynnex.com/na/us//" target="_blank">tdsynnex.com</a>




const Projects = () => {
  return (
    <div className={classes.Projects} id="experience">
      <PageHeader title={"Experience"} />
      <div className={classes.Content}>
        <div className={classes.Apps}>
          {Apps(deloitte, DeloitteTitle, DeloitteJobTitle, DeloitteDescription, DeloitteLink)}
          {Apps(optum, optumTitle, optumJobTitle, optumDescription, optumLink)}
          {Apps(TD, TDTitle, TDJobTitle, TDdescription, TDlink)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
