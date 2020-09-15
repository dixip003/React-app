import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    btnClick () {
        this.props.history.push({pathname: "/", state: {message:" comming from dashboard" }});
    }

    render() {
        return(
            <div>  
                <button onClick={this.btnClick.bind(this)}>back to Home</button>
                Dashboard
            </div>
        )
    }
}

export default withRouter(Dashboard);

