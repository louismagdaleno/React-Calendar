import React, { Component } from 'react';
import Calendar from './components/Calendar/Calendar';


class App extends Component {
  state = {
      events: [
        {
          day: '21',
          month: 'JAN',
          title: "Martin Luther King Jr's Day Holiday"
          
        },
        {
          day: '24',
          month: 'JAN',
          title: 'Community Advisory Meeting'
          
        },
        {
          day: '25',
          month: 'JAN',
          title: 'Secondary Student Free Day'
          
        },
        {
          day: '11',
          month: 'FEB',
          title: "Lincoln's Day Holiday"
          
        },
        {
          day: '27',
          month: 'MAR',
          title: "A New Holiday"
          
        },
        {
          day: '28',
          month: 'MAR',
          title: 'A New Holiday'
          
        },
        {
          day: '29',
          month: 'MAR',
          title: 'A New Holiday'
          
        },
        {
          day: '30',
          month: 'MAR',
          title: "A New Holiday"
          
        }
       
      ]
    }
  
  render() {
    return (
      <Calendar {...this.state} />
    );
  }
}

export default App;
