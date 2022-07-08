import meals from '../../image/zomato.jpg';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'
const Header=(props)=>{
    
    return(
        <>
        <header className={classes.header}>
            <h1>Foodastic</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
            {/* <button>Admin</button> */}
            <Link to= '/login' className={classes.btn}>Admin</Link>
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt="Meals" />
        </div>
        
           
        

        </>
    )
}

export default Header;