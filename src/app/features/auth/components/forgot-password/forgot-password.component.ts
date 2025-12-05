import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  email = '';
  submitted = false;
  statusMessage = '';

  submit(): void {
    this.submitted = true;
    const isValidEmail = this.email.trim().length > 3 && this.email.includes('@');

    if (!isValidEmail) {
      this.statusMessage = '';
      return;
    }

    this.statusMessage =
      'A 6-digit OTP has been sent to your email address. Please check your inbox and proceed to the next step.';
  }
}
