import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div className="col-12">
                <nav className="col-12 nav-wrapper">
                    <div className="col-2 nav-col">
                        <h2>
                            <a href="index.html">dillon moore</a>
                        </h2>
                    </div>
                    <div className="col-6 nav-col">
                        <ul>
                            <li>
                                <a href="about.com">About</a>
                            </li>
                            <li>
                                <a href="projects.com">Projects</a>
                            </li>
                            <li>
                                <a href="contact.com">Contact</a>
                            </li>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 nav-col">
                        <a href="1015thehawk.ca">Listen Live</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav