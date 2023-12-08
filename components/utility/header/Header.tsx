import './styles.scss';

// Routing
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Mui Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    const headerItems = [
        "/",
        "community",
        "events",
        "rental",
        "merch",
        "blog",
        "profile"
    ];

    let currentPage = useLocation().pathname; // get current path, what page is this?
    if(currentPage != '/') {    // Get the name of the current page so we don't display it
        currentPage = currentPage.substring(currentPage.indexOf('/') + 1);
    }

    const handleLogin = () => {

    }

    return (
        <div className='header'>
            <h1 className='header__title'>Restless Records</h1>

            <ul className='header__menu'>
                {headerItems.map((item, i) => (
                    item == currentPage ? null  // Dont display the current page, we're already on it
                    : item == '/' ? // Ensure the home page is listed as "Home" not, "/"
                        <Link key={i} to={item}  style={{textDecoration: 'none'}}>
                            <li className='header__menu__item'>Home</li>
                        </Link>
                    : item == 'profile' ?
                        <Link key={i} to={item}  style={{textDecoration: 'none'}}>
                            <AccountCircleIcon
                                className='header__menu__item'
                                onClick={() => handleLogin()}
                                sx={{fontSize: '3.5vw', color: 'white', position: 'relative', height: '70px', top: '6px', transition: 'all .5s'}}
                            />
                        </Link>
                    :
                        <Link key={i} to={item}  style={{textDecoration: 'none'}}>
                            <li className='header__menu__item'>{item}</li>
                        </Link>
                ))}
            </ul>

            {/* <Login {...props.loginManager} /> */}
        </div>
    )
}

export default Header;