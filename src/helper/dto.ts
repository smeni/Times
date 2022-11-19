export class clock {
  cityId?: cities;
  diff?: number;
  times?: Times;
}

export class Times{
    hour: number = 0;
    minute: number = 0;
    second: number = 0;
}

export enum cities {
  "תל אביב" = 1,
  "לונדון" = 2,
  "ניו יורק" = 3,
  "קטאר" = 4,
}


export class animateAnalogClock{
  hourHandStyle?:any;
  minuteHandStyle?:any;
  secondHandStyle?:any;
}
