import {Component, forwardRef} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';

@Component({
  selector: 'app-password-checker',
  templateUrl: 'password-checker.component.html',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordCheckerComponent),
      multi: true
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordCheckerComponent),
      multi: true
    }
  ]
})
export class PasswordCheckerComponent implements ControlValueAccessor, Validator {

  value = '';
  password;
  confirmPassword;

  constructor() {
  }

  onChange: any = () => {
  };
  onTouch: any = () => {
  };

  writeValue(value: any) {
    this.value = value;
    this.password = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('PW_Validate', this.password === this.confirmPassword);
    return this.password === this.confirmPassword ? null : {
      confirmPassword: true
    };
  }

  onChangePW() {
    this.value = this.password === this.confirmPassword ? this.password : '';
    console.log(this.value);
    this.onChange(this.value);
  }
}
