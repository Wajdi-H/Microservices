import { Component, OnInit ,Input} from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  


  public currentCommand:any;
  mode:number=1;

  @Input() commande ={      
    id:null,
    date_commande:null,
    id_client:null,
    etat:null,
    montant:null,
    Details :null,}
  constructor(private http:HttpClient,public router:Router) { }


  ngOnInit() {
  }

  
  addcommande(data:any) {
    this.http.post("http://192.168.1.10:8181/commandes", JSON.stringify(this.commande), this.httpOptions).subscribe((data: {}) => {
      this.currentCommand=data
      this.mode=2; 
    this.router.navigate(['/commande'])
    })
  }

  OnewCommand(){
    this.mode=1;
  }
}
