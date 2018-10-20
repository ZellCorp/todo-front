import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { environment } from './../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { }
  userId: any;
  
  signIn(category: string): void {
    console.log("signin");
    this.AuthService.login(this.userId)
    .subscribe(result => {console.log("is logged : " + result.message);
    this.router.navigateByUrl("items/All");
  });
  }

  ngOnInit() {
    this.userId = {} 
  }

}
