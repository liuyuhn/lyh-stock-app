import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../service/user.service'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    usertype: ['', Validators.required],
  });

  constructor( private route: ActivatedRoute,private fb: FormBuilder, public UserService:UserService) { 
  }
  public isCollapsed = true;
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signupForm.value);
    // console.log(this.signupForm.value);
    this.UserService.postSignUp(this.signupForm.value).subscribe((msg) => {
        console.log(msg)//msg为后台传来的返回消息
  })
}

  ngOnInit(): void {
  }

}
