import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = [
    {
      title: 'Langages de programmation',
      items: ['Python', 'Java', 'JavaScript', 'PHP', 'SQL']
    },
    {
      title: 'Technologies Web & Mobile',
      items: ['HTML5', 'CSS3', 'Bootstrap', 'Angular', 'Node.js', 'Android']
    },
    {
      title: 'Base de données',
      items: ['MySQL', 'Access']
    },
    {
      title: 'Outils & autres',
      items: ['Figma', 'WordPress', 'Suite Office (Word, Excel, PowerPoint)']
    },
    {
      title: 'Méthodes et modélisation',
      items: ['UML', 'Merise']
    },
    {
      title: 'Autres compétences',
      items: ['Machine Learning', 'Documentation', 'Recherche']
    }
  ];

  getSkillIcon(title: string): string {
    const normalizedTitle = title.toLowerCase().trim();

    const iconMappings = [
        // Développement
        { match: ['frontend', 'front-end', 'web'], icon: 'bi-code-square' },
        { match: ['backend', 'back-end', 'api'], icon: 'bi-server' },
        { match: ['fullstack', 'full-stack'], icon: 'bi-layers' },

        // Bases de données
        { match: ['base de données', 'bdd', 'database'], icon: 'bi-database' },
        { match: ['sql'], icon: 'bi-database-check' },
        { match: ['nosql'], icon: 'bi-database-exclamation' },

        // Mobile
        { match: ['mobile', 'android', 'ios'], icon: 'bi-phone' },
        { match: ['hybride', 'cross-platform'], icon: 'bi-phone-flip' },

        // Modélisation & Conception
        { match: ['modélisation', 'modelisation', 'uml'], icon: 'bi-diagram-3' },
        { match: ['conception', 'architecture'], icon: 'bi-puzzle' },
        { match: ['merise'], icon: 'bi-boxes' },

        // Design & UI/UX
        { match: ['design', 'ui', 'ux', 'interface'], icon: 'bi-palette' },
        { match: ['prototype', 'maquette'], icon: 'bi-easel' },

        // Outils & DevOps
        { match: ['outil', 'tool', 'devops'], icon: 'bi-tools' },
        { match: ['git', 'versionning'], icon: 'bi-git' },
        { match: ['cloud', 'azure', 'aws'], icon: 'bi-cloud' },
        { match: ['docker', 'container'], icon: 'bi-box-seam' },

        // Langages
        { match: ['langage', 'language', 'programmation'], icon: 'bi-file-code' },
        { match: ['javascript', 'js'], icon: 'bi-filetype-js' },
        { match: ['typescript', 'ts'], icon: 'bi-filetype-ts' },
        { match: ['java'], icon: 'bi-filetype-java' },
        { match: ['python'], icon: 'bi-filetype-py' },

        // Frameworks & Librairies
        { match: ['framework', 'library', 'librairie'], icon: 'bi-boxes' },
        { match: ['angular'], icon: 'bi-filetype-angular' },
        { match: ['react'], icon: 'bi-filetype-react' },
        { match: ['node'], icon: 'bi-filetype-node' },

        // Autres catégories
        { match: ['test', 'testing'], icon: 'bi-check-circle' },
        { match: ['seo'], icon: 'bi-search' },
        { match: ['accessibilité', 'a11y'], icon: 'bi-universal-access' },
        { match: ['agile', 'scrum'], icon: 'bi-kanban' },
        { match: ['autre', 'divers', 'other'], icon: 'bi-stars' }
    ];

    const foundMapping = iconMappings.find(mapping =>
        mapping.match.some(m => normalizedTitle.includes(m))
    );

    return foundMapping?.icon || 'bi-star';
}
}
