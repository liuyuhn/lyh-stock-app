import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service'

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  changepassForm = this.fb.group({
    name: ['', Validators.required],
    pass: ['', Validators.required],
    newpass: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, public UserService: UserService) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.changepassForm.value);
    console.log('signupForm2222',this.changepassForm.value)
    this.UserService.postChangePass(this.changepassForm.value).subscribe((msg) => {
      console.log('changepass-msg',msg)//msg为后台传来的返回消息
    })
  }

  values = '';
  onKey(value:string ) { // without type info
    this.values = value;
  }
  
  confirmvalues ='';
  onconfirmKey(value:string) { // without type info
    this.confirmvalues = value;
  }

  ngOnInit(): void {
  }

}
