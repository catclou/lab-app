import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-standard-button',
  template: `
    <button>
      Click me!
    </button>
  `,
  styles: [`button {
    background-color: #fff;
    border: 2px solid #525151;
    color: #525151;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 5px;
  }
  
  button:hover {
    opacity: 0.8;
        background:#525151;
        color: #fff;
        transition: color 0.2s ease-in-out;
  }`

  ]
})
export class StandardButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
