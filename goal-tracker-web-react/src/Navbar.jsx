import './Navbar.css'

export default function Navbar(){
    return (
        <>
        <nav>
        <div className="mainNavigation">
            <div className="logo">Goal tracker</div>
            <div className="signBox">
                <button className="signButton">
                    <a href="">Login/SignUp</a>
                </button>
            </div>
        </div>
        </nav>
        </>
    )
};