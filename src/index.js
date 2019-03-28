import React, {Component} from 'react';

import './styles.css';
import Hrj from "./react-bootstrap-hrj.pres";

class HumanReadableJson extends Component {
    constructor(props) {
        super(props);

        console.log('HRJ props');
        console.log(props);
    }

    render() {
        return (
            <Hrj
                jsonData={this.props.data}
                customStyles={this.props.customStyles}
            />
        )
    }
}

export default HumanReadableJson;
