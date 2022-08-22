import { Component, VERSION } from '@angular/core';
import { UserRepository } from './repository/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: any = null;

  constructor(private userRepository: UserRepository) {}

  ngOnInit() {
    this.fetchUser();
  }

  async changeUser() {
    this.user = null;
    await this.fetchUser();
  }

  private async fetchUser() {
    this.user = await this.userRepository.random();
  }
}
