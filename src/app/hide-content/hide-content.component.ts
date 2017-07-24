import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hide-content',
  templateUrl: './hide-content.component.html',
  styleUrls: ['./hide-content.component.scss']
})
export class HideContentComponent implements OnInit {

  @Input() position: string;
  @Input() size: number;

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
