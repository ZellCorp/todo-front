import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor() { }

  @Input() materials: any[];
  serverImageUrl: string ="http://localhost:3000/images/";
  
  getItemImage(imageName: string): string {
    return this.serverImageUrl+imageName;
  }
  
  ngOnInit() {
  }

}
