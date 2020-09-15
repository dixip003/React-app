import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {this.props.location.state !== undefined &&
                    <p>{this.props.location.state.message}</p>
                }
                <div className="container">
                    <div className="row">
                        <div className="col-6">bbb</div>
                        <div className="col-6">abc</div>
                    </div>
                </div></div>
        )
    }
}

export default withRouter(Home)

