import React from 'react';
import Nav from './Nav.js';

class Hero extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div>
                    <h2>Hello, I am</h2>
                    <h1>Dillon Moore</h1>
                    <div>
                        <span>
                            {/* circular logo of his work exp will live here */}
                        </span>
                        <span>
                            {/* circular logo of his work exp will live here */}
                        </span>
                        <span>
                            {/* circular logo of his work exp will live here */}
                        </span>
                    </div>
                    <button> hire me now </button>
                    {/* make sure to add click event to all btns */}
                </div>
                <div>
                    <div>
                        all projects
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="www.google.com">
                                    {/* social icon will live here. max of 5 if he wants to adhere to design */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero