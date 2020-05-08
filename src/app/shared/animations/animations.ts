import { style, animate, transition } from '@angular/animations';

export function fadeIn(){
    return [
        transition(':enter', [
            style({opacity: 0}),
            animate('400ms ease-in', style({opacity: 1}))
          ])
      ];
}

export function fadeOut() {
    return [
        transition(':leave', [
            style({opacity: 1}),
            animate('400ms ease-in', style({opacity: 0}))
          ])
      ];
}

export function simpleFade() {
    return [
        // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in', style({opacity: 1}))
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', [
        style({opacity: 1}),
        animate('400ms ease-in', style({opacity: 0}))
      ]),
    ]
    
}