import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences = [
    {
      poste: 'Développeur Web',
      entreprise: 'Agrosotech Sénégal',
      periode: 'Depuis septembre 2024',
      description: 'Développement d\'outils web pour l\'agriculture intelligente.',
      technologies: ['Angular', 'Node.js', 'Mysql', 'Git','Wordpress']
    },
    {
      poste: 'Tuteur Synchrone/Asynchrone',
      entreprise: 'Université Numérique Cheikh Hamidou Kane (UN-CHK)',
      periode: 'Depuis juin 2024',
      description: 'Encadrement d\'étudiants (Tutorat) à distance dans des modules informatiques.',
      technologies: ['XML', 'JavaScript', 'Base de données']
    },
    {
      poste: 'Stagiaire Assistant en Informatique',
      entreprise: 'Mairie de Ziguinchor',
      periode: 'Août 2024',
      description: 'Assistance informatique et participation à la digitalisation des services.',
      technologies: ['Support technique', 'Réseaux', 'Windows Server', 'Office 365', 'Gestion de parc']
    },
    {
      poste: 'Développeur Android',
      entreprise: 'JCaisse (Startup à Ziguinchor)',
      periode: 'Juin à Septembre 2022',
      description: 'Ajout de modules de gestion de ventes et utilisateurs sur une application de caisse.',
      technologies: ['Kotlin', 'Firebase', 'MVVM', 'Retrofit', 'UI/UX']
    },
    {
      poste: 'Développeur Mobile & Analyste',
      entreprise: 'Projet VIH COVID-19 (Sénégal, Gambie, Guinée-Bissau)',
      periode: 'Mars à Décembre 2021',
      description: 'Conception d\'une plateforme mobile pour le suivi des personnes vivant avec le VIH.',
      technologies: ['Flutter', 'Dart', 'API REST', 'Cryptographie', 'Santé numérique']
    },
    {
      poste: 'Stagiaire Développement Vocal',
      entreprise: 'GAINDÉ 2000',
      periode: 'Juin à Décembre 2018',
      description: 'Développement d\'un module d\'authentification vocale Android.',
      technologies: ['Java', 'Traitement vocal', 'Android SDK', 'Machine Learning', 'Biométrie']
    }
  ];
}
