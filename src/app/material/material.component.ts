import { Component, OnInit, Input } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor() { }

  @Input() materials: any[];
  
  getItemImage(imageName: string): string {
    return environment.ressourcesUrl+imageName;
  }
  
  ngOnInit() {
  }

}
