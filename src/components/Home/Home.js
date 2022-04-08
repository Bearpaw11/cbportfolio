import classes from './Home.module.css'
import headshot from '../../images/headshot.png'

const Home = () => {
  return (
    <div className={classes.Home} id="home">
      <div className={classes.Container}>
        <h1 className={classes.Hello}>Hello World.</h1>
        <img className={classes.Headshot} src={headshot} alt="headshot img"></img>
        <h1>Chris Behrens</h1>
        <h2>~Web Developer~</h2>
      </div>
    </div>
  )
};

export default Home;