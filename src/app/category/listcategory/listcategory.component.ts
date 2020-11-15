import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {

  Listcateg:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://192.168.1.10:5003/category").subscribe(data => {
      this.Listcateg = data;
      }, err => {
    console.log(err);
  });
  }

}
