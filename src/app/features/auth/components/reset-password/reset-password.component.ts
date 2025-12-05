import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirm = false;
  submitted = false;
  statusMessage = '';
  errorMessage = '';

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirm(): void {
    this.showConfirm = !this.showConfirm;
  }

  submit(): void {
    this.submitted = true;
    this.statusMessage = '';
    this.errorMessage = '';

    const meetsLength = this.password.trim().length >= 8;
    const matches = this.password === this.confirmPassword;

    if (!meetsLength) {
      this.errorMessage = 'Password must be at least 8 characters long.';
      return;
    }

    if (!matches) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.statusMessage = 'Your password has been reset successfully.';
  }
}
