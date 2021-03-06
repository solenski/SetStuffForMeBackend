import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() dataObject;
  @Output() dataObjectChange = new EventEmitter();
  @Input() submitButton = true;
  @Input() cancelButton = true;

  @Output() formsubmit = new EventEmitter();
  @Output() formcancel = new EventEmitter();

  form: FormGroup;
  objectProps;

  constructor() {}
  emitchange() {
    this.dataObjectChange.emit(    this.form.value
    );
  }
  ngOnInit() {
    // remap the API to be suitable for iterating over it
    this.objectProps = Object.keys(this.dataObject).map(prop => {
      return Object.assign({}, { key: prop }, this.dataObject[prop]);
    });

    // setup the form
    const formGroup = {};
    for (const prop of Object.keys(this.dataObject)) {
      formGroup[prop] = new FormControl(
        this.dataObject[prop].value || '',
        this.mapValidators(this.dataObject[prop].validation)
      );
    }

    this.form = new FormGroup(formGroup);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  onSubmit(form) {
    this.formsubmit.emit(form);
  }
}
