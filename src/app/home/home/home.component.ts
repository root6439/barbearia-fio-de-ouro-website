import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  formContactUs: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formContactUs = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  submitForm(): void {}

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
