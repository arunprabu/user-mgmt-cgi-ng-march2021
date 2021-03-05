import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // create
  createUser(userData: any) {  // 1. get the data from the comp 

    console.log(userData);
    // 2. send the data to the REST API 
    //  2.1 What's the REST API URL?  http://jsonplaceholder.typicode.com/users
    //  2.2 What's the Http Method? POST 
    //  2.3 What's the REST API Client? HttpClient 
    return this.http.post(this.API_URL, userData)
      .pipe(map((res: any) => {  // 3. get the res from REST API 
        console.log(res);
        return res; // 4. send it back to the comp 
      }));
  }

  // list users
  getUsers(): any {  // 1. get the req from the comp 
    console.log('About to Send Req to get all users....');
    // 2. send the req to the rest api 
    // 2.1 What's the API URL? http://jsonplaceholder.typicode.com/users
    // 2.2 What's the Http Method? GET 
    // 2.3 What's the REST API Client? HttpClient
    return this.http.get(this.API_URL)
      .pipe(map ((res: any) => {   // 3. get the res from the rest api 
        console.log(res);
        // enrich 
        // remove, sort, adding, filtering
        return res; // 4. send the res back to the comp
      }));
      
  }

  // fetch user details
  getUserById(userId: string) {
    console.log(userId);

    const USER_DETAILS_API_URL = `${this.API_URL}/${userId}`;
    return this.http.get(USER_DETAILS_API_URL)
      .pipe( map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  // update user
  updateUser(userData: any){
    console.log(userData);

    const UPDATE_USER_API_URL = `${this.API_URL}/${userData.id}`;
    return this.http.put(UPDATE_USER_API_URL, userData)
      .toPromise()
      .then( (res: any) => {
        console.log(res);
        return res;
      })
      .catch( (err: any) => {
        console.log(err);
        return err;
      })
      .finally( () => {
        console.log('It is over');
      });
  }

  // TODO: delete user



}
