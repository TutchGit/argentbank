
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../app/slices'
import logo from '../assets/argentBankLogo.png'

function Header(props) {

    const userName = useSelector((state) => state.user.firstName)
    const dispatch = useDispatch();

    const signOut = async () => {
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
        await dispatch(logout())
    }

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
                <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            {props.login 
            ?   <div>
                    <a className="main-nav-item" href="./profil">
                        <i className="fa fa-user-circle"></i>
                        {userName}
                    </a>
                    <a className="main-nav-item" onClick={signOut} href="./">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </a>
                </div>
            :   <div>
                    <a className="main-nav-item" href="./login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            }
        </nav>
    )
}

export default Header