import { Component, OnInit ,Input} from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  @Input() book ={ id:null,title:null,author:null}
  constructor(private http:HttpClient,public router:Router) { }


  ngOnInit() {
  }

  
  addbook() {
    this.http.post("http://192.168.1.10:8700/books", JSON.stringify(this.book), this.httpOptions).subscribe((data: {}) => {
      this.router.navigate(['/livres'])
    })
  }

}