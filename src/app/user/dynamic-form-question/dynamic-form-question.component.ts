import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
// import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { QuestionBase }     from 'src/app/class/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  // model: NgbDateStruct;
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}