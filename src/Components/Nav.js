import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div className="col-12">
                <nav className="col-12 nav-wrapper">
                    <div className="col-2 nav-col">
                        <h2>dillon moore
                            <span></span>
                        </h2>
                    </div>
                    <div className="col-6 nav-col">
                        <ul>
                            <li>
                                <a href="www.google.com">Home</a>
                            </li>
                            <li>
                                <a href="www.google.com">About</a>
                            </li>
                            <li>
                                <a href="www.google.com">Projects</a>
                            </li>
                            <li>
                                <a href="www.google.com">Contact</a>
                            </li>
                            <li>
                                <a href="www.google.com">Home</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 nav-col">
                        <button> listen live </button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav