import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Gym {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  activities: string[];
}

@Component({
  selector: 'app-gym-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gym-card.component.html',
  styleUrl: './gym-card.component.css',
})
export class GymCardComponent {
  @Input() gym!: Gym;
}
