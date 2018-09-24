import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Categories } from './../categories.enum';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  constructor(private itemsService: ItemsService) { }
  items: any[];
  categories: string[] = Object.values(Categories);
  category: Categories= Categories.WARFRAMES;

  getItems(category: string): void {
    this.itemsService.getItems(category)
    .subscribe(items => {this.items = items});
  }

  getItemImage(imageName: string): string {
    return environment.ressourcesUrl+imageName;
  }

  ngOnInit() {
    this.getItems(this.category);
  }
}
