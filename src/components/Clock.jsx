import React from "react";
import { useState } from "react";
import dayjs from "dayjs";

export default function Clock({item, onClose}) {
  console.log(dayjs().hour());
  console.log(dayjs().add(item.zone, 'h').hour())
  console.log(dayjs('HH-MM-SS'));
  const [time, setTime] = useState({
    hours: dayjs().add(item.zone, 'h').hour(),
    minutes: dayjs().minute(),
    seconds: dayjs().second()
  });

  const getTryTime = () => {
    const interval = setInterval(0, 1000);
  }
  getTryTime()

  return(
    <div className="clockContainer">
      <div className="close" onClick={() => onClose(item.id)}>X</div>
      <div className="clockName">
        {item.name}
      </div>
      <div className="clockZone">
        Зона: {item.zone}
      </div>
      <div className="clock">
        {time.hours}:{time.minutes}:{time.seconds}
      </div>
    </div>
  )
}