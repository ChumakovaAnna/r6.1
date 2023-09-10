import React, { Component } from "react";
import dayjs from "dayjs";

export default class Clock extends Component { 
  constructor({item, onClose}) {
    super();
    this.item = item;
    this.onClose = onClose;
    this.state = {
      hours: dayjs().add(item.zone, 'h').hour(),
      minutes: dayjs().minute(),
      seconds: dayjs().second()
    };
    this.interval = null;
    this.time = {}
  }
  
  getTime() {
    const newState = {
      hours: dayjs().add(this.item.zone, 'h').hour(),
      minutes: dayjs().minute(),
      seconds: dayjs().second()
    }

    this.setState(newState);
    console.log(`second ${this.item.zone}`);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <div className="clockContainer">
        <div className="close" onClick={() => this.onClose(this.item.id)}>X</div>
        <div className="clockName">
          {this.item.name}
        </div>
        <div className="clockZone">
          Зона: {this.item.zone}
        </div>
        <div className="clock">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </div>
      </div>
    )
  }
}