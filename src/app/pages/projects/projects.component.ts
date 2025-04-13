import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { projets } from '../../donnees.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  projets:any;

  ngOnInit(): void {

    this.projets = projets
  }

  getProjectIcon(type: string): string {
    const iconMap: {[key: string]: string} = {
      'publication': 'bi-journal-text',
      'research': 'bi-file-earmark-medical',
      'web': 'bi-globe',
      'mobile': 'bi-phone',
      'desktop': 'bi-pc',
      'academic': 'bi-mortarboard',
      'professional': 'bi-briefcase',
      'open-source': 'bi-github'
    };

    return iconMap[type?.toLowerCase()] || 'bi-journal-code';
  }

  getAuthorsArray(authorsString: string): string[] {
    return authorsString.split(',').map(a => a.trim());
  }
}
