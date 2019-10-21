import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="col-12 nav nav-wrapper">
                    <div className="col-lg-2 col-sm-12 nav-col">
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
                    <div className="col-lg-2 nav-col dt-only">
                        <a href="1015thehawk.ca">Listen Live</a>
                    </div>
                </nav>
                <div className="social-wrapper col-12">
                    <div className="left">
                        <p>all projects</p>
                    </div>
                    <div className="right">
                        <a href="https://www.linkedin.com/in/katie-brouwers">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/kaitlynbrouwers">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/kb.development/">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.instagram.com/kb.development/">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header