import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private AuthService: AuthService) { }
  userId: any;
  
  signIn(category: string): void {
    this.AuthService.login(this.userId)
    .subscribe(result => {console.log("is logged : " + result.message)});
  }

  ngOnInit() {
    this.userId = {} 
  }

}
