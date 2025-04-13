export const formations = [
    {
      diplome: 'Formation certifiante en Développement Front-End',
      etablissement: 'FORCE-N, Université Numérique Cheikh Hamidou Kane (UN-CHK)',
      periode: 'Sept. 2023 - Janv. 2024',
      details: 'Spécialisée dans les technologies modernes du web (Angular, Bootstrap, etc.)'
    },
    {
      diplome: 'Doctorant en Informatique spécialité Modélisation et simulation de systèmes complexes',
      etablissement: 'Université Assane SECK de Ziguinchor',
      periode: 'Mars 2019 - Dec. 2022',
      details: 'Etude sur le problème des perdus de vue dans le cadre du suivi des PVVIH en zones transfrontalières entre la Gambie, la Guinée Bissau et le Sénégal',
      mention: 'En cours mais interrompu depuis 2022'
    },
    {
      diplome: 'Formation diplômante en entrepreneuriat',
      etablissement: 'PSEJ(Programme Sénégalais pour l’Entrepreneuriat des Jeunes)',
      periode: 'Janv. 2021 - Dec. 2021',
      details: 'Spécialisée dans le dans le domaine agricole',
      mention: 'Bien'
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

 export const experiences = [
    {
      poste: 'Développeur Web',
      entreprise: 'Agrosotech Sénégal',
      periode: 'Depuis septembre 2024',
      description: 'Développement d\'applications web et mobile à destination des acteurs agricoles.',
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
      periode: 'Août à Septembre 2024',
      description: 'Assistance informatique et participation à la digitalisation des services.',
      technologies: ['MySQL', 'Python', 'Rédaction cahier de charges']
    },
    {
      poste: 'Développeur Android',
      entreprise: 'Startup JCaisse (à Ziguinchor)',
      periode: 'Juin à Septembre 2022',
      description: 'Ajout de modules de gestion de ventes et utilisateurs sur une application de caisse.',
      technologies: ['Android (Java)', 'MySQL', 'Node js', 'Retrofit', 'UI/UX']
    },
    {
      poste: 'Doctorant',
      entreprise: 'Université Assane SECK de Ziguinchor',
      periode: 'Mars à Décembre 2021',
      description: 'Etude, analyse et développement d’une plateforme mobile de partage et d’échange d’informations en période de COVID-19 dans le cadre du suivi des personnes vivant avec le VIH en zones transfrontalières entre le Sénégal, la Gambie et la Guinée-Bissau (article de thèse publié )',
      technologies: ['Firebase', 'Android (Java)', 'Recherche', 'UML', 'Santé numérique']
    },
    {
      poste: 'Stagiaire Recherche et Développement ',
      entreprise: 'GAINDÉ 2000',
      periode: 'Juin à Décembre 2018',
      description: 'Développement d\'un module d\'authentification vocale Android.',
      technologies: ['Java', 'Reconnaissance du locuteur', 'Android SDK', 'Recherche', 'API TTS Android']
    }
  ];


  export const projets = [
    {
      titre: 'Information and Discussion Platform in the Context of Monitoring PLHIV in Border Areas and During COVID-19',
      type: 'research',
      auteurs: 'Badji A. (Auteur principal), Dieng Y., Diop I.',
      description: 'Plateforme d\'information et de discussion dans le cadre du suivi des PVVIH en zones frontalières et pendant la COVID-19.',
      technologies: ['Santé numérique', 'Android (java)', 'Firebase', 'API REST', 'Recherche & Documentation'],
      date: 'Mars 2022',
      lien: 'https://doi.org/10.1007/978-3-030-96293-7_11',
      github: null
    },
    {
      titre: 'State-of-the-Art of the Impact of HIV and Its Treatment on the Voice of PLHIV',
      type: 'research',
      auteurs: 'Badji A. (Auteur principal), Dieng Y., Diop I., Cisse P.A., Diouf B.',
      description: 'Etat de l’art de l’impact du VIH et de son traitement sur la voix des PVVIH',
      technologies: ['Recherche & Documentation', 'Analyse & Synthèse','Autres'],
      date: 'Septembre 2021',
      lien: 'https://doi.org/10.1007/978-981-16-2377-6_15',
      github: null
    },
    {
      titre: 'Automatic Speaker Recognition (ASR): Application in the monitoring of PLHIV in the cross-border area between the Gambia, Guinea-Bissau and Senegal',
      type: 'research',
      auteurs: 'Aliou Badji (Auteur principal) et al.',
      description: 'Reconnaissance automatique du locuteur (RAP): Application au suivi des PVVIH dans la zone transfrontalière entre la Gambie, la Guinée-Bissau et le Sénégal',
      technologies: ['Java', 'Traitement du signal', 'Biométrie vocale','Autres'],
      date: 'Mars 2021',
      lien: 'https://doi.org/10.1145/3447568.3448544',
      github: null
    },
    {
      titre: 'Application de gestion de caisse JCaisse',
      type: 'mobile',
      auteurs: 'Aliou Badji (Startup Jcaisse)',
      description: 'Ajout de modules de vente et de gestion de profils utilisateurs sur une application Android existante.',
      technologies: ['Android (Java)', 'MySQL', 'Node js', 'Retrofit', 'UI/UX'],
      date: '2022',
      lien: null,
      github: null
    },
    {
      titre: 'Module d\'authentification vocale mobile',
      type: 'mobile',
      auteurs: 'Aliou Badji (GAINDÉ 2000)',
      description: 'Développement d\'un prototype d\'authentification vocale sur Android avec GAINDÉ 2000.',
      technologies: ['Java', 'Reconnaissance du locuteur', 'Android SDK', 'Recherche', 'API TTS Android'],
      date: '2018',
      lien: null,
      github: null
    }
  ];

export const  skills = [
    {
      title: 'Langages de programmation',
      items: ['Python', 'Java', 'JavaScript', 'PHP (rarement utilisé)', 'SQL']
    },
    {
      title: 'Technologies Web & Mobile',
      items: ['HTML5', 'CSS3', 'Bootstrap', 'Angular', 'Node.js', 'Android','Firebase']
    },
    {
      title: 'Base de données',
      items: ['MySQL', 'Access','SQLite']
    },
    {
      title: 'Outils & autres',
      items: ['Figma', 'WordPress','Git', 'Suite Office (Word, Excel, PowerPoint)']
    },
    {
      title: 'Méthodes et modélisation',
      items: ['UML', 'Merise']
    },
    {
        title: 'Environnement de travail',
        items: ['Windows', 'Linux (rarement)']
      },
    {
      title: 'Autres compétences',
      items: ['Machine Learning (basique)', 'Documentation', 'Recherche']
    }
  ];
