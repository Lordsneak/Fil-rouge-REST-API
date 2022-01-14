import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userId!: String;
  user!: User;

  constructor(private route: ActivatedRoute,private router: Router, private userService:UserService) { }

  ngOnInit(): void {

  this.user = new User();
  
  this.userId = this.route.snapshot.params['id'];
  this.userService.getUser(this.userId)
    .subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
}

updateUser() {
  this.userService.updateUser(this.userId, this.userId)
    .subscribe(data => console.log(data), error => console.log(error));
  this.user = new User();
  this.gotoList();
}

onSubmit() {
  this.updateUser();    
}

gotoList() {
  this.router.navigate(['admin/user']);
}

}
