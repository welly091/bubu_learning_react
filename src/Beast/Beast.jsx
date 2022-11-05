import { Component } from "react";
import {Card, Button} from "react-bootstrap";
import "./Beast.css";

class Beast extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    handleClick = () =>{
        this.setState({count: this.state.count+1});
        this.props.totalCount();
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
                <Button variant="success" onClick={this.handleClick}>Like</Button>
                <div>{this.state.count}</div>
            </Card>
        )
    }
}

export default Beast;