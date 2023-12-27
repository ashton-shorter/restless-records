import './styles.scss';
import { useEffect } from 'react';
// Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth"; //getAuth
import { doc, setDoc} from "firebase/firestore"; //, Firestore, getFirestore 
import { db, auth } from '../../../firebase';

// Routing
import { Link } from 'react-router-dom';

// Types
import { login } from './definition';
import { businessInfo, businessType, data, mediaInfo, monthlyData, profile, socialMedia } from '../../definititon';

// Mui Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Login(props: login) {
    const info = props.info;
    const profile = info.business.profile
    //#region Account handling
    const date = new Date();
    const year = date.getUTCFullYear();

    const userCount = props.getUserCount().toString();

    const addUser = async (email: string, name: string) => {
        console.log("Adding user to DB");
        // Initialize new business with email & name. We will redirect to profile settings to upload media afterwards
        const newBusiness = {
            id: userCount,
            profile: {
                name: name,
                email: email,
                media: [
                {
                    index: 0,
                    dateCreated: date,
                    type: 'song',
                    url: 'https://soundcloud.com/carwozab/boots-the-cat-vol-2',
                    isPlaying: false,
                    likes: {
                        total: 0,
                        history: [{
                            year: year,
                            monthlyData: {} as monthlyData
                        }]
                    } as data
                }] as mediaInfo[],
                socialMedia: [
                    {
                      type: 'facebook',
                      url: ''
                    }, {
                        type: 'instagram',
                        url: ''
                    }, {
                        type: 'twitter',
                        url: ''
                    }, {
                        type: 'soundcloud',
                        url: ''
                    }, {
                        type: 'website',
                        url: ''
                    }, {
                        type: 'youtube',
                        url: ''
                    }, 
                ] as socialMedia[]
            } as profile,
            views: {
                total: 0,
                history: [{
                    year: year,
                    monthlyData: {} as monthlyData
                }]
            } as data,    // Type Data to provide analytics
            types: [] as businessType[],
            eventsWorked: 0,
            upcomingEvents: [] as string[],
        } as businessInfo;

        try {
            const docRef = await setDoc(doc(db, "businesses", `${userCount}`), {
                ...newBusiness
            });
            console.log("Document written: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const createUser = (email: string, password: string, name: string) => {
        console.log("Creating User...");
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            // sendVerificationEmail(email);
            addUser(email, name);   // Initialize user with an unverified boolean
            signIn(email, password);    // ! Not required once verification process is in place
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({errorCode});
            console.log({errorMessage});
        });
    }

    /*
        Will have to do this once you update the site. Domain is required
    */
    // const sendVerificationEmail = (email: string) => {
    //     const actionCodeSettings = {
    //         // URL you want to redirect back to. The domain (www.example.com) for this
    //         // URL must be in the authorized domains list in the Firebase Console.
    //         url: 'https://localhost',
    //         // This must be true.
    //         handleCodeInApp: true,
    //         iOS: {
    //           bundleId: 'com.example.ios'
    //         },
    //         android: {
    //           packageName: 'com.example.android',
    //           installApp: true,
    //           minimumVersion: '12'
    //         },
    //     };
    //     sendSignInLinkToEmail(auth, email, actionCodeSettings)
    //     .then(() => {
    //         // The link was successfully sent. Inform the user.
    //         // Save the email locally so you don't need to ask the user for it again
    //         // if they open the link on the same device.
    //         window.prompt("Please verify your email");
    //         window.localStorage.setItem('emailForSignIn', email);
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log({errorCode});
    //         console.log({errorMessage});
    //         // ...
    //     });
    // }

    const signIn = (email: string, password: string) => {
        console.log("Signing in...");
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            props.setIsLoggedIn(true, email);
            return;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({errorCode});
            console.log(errorMessage);
        });
    }

    const resetPass = async (email: string) => {
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password Reset Link Sent!");
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    }

    const handleResetPass = (e: any) => {
        e.preventDefault();
        const email = e.target.parentNode.children[0].value;
        if(email == '') {
            window.alert("Please fill out the email field");
            return;
        }
        resetPass(email);
    }

    const logout = () => {
        signOut(auth);
    };

    const handleLogout = () => {
        logout();
        props.setIsLoggedIn(false, '');
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        // Handle creating a user
        if(info.signUp) {
            const confirmPass = e.target[2].value;
            const businessName = e.target[3].value;
            if(password === confirmPass) {
                console.log("Attempting User Creation");
                createUser(email, password, businessName);
                return;
            }
            alert("Passwords do not match!");
            return;
        }
        
        console.log("Attempting Sign in");
        signIn(email, password); // otherwise just sign in
    }

    // useEffect(() => {
    //     if (isSignInWithEmailLink(auth, window.location.href)) {
    //         let email = window.localStorage.getItem('emailForSignIn');
    //         if (!email) {
    //           // User opened the link on a different device. To prevent session fixation
    //           // attacks, ask the user to provide the associated email again.
    //           email = window.prompt('Please provide your email for confirmation');
    //         }
    //         // The client SDK will parse the code from the link for you.
    //         if(!email) {
    //             email = '';
    //         }

    //         signInWithEmailLink(auth, email, window.location.href)
    //           .then((result) => {
    //             // Clear email from storage.
    //             window.localStorage.removeItem('emailForSignIn');
    //             if(!email) {
    //                 email = '';
    //             }
    //             props.setIsLoggedIn(true, email);
    //             console.log(result.user);
    //           })
    //           .catch((error) => {
    //             console.log({error})
    //           });
    //     }
    // }, [])
    //#endregion Account handling
    return (
        <>
            <AccountCircleIcon
                id='login'
                className='header__menu__item'
                onClick={() => props.toggleDisplay()}
                sx={{fontSize: '3.5vw', color: 'white', position: 'absolute', height: '70px', top: '13px', right: '25px', transition: 'all .5s'}}
            />
            {
                info.display ?
                    <div> 
                        {!info.isLoggedIn ?
                            <form className='login' onSubmit={(e) => handleSubmit(e)}>
                                <input required type="email" placeholder='EMAIL' className='login__input'/>
                                <input required type="password" placeholder='PASSWORD' className='login__input'/>
                                {
                                    info.signUp ?
                                        <>
                                            <input required type="password" placeholder='CONFIRM PASSWORD' className='login__input'/>
                                            <input required type="text" placeholder='BUSINESS NAME' className='login__input'/>
                                            <button type='submit' className='login__btn'>Sign Up</button>
                                            <button className='login__btnInvert' onClick={() => props.toggleSignUp()}>Cancel</button>
                                        </>
                                    :
                                        <>
                                            <p id='forgotPass' className='login__btnInvert' onClick={(e) => handleResetPass(e)}>FORGOT PASSWORD?</p>
                                            <button type='submit' className='login__btn'>Login</button>
                                            <button className='login__btnInvert' onClick={() => props.toggleSignUp()}>Sign Up</button>
                                        </> 
                                }
                            </form>
                        :
                            <div className='login__menu__container'>
                                <ul id='loggedIn__menu' className='login' style={{animation: '1s SlideDownSmall ease-in-out forwards'}}>
                                    <li>
                                        <h1 className='login__menu__name'>{profile.name}</h1>
                                    </li>
                                    <li>
                                        <Link to={'profile'} style={{textDecoration: 'none'}}>
                                            <button className='login__btnInvert'>Settings</button>
                                        </Link>
                                    </li>
                                    <li>
                                        <button className='login__btnInvert' onClick={() => handleLogout()}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
            : null}
        </>
    )
}

export default Login;