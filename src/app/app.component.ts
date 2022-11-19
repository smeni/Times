import { Component, OnInit } from '@angular/core';
import { animateAnalogClock, cities, clock, Times } from 'src/helper/dto';
import { TimesService } from 'src/services/times.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'times';
  clocks: clock[] = [];
  selectedCity?: string = '0';

  constructor(public timesService: TimesService) {}

  ngOnInit(): void {
    this.getTime();
  }

  getTime() {
    this.timesService.getData().subscribe((data: clock[]) => {
      let date = new Date();
      data.forEach((clock) => {
        clock.times = new Times();

        setInterval(() => {
          date = this.addHours(clock.diff!, new Date());
          clock.times!.hour = date.getHours();
          clock.times!.minute = date.getMinutes();
          clock.times!.second = date.getSeconds();

          this.animateAnalogClock(clock.times!);
        }, 1000);

        this.clocks?.push(clock);
      });
    });
  }

  animateAnalogClock(times: Times): animateAnalogClock {
    let animateAnalogStyle: animateAnalogClock = {};

    animateAnalogStyle.hourHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${
        times.hour * 30 + times.minute * 0.5 + times.second * (0.5 / 60)
      }deg)`,
    };

    animateAnalogStyle.minuteHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${
        times.minute * 6 + times.second * 0.1
      }deg)`,
    };

    animateAnalogStyle.secondHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${times.second * 6}deg)`,
    };

    return animateAnalogStyle;
  }

  addHours(numOfHours: number, date = new Date()) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    return date;
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  getCityName(cityId: number) {
    return cities[cityId];
  }
}
