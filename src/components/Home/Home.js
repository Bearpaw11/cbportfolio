import classes from './Home.module.css'
import Code from '../../images/code.png'
import world from '../../images/world.png'

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.Container}>
        <h1 className={classes.Hello}>Hello, I'm Chris.</h1>
        <h1>Welcome to my portfolio!</h1>
      </div>
      <img className={classes.World} src={world} alt="head img"></img> 
    </div>
  )
};

export default Home;