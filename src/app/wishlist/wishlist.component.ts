import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Categories } from './../categories.enum';
import { environment } from './../../environments/environment';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(
      private itemsService: ItemsService,
      private route: ActivatedRoute,
      private router: Router
 ) { }

  listId: number[];

  ngOnInit() {
    this.itemsService.getItemsByLogin()
    .subscribe(items => console.log(items));
  }

}
