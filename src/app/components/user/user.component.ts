import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  address: Address;
  hobbies: string[];
  posts: Posts;

  constructor(private dataService: DataService) {
    console.log('Data service connected...');
    dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit() {
    this.name = 'Aladin';
    this.address = {
      city: 'City',
      state: 'State'
    };
    this.hobbies = ['Riding', 'Listening music', 'Reading'];
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
    return false;
  }

}

interface Address {
  city: string;
  state: string;
}

interface Posts {
  body: string;
  title: string;
  userId: number;
  id: number;
}
