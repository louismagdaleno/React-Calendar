import React, { Component } from 'react';
import './Calendar.css';
import CalendarItems from '../CalendarItems/CalendarItems';

class Calendar  extends Component {
    constructor(props){
        super(props);
        this.state = {
            left: 0,
            right: 3,
            items: []
    
        }
      }
   
    
      componentDidMount(){
        this.setState({
            items: this.props.events.filter((element, index) => (index >= this.state.left && index <= this.state.right))
        })}
      

    leftClick = () => {
        if (this.state.left - 4 >= 0) {
            this.setState(prevState => ({
                left : prevState.left - 4,
                right : prevState.right - 4,
                items: this.props.events.filter((element, index) => (index >= prevState.left - 4 && index <= prevState.right - 4))
                 
              }))
        }
       }
      
    
      rightClick = () => {
        if (this.state.right + 4 <=  this.props.events.length -1) {
          this.setState(prevState => ({
            left : prevState.left + 4,
            right : prevState.right + 4,
            items: this.props.events.filter((element, index) => (index >= prevState.left + 4 && index <= prevState.right + 4))
             
          }))}}

    render(){
        return (
            <div className="calendar">
                <header>
                    <h2>Upcoming Events</h2>
                </header>
                <CalendarItems events={this.state.items} left={this.state.left ? this.state.left : null} right={this.state.right ? this.state.right : null} />
                <div className="left-button" onClick={this.leftClick}>{"<"}</div>
                <div className="right-button" onClick={this.rightClick}>{">"}</div>
                <footer>
                    <a href="#"><h3>SHOW ALL EVENTS</h3></a>
                </footer>
            </div>
        );
    }
    
}

export default Calendar;