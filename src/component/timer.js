import React, {Component} from 'react';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            year: 2019,
            month: 1,
            days: 5,
            hour: 20,
            minute: 59,
            second: 59,
        }
    }

    componentDidMount() {
        let endDate = new Date(this.state.year, this.state.month, this.state.days, this.state.hour, this.state.minute, this.state.second);
        this.interval = setInterval(() => {
            const date = this.DateCalculator(endDate);
            date ? this.setState(date) : this.stop()
        }, 1000)
    }
    componentWillUnmount() {
        this.stop();
    }

    stop() {
        clearInterval(this.interval);
    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }
    DateCalculator(endDate) {
        let diff = (Date.parse(endDate) - Date.parse(new Date())) / 1000;

        // clear countdown when date is reached
        if (diff <= 0) return false;

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
            millisec: 0,
        };

        // calculate time difference between now and expected date
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        return timeLeft;
    }

    render() {
        const countDown = this.state;
        return (
            <div className="Countdown">
            <span className="Countdown-col">
              <span className="Countdown-col-element">
                  <strong>{this.addLeadingZeros(countDown.days)}</strong>
                  <span>{countDown.days === 1 ? ' Day ' : ' Days '}</span>
              </span>
            </span>
    
            <span className="Countdown-col">
              <span className="Countdown-col-element">
                <strong>{this.addLeadingZeros(countDown.hours)}</strong>
                <span> Hours </span>
              </span>
            </span>
    
    
            <span className="Countdown-col">
              <span className="Countdown-col-element">
                <strong>{this.addLeadingZeros(countDown.min)}</strong>
                <span> Min </span>
              </span>
            </span>
    
            <span className="Countdown-col">
              <span className="Countdown-col-element">
                <strong>{this.addLeadingZeros(countDown.sec)}</strong>
                <span> Sec </span>
              </span>
            </span>
          </div>
        );
    }

}

export default Timer;