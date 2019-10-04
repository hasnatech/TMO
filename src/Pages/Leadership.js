import React, { Component } from 'react';
import { Link } from "react-router-dom";

var items = [];

class LeaderShip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "Leadership 1",
                    image: "",
                    link: "id"
                },
                {
                    name: "Leadership 2",
                    image: "",
                    link: "id"
                },
                {
                    name: "Leadership 3",
                    image: "",
                    link: "id"
                }
            ],
            item: ""
        }
    }
    componentDidMount() {
        //const { topic_no } = this.props.match.params
        //console.log(topic_no, this.state.data[Number(topic_no)].name)
        /*this.setState({
            item: <Link to="/leadership/1"><p>{this.state.data[Number(topic_no)].name}</p></Link>
        })*/
        this.setState({
            item: <Link to="/innerleadership/1"><p>{this.state.data[1].name}</p></Link>
        })
    }

    render() {
        return (
            <div>
                <h2>LeaderShip</h2>
                {this.state.item}
            </div>
        );
    }
}
export default LeaderShip;