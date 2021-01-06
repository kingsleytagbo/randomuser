import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService';

@Component({
  selector: 'random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  constructor(private userService: UserService) { }
  public users:any;
  public address = '';

  ngOnInit() {
    this.getRandomUser();
  }

  public getRandomUser(){
    this.userService.getRandomUser().subscribe((data: any)=>{
      this.users = (data && data.results)  ? data.results : [];
      this.users.forEach( (user:any) => {
        user.address = this.parseAddress(user.location);
      });
    })  
  }

  parseAddress(location:any){

    if (location) {
      const addresses = [];
      addresses.push(location.street.name + ',');
      addresses.push(location.city);
      addresses.push(location.stat);
      addresses.push(location.postcode);
      addresses.push(location.country);

      this.address = addresses.join(' ');
    }

    return this.address;
  }

}
