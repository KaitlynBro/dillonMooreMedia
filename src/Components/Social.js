import React from 'react';

class Social extends React.Component {
    render() {
        return (
            <div className="social-wrapper col-12">
                <div className="left">
                    <p>all projects</p>
                </div>
                <div className="right">
                        <a href="https://www.linkedin.com/in/katie-brouwers">
                            <i clasName="fa fa-linkedin-in"></i>
                        </a>
                        <a href="https://twitter.com/kaitlynbrouwers">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/kb.development/">
                            <i className="fa fa-instagram"></i>
                        </a>
                </div>
            </div>
        )
    }
}

export default Social