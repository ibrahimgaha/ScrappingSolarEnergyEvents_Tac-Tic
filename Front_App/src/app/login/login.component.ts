import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  cnx_form : FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private _snackBar: MatSnackBar){

  }

  ngOnInit(): void {
 /* this.insc_form=this.fb.group({
    N_Nom_user:[''],
    N_Email_user:[''],
    N_Mdp_user:['']
    },*/
    this.cnx_form=this.fb.group({
      Email_user:[''],
      Mdp_user:['']
    })
  }
onLogin()
{
  let user=this.cnx_form.get("Email_user").value
  let email=this.cnx_form.get("Mdp_user").value  
  if((user=="admin")&&(email=="admin")){
    this.router.navigate(['acceuil'])
  }
  else this._snackBar.open("Login incorrect","",{
    horizontalPosition:"center",
    verticalPosition:"bottom",
  })
}  
  
}
