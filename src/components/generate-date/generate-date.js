import React, { Component } from "react";

class GenerateDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()})
  }

  render () {
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    
    let today = this.state.date;

    let hours = today.getHours().toString().length < 2 ? `0${today.getHours()}`: today.getHours();
    let minutes = today.getMinutes().toString().length < 2 ? `0${today.getMinutes()}`: today.getMinutes();
    let seconds = today.getSeconds().toString().length < 2 ? `0${today.getSeconds()}`: today.getSeconds();
    return <p>{`${week[today.getDay()]} ${today.getDate()} ${months[today.getMonth()]} ${hours}:${minutes}:${seconds}`}</p>
  }
}

export default GenerateDate;