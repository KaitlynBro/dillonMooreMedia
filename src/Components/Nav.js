import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav className="col-12">
                    <div className="col-3">
                        dillon moore media
                    </div>
                    <div className="col-3">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <button> listen live </button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav