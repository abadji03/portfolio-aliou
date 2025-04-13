import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { experiences } from '../../donnees.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {

  experiences:any
  ngOnInit(): void {

    this.experiences = experiences
  }

}
