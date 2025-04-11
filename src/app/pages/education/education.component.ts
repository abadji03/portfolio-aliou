import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  formations = [
    {
      diplome: 'Formation certifiante en Développement Front-End',
      etablissement: 'FORCE-N, Université Numérique Cheikh Hamidou Kane (UN-CHK)',
      periode: 'Sept. 2023 - Janv. 2024',
      details: 'Spécialisée dans les technologies modernes du web (Angular, Bootstrap, etc.)'
    },
    {
      diplome: 'Master en Informatique, mention Génie Logiciel',
      etablissement: 'Université Assane SECK de Ziguinchor',
      periode: '2017 - 2018',
      mention: 'Bien'
    },
    {
      diplome: 'Licence en Math, Physique, Chimie, Info – spécialité Informatique',
      etablissement: 'Université Assane SECK de Ziguinchor',
      periode: '2014 - 2015',
      mention: 'Assez Bien'
    },
    {
      diplome: 'Baccalauréat série S2 (Sciences Expérimentales)',
      etablissement: 'Lycée Djignabo Bassène de Ziguinchor',
      periode: '2011 - 2012',
      mention: 'Passable'
    }
  ];

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
