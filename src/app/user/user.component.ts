import { Component, OnInit } from '@angular/core';
// import { QuestionService } from 'src/app/service/question.service';
// import { QuestionBase }    from 'src/app/class/question-base';
// import { Observable }      from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  // providers:  [QuestionService]
})
export class UserComponent{

  // questions$: Observable<QuestionBase<any>[]>;

  // constructor(service: QuestionService) {
  //   this.questions$ = service.getQuestions();
  // }

  ngOnInit(): void {
  }

}
