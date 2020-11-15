import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
listLivres:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://192.168.1.10:8700/books").subscribe(data => {
      this.listLivres = data;
      }, err => {
    console.log(err);
  });
  }

} 
