import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  getColor(): string {
    // return '#f0f'
    // 1 2 3 4 5 6 7 8 9 10
    // 1 2 0 1 2 0 1 2 0

    // '# 0-255 0-255 0-255'
    // '# '
    // 123456789abcdef
    // 00 -> 00 -> min
    // ff -> 256 -> max

    // #99 99 99
    // #50 50 99
    // #5 5 5

    const colorValue = window.scrollY % 255;
    console.log(colorValue);
    // 0 - 255
    // #000000 - #FFFFFF
    // rgb(0-255, 0-255, 0-255)
    return `rgb(${colorValue}, ${255 - colorValue}, ${colorValue})`

  }
}
