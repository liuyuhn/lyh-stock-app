import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  staticAlertClosed = true;
  loginForm = this.fb.group({
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
  });
  constructor(private router: Router,private fb: FormBuilder) { }
  onSubmit() {
    if (this.loginForm.value.userName === 'lyh') {
      this.router.navigate(['admin-home']);
    } else {
      this.router.navigate(['user-home']);
    }
    // TODO: Use EventEmitter with form value
    console.log('logform',this.loginForm.value)
    console.warn(this.loginForm.value);
  }

  changeAlert(){
    this.staticAlertClosed = false
  }

  ngOnInit(): void {
    console.log('logformonnit',this.loginForm.value)
  }

}
