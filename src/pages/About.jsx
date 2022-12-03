const About = () => {
    return (
        <div className="about text-center">
            <div>
                <h1>About</h1>
                <p>This a application to search GitHub Users</p>
            </div>
            <div>
                <h5 className="mt-5 mb-4">How to use?</h5>
                <p>Go to Search &gt; Enter GitHub <i>username</i> &gt; press Enter </p>
                <p>You can view Individual profile for a users' detailed information</p>
            </div>
            <div>
                <h5 className="mt-5 mb-4">Development</h5>
                <p>This application is developed using ReactJS 💚, Bootstrap, SASS 💜, GitHub API. The list of packages include react-router-dom, react-icons. </p>
            </div>
        </div>
    )
}

export default About;
