import classes from "./Experience.module.css";
import PageHeader from "../PageHeader/PageHeader";
import optum from '../../images/optum.png'
import TD from '../../images/TD.png'

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
          {Apps(optum, optumTitle, optumJobTitle, optumDescription, optumLink)}
          {Apps(TD, TDTitle, TDJobTitle, TDdescription, TDlink)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
