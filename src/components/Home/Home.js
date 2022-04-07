import classes from './Home.module.css'
import code from '../../images/code.png'
import world from '../../images/world.png'

const Home = () => {
  return (
    <div className={classes.Home} id="home">
      <div className={classes.Container}>
        <h1 className={classes.Hello}>Hello World.</h1>
        <h1>Welcome to my portfolio!</h1>
      </div>
      <img className={classes.World} src={world} alt="world img"></img> 
      <img className={classes.code} src={code} alt="code img"></img>
    </div>
  )
};

export default Home;