import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service'


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
  result: any;

  constructor(private router: Router, private fb: FormBuilder, public UserService: UserService) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    // this.UserService.postLogIn(this.loginForm.value).subscribe((data) => {
    //   console.log(data)
    //   this.result = data //result（data）为后台传来的数据类型（usertype）判断
    //   if (this.result === 'lyh') {
    //     this.router.navigate(['admin-home'])
    //   } else {
    //     this.router.navigate(['user-home'])
    //   }
    // })
    if (this.loginForm.value.userName === 'lyh') {
      this.router.navigate(['admin-home'])
    } else {
      this.router.navigate(['user-home'])
    }
  }
    
    

  changeAlert() {
    this.staticAlertClosed = false
  }

  ngOnInit(): void {
    // console.log('logformonnit',this.loginForm.value)
  }

}
