import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css',
})
export class VerifyOtpComponent {
  otp = '';
  submitted = false;
  statusMessage = '';

  submit(): void {
    this.submitted = true;
    const isValidOtp = this.otp.trim().length === 6;

    if (!isValidOtp) {
      this.statusMessage = '';
      return;
    }

    this.statusMessage = 'OTP verified successfully.';
  }

  resend(): void {
    this.statusMessage = 'A new OTP has been sent to your email.';
  }
}
