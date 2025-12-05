import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  fullName = '';
  email = '';
  phone = '';
  city = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirm = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirm(): void {
    this.showConfirm = !this.showConfirm;
  }

  submit(): void {
    // TODO: connect to registration API
    console.log('Register', {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      city: this.city,
      passwordSet: !!this.password,
    });
  }
}
