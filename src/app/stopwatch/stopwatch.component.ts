import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  controlBtnText = 'Start';
  hour = 0;
  minute = 0;
  second = 0;
  milliSecond = 0;
  start = false;
  pause = false;
  intervalId;


  onStart() {
    this.start = true;
    this.controlBtnText = 'Pause';
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 100);
  }

  updateTime() {
    this.milliSecond += 10;

    if (this.milliSecond > 90) {
      this.milliSecond = 0;
      this.second++;
    }
    if (this.second > 59) {
      this.second = 0;
      this.minute++;
    }
    if (this.minute > 59) {
      this.minute = 0;
      this.hour++;
    }
  }

  onPause() {
    this.pause = true;
    this.controlBtnText = 'Resume';
    clearInterval(this.intervalId);
  }

  onResume() {
    this.pause = false;
    this.controlBtnText = 'Pause';
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 100);

  }

  reset() {
    this.controlBtnText = 'Start';
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.milliSecond = 0;
    this.start = false;
    this.pause = false;
    clearInterval(this.intervalId);
  }

  ngOnInit() {

  }
}
