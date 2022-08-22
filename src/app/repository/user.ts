import { Injectable } from '@angular/core';
import instance from '../infrastructure/http-client';

@Injectable()
export class UserRepository {
  async random() {
    const { data } = await instance.get('https://randomuser.me/api/');
    const {
      results: [user],
    } = data;
    console.log(user);
    return user;

    // const { data } = await instance.get('https://randomuser.me/api/');
    // console.log(data.results[0]);
    // return data;
  }
}
