import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  homeRoot = HomePage;

  constructor(
    public http: Http,
    public navCtrl: NavController) {

  }

  contact = {
    "name": "",
    "phone": "",
    "email": "",
    "title": "",
    "company": "",
    "comments":"",
  }

  emailURL: string;
  submitedForm: boolean = true;

  logForm(){
    console.log(this.contact);
    this.emailURL = "http://innovate.azzida.com/email-form.php";

    let body = this.contact;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    this.http.post(this.emailURL, body, options)
              .subscribe(
                 response => console.log(response)
            );

    this.submitedForm = false;

  }

  backHome(){
    this.navCtrl.push(this.homeRoot);
  }

}



