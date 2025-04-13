import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { formations } from '../../donnees.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  formations:any;

  ngOnInit(): void {
    this.formations = formations
  }

  getEducationIcon(diplome: string): string {
    const iconMap: {[key: string]: string} = {
      'Licence': 'bi-file-earmark-text',
      'Master': 'bi-file-earmark-break',
      'Doctorat': 'bi-file-earmark-medical',
      'Ingénieur': 'bi-gear-wide-connected',
      'BTS': 'bi-file-earmark-check',
      'Certification': 'bi-award',
      'Diplôme': 'bi-file-earmark-richtext'
    };

    // Trouve l'icône correspondant au niveau de formation
    const matchedKey = Object.keys(iconMap).find(key => diplome.toLowerCase().includes(key.toLowerCase()));

    return matchedKey ? iconMap[matchedKey] : 'bi-book';
  }
}
