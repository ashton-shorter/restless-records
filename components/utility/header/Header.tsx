import './styles.scss';

// Routing
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { login } from '../../definititon';

// Components
import Login from '../login/Login';

// Mui Icons
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(props: login) {
    const headerItems = [
        "community",
        "events",
        "rental",
        "merch",
        "blog",
    ];

    let currentPage = useLocation().pathname; // get current path, what page is this?
    if(currentPage != '/') {    // Get the name of the current page so we don't display it
        currentPage = currentPage.substring(currentPage.indexOf('/') + 1);
    }
    return (
        <div className='header'>
            <Link to={'/'} style={{color: 'inherit', textDecoration: 'inherit'}}>
                <div className='header__logo__container'>
                    <div className='header__logo'/>
                    <h1 className='header__logo__title'>Restless Records</h1>
                </div>
            </Link>
           

            <ul className='header__menu'>
                {headerItems.map((item, i) => (
                    item == currentPage ? null  // Dont display the current page, we're already on it
                    :
                        <Link key={i} to={item}  style={{textDecoration: 'none'}}>
                            <li className='header__menu__item'>{item}</li>
                        </Link>
                ))}
            </ul>

            <Login {...props} />
        </div>
    )
}

export default Header;