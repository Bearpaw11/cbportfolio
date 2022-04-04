import classes from './Home.module.css'

import world from '../../images/world.png'

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.Container}>
        <h1 className={classes.Hello}>Hello World.</h1>
        <h1>Welcome to my portfolio!</h1>
      </div>
      <img className={classes.World} src={world} alt="head img"></img> 
    </div>
  )
};

export default Home;