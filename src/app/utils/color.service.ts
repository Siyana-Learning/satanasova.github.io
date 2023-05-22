import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  getColor(): string {
    const colors = ['#0E9F6E', '#3F83F8', '#9061F9', '#E74694', '#FACA15'];
    const colorsTailwind = ['green-500', 'blue-500', 'purple-500', 'pink-500', 'yellow-300'];
    const scrollPosition = window.scrollY;
    const colorIndex = Math.floor(scrollPosition / 200) % colors.length

    return colors[colorIndex]
    // return colorsTailwind[colorIndex]

  }
}
