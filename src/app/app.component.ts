import { Component } from '@angular/core';
import { ToastService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  thumbStyle = {
    width: '32px',
    height: '32px'
  };
  value = '';
  user = '';
  passworld = '';
  error = false;
  numberFocus = {
    focus: false
  };
  inputFocus = {
    focus: false,
  };


  titleFocus = {
    focus: false,
  };
  autoFocus = { focus: true, date: new Date() };

  constructor(private _toast: ToastService) { }

  login() {
    this._toast.info('login' + this.user);
  }

  inputErrorClick(e: any) {
    this._toast.info('Please enter 11 digits');
  }

  inputChange(e: string) {
    const value = e.replace(/\s/g, '');
    if (value.length < 11 && value.length > 0) {
      this.error = true;
    } else {
      this.error = false;
    }
    this._toast.info('-->' + e);
    this.user = e;

  }

  clickFocus() {
    this.numberFocus = {
      focus: true,
    };
  }

  clickFocusInput() {
    this.inputFocus = {
      focus: true,
    };
  }

  clickTitle() {
    this.titleFocus = {
      focus: true,
    };
  }
}

