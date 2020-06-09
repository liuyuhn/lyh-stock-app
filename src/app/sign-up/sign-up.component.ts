import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm = this.fb.group({
    name: ['', Validators.required],
    pass: ['', Validators.required],
    mail: ['', Validators.required],
    tel: ['', Validators.required]
  });

  constructor( private route: ActivatedRoute,private fb: FormBuilder) { 
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signupForm.value);
    // console.log('signupForm2222',this.signupForm.value)
  }
  
  ngOnInit(): void {
  }

}
