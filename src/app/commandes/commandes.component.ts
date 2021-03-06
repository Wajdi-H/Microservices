import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
  
})
export class CommandesComponent implements OnInit {

  listCommandes : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://172.18.0.1:8181/commandes").subscribe(data => {
      this.listCommandes = data; 
  }, err => {
    console.log(err);
  });

  
  }

}
