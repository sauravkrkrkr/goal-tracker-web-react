import "./Footer.css";

export default function footer() {
    return (
        <>
            <div className="footer-container">
                <div className="team-members">
                    <h1>Our team members</h1>
                    <h3 className="project-lead">Project lead - Yogesh Karan <a href="">LinkedIn</a></h3>
                    <h4 className="project-contributor">Web Development - Saurav Kumar <a href="">LinkedIn</a></h4>
                    <h4 className="project-contributor">Android Development - Vivek Kumar <a href="">LinkedIn</a></h4>
                    <h4 className="project-contributor">Backend Development - Aman Gupta <a href="">LinkedIn</a></h4>
                </div>
                <div className="qrcode">
                    <div className="qrimage">Space for image</div>
                    <h2 className="app-disclaimer">Scan to download our Android Application</h2>
                </div>
            </div>
        </>
    )
};