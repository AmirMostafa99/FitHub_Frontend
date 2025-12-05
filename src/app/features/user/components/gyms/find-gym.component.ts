import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GymFilterComponent } from './gym-filter/gym-filter.component';
import { GymListComponent } from './gym-list/gym-list.component';

@Component({
  selector: 'app-find-gym',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, GymFilterComponent, GymListComponent],
  templateUrl: './find-gym.component.html',
  styleUrl: './find-gym.component.css',
})
export class FindGymComponent {
  searchQuery = '';

  onSearch(): void {
    console.log('Searching for:', this.searchQuery);
    // Implement search logic
  }
}
