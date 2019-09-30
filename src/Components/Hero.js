import React from 'react';
import SearchIcon from '.././assets/search.svg'

class Hero extends React.Component {
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
                        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                        <img src={SearchIcon} alt="" />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Hero