import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projets = [
    {
      titre: 'Information and Discussion Platform in the Context of Monitoring PLHIV in Border Areas and During COVID-19',
      type: 'research',
      auteurs: 'Badji, A., Dieng, Y., Diop, I.',
      description: 'Plateforme mobile pour le suivi des PVVIH dans les zones transfrontalières en période de COVID-19.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'API REST', 'Santé numérique'],
      date: 'Novembre 2021',
      lien: 'https://doi.org/10.1007/978-3-030-96293-7_11',
      github: 'https://github.com/username/projet-plhiv-mobile'
    },
    {
      titre: 'State-of-the-Art of the Impact of HIV and Its Treatment on the Voice of PLHIV',
      type: 'research',
      auteurs: 'Badji, A., Dieng, Y., Diop, I., Cisse P.A., Diouf B.',
      description: 'Étude des impacts du VIH sur la voix des personnes infectées, avec application en reconnaissance vocale.',
      technologies: ['Python', 'Traitement vocal', 'Machine Learning', 'Analyse statistique'],
      date: 'Mars 2022',
      lien: 'https://doi.org/10.1007/978-981-16-2377-6_15',
      github: null
    },
    {
      titre: 'Automatic Speaker Recognition (ASR) for PLHIV Monitoring',
      type: 'research',
      auteurs: 'Aliou Badji et al.',
      description: 'Utilisation de la reconnaissance vocale dans le suivi des patients VIH dans la zone Gambie-Sénégal-Guinée Bissau.',
      technologies: ['Java', 'Android SDK', 'Traitement du signal', 'Biométrie vocale'],
      date: 'Mai 2021',
      lien: 'https://doi.org/10.1145/3447568.3448544',
      github: 'https://github.com/username/asr-hiv-monitoring'
    },
    {
      titre: 'Application de gestion de caisse JCaisse',
      type: 'mobile',
      auteurs: 'Aliou Badji',
      description: 'Ajout de modules de vente et de gestion de profils utilisateurs sur une application Android existante.',
      technologies: ['Kotlin', 'Android Studio', 'SQLite', 'UI/UX'],
      date: 'Septembre 2022',
      lien: null,
      github: 'https://github.com/username/jcaisse-modules'
    },
    {
      titre: 'Module d\'authentification vocale mobile',
      type: 'mobile',
      auteurs: 'Aliou Badji (GAINDÉ 2000)',
      description: 'Développement d\'un prototype d\'authentification vocale sur Android avec GAINDÉ 2000.',
      technologies: ['Java', 'Traitement vocal', 'Android NDK', 'Algorithmes DSP'],
      date: 'Décembre 2018',
      lien: null,
      github: null
    }
  ];

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
