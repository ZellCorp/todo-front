import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Categories } from './../categories.enum';
import { environment } from './../../environments/environment';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  items: any[];
  categories: string[] = Object.values(Categories);
  category: Categories= Categories.WARFRAMES;

  getItems(category: string): void {
    this.itemsService.getItemsByCategory(category)
    .subscribe(items => {this.items = items});
  }

  getItemImage(imageName: string): string {
    return environment.ressourcesUrl+imageName;
  }

  ngOnInit() {
    this.route.params.subscribe(params => 
      {
        if(params['id'] != null) {
          this.category = params['id'];
          this.getItems(this.category);
        }
    });
    
  }
}
