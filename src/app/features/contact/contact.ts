import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { COMPANY_INFO } from '../../core/company-data';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);

  readonly company = COMPANY_INFO;
  isSubmitting = signal(false);
  isSuccess = signal(false);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);

      // Symulacja wysyłania (integracja z API w przyszłości)
      setTimeout(() => {
        console.log('Formularz wysłany:', this.contactForm.value);
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
        this.contactForm.reset();
      }, 1500);
    }
  }
}
