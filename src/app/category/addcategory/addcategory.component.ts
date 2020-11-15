import { Component, OnInit ,Input} from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  @Input() categ ={ id:null,title:null,author:null}
  constructor(private http:HttpClient,public router:Router) { }


  ngOnInit() {
  }

  
  addbook() {
    this.http.post("http://192.168.1.10:5003/category", JSON.stringify(this.categ), this.httpOptions).subscribe((data: {}) => {
      this.router.navigate(['/livres'])
    })
  }

}
