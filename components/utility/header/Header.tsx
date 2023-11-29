import './styles.scss';

// Routing
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Mui Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    const headerItems = [
        "/",
        "talent",
        "staff",
        "events",
        "rental",
        "merch",
        "blog",
        "profile"
    ];

    const currentPage = useLocation().pathname; // get current path, what page is this?

    const GetStyles = (page: string): string => { // Highlight styling on current page name
        if(currentPage == page) {   // Are we currently on the page being checked?
            return 'rgb(255, 220, 88)'; // Fill in text for visual aid
        }

        return '';  // Otherwise do nothing
    }

    const handleLogin = () => {

    }

    return (
        <div className='header'>
            <h1 className='header__title'>Restless Records</h1>

            <ul className='header__menu'>
                {headerItems.map((item, i) => (
                    item == '/' ? // Ensure the home page is listed as "Home" not, "/"
                        <Link key={i} to={item}  style={{textDecoration: 'none', color: GetStyles('/')}}>
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
                        <Link key={i} to={item}  style={{textDecoration: 'none', color: GetStyles(item)}}>
                            <li className='header__menu__item'>{item}</li>
                        </Link>
                ))}
            </ul>

            {/* <Login {...props.loginManager} /> */}
        </div>
    )
}

export default Header;