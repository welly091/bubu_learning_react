import { Component } from "react";
import {Card} from "react-bootstrap";
import "./Beast.css";

class Beast extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    render(){
        return(
            <Card className='beastCard p-3'>
                <Card.Img src={this.props.item.image_url}></Card.Img>
                <Card.Title>{this.props.item.title}</Card.Title>
                <Card.Text>
                    <div>{this.props.item.description}</div>
                    <div>Number of horns: {this.props.item.horns}</div>
                </Card.Text>
                <button onClick={() => this.setState({count: this.state.count+1}) }>Like</button>
                <div>{this.state.count}</div>
                
            </Card>
        )
    }
}

export default Beast;