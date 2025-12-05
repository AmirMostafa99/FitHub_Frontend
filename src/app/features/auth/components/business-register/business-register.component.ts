import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-business-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './business-register.component.html',
  styleUrl: './business-register.component.css',
})
export class BusinessRegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  crn = '';
  showPassword = false;
  showConfirm = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirm(): void {
    this.showConfirm = !this.showConfirm;
  }

  submit(): void {
    // TODO: integrate business registration logic
    console.log('Business register', {
      name: this.name,
      email: this.email,
      crn: this.crn,
      hasPassword: !!this.password,
    });
  }
}
