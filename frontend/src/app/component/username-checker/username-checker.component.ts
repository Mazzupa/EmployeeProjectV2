import {Component, forwardRef, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';
import {extend, keys} from 'lodash';
import {EmployeeService} from '../../service/EmployeeService';

@Component({
  selector: 'app-username-checker',
  templateUrl: './username-checker.component.html',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UsernameCheckerComponent),
      multi: true
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UsernameCheckerComponent),
      multi: true
    }
  ]
})
export class UsernameCheckerComponent implements ControlValueAccessor, Validator {

  value = '';
  userExist;

  @Input()
  currentUser: string;

  constructor(private employeeService: EmployeeService) {
  }

  onChange: any = () => {
  };
  onTouch: any = () => {
  };

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const errors = this.userExist ? extend(control.errors, {userExist: true}) : control.errors;
    return control.valid && !this.userExist ? null : errors;
  }

  checkUserExist() {
    this.value = this.value.trim();

    if (this.value === this.currentUser) {
      this.userExist = false;
    } else {
      if (this.value !== '') {
        this.employeeService.userExist(this.value).subscribe((res) => {
          this.userExist = res;
          this.onChange(this.value);
        });
      } else {
        this.onChange(this.value);
      }
    }
  }
}
