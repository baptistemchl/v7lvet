export const siteConfig = {
  name: 'V7LVET',
  tagline: 'Drive the future',
  description: 'Cabinet d\'expertise comptable haut de gamme. Accompagnement stratégique et solutions innovantes pour entrepreneurs visionnaires.',
  url: 'https://v7lvet.fr',
  ogImage: '/images/og-image.jpg',
  creator: '@v7lvet',
  keywords: [
    'expert comptable',
    'expertise comptable',
    'cabinet comptable',
    'comptabilité entreprise',
    'conseil fiscal',
    'audit comptable',
    'gestion financière',
    'création entreprise',
    'bilan comptable',
    'déclaration fiscale',
    'commissaire aux comptes',
    'conseil en gestion',
  ],
  contact: {
    email: 'contact@v7lvet.fr',
    phone: '+33 1 23 45 67 89',
    address: 'Paris, France',
  },
  social: {
    linkedin: 'https://linkedin.com/company/v7lvet',
    twitter: 'https://twitter.com/v7lvet',
  },
}

export const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Le Cabinet', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ],
  services: [
    { name: 'Expertise Comptable', href: '/services#expertise' },
    { name: 'Conseil Fiscal', href: '/services#fiscal' },
    { name: 'Audit & Commissariat', href: '/services#audit' },
    { name: 'Accompagnement Stratégique', href: '/services#strategy' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/legal' },
    { name: 'Politique de confidentialité', href: '/privacy' },
  ],
}

export const services = [
  {
    id: 'expertise',
    title: 'Expertise Comptable',
    shortTitle: 'Expertise',
    description: 'Une gestion comptable d\'excellence adaptée aux enjeux de votre entreprise.',
    longDescription: 'Notre approche de l\'expertise comptable transcende la simple tenue des comptes. Nous analysons chaque donnée pour transformer vos chiffres en leviers de croissance stratégique.',
    features: [
      'Tenue de comptabilité externalisée',
      'Révision et établissement des comptes annuels',
      'Reporting financier personnalisé',
      'Tableaux de bord et indicateurs clés',
      'Situations intermédiaires',
      'Conseil permanent',
    ],
    icon: 'chart',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 'fiscal',
    title: 'Conseil Fiscal',
    shortTitle: 'Fiscal',
    description: 'Optimisation fiscale légale et stratégie patrimoniale sur-mesure.',
    longDescription: 'Maximisez votre performance fiscale avec une stratégie adaptée à vos objectifs. Notre expertise vous garantit conformité et optimisation dans un cadre légal rigoureux.',
    features: [
      'Optimisation de la charge fiscale',
      'Déclarations fiscales',
      'Restructuration juridique et fiscale',
      'Transmission d\'entreprise',
      'Holding et montages patrimoniaux',
      'Veille réglementaire',
    ],
    icon: 'scale',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'audit',
    title: 'Audit & Commissariat',
    shortTitle: 'Audit',
    description: 'Missions de contrôle et de certification pour sécuriser vos opérations.',
    longDescription: 'Nos missions d\'audit apportent la garantie d\'une information financière fiable et conforme. Une démarche rigoureuse au service de votre crédibilité.',
    features: [
      'Commissariat aux comptes',
      'Audit contractuel',
      'Due diligence acquisitions',
      'Audit de conformité',
      'Procédures de contrôle interne',
      'Attestations spécifiques',
    ],
    icon: 'shield',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'strategy',
    title: 'Accompagnement Stratégique',
    shortTitle: 'Stratégie',
    description: 'Pilotage et conseil pour accélérer votre développement.',
    longDescription: 'Au-delà des chiffres, nous sommes votre partenaire stratégique. Business plan, levée de fonds, croissance externe : nous transformons vos ambitions en réalité.',
    features: [
      'Business plan et prévisionnel',
      'Recherche de financements',
      'Accompagnement création/reprise',
      'Évaluation d\'entreprise',
      'Conseil en organisation',
      'Pilotage de la performance',
    ],
    icon: 'rocket',
    gradient: 'from-orange-500 to-red-600',
  },
]

export const stats = [
  { value: '15+', label: 'Années d\'expertise' },
  { value: '500+', label: 'Clients accompagnés' },
  { value: '98%', label: 'Taux de satisfaction' },
  { value: '50M€', label: 'Patrimoine géré' },
]

export const values = [
  {
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque mission, chaque conseil, chaque interaction.',
    icon: 'star',
  },
  {
    title: 'Innovation',
    description: 'Nous adoptons les technologies les plus avancées pour optimiser votre gestion.',
    icon: 'lightbulb',
  },
  {
    title: 'Proximité',
    description: 'Un interlocuteur dédié, disponible et à l\'écoute de vos enjeux spécifiques.',
    icon: 'users',
  },
  {
    title: 'Confidentialité',
    description: 'Vos données sont protégées avec les standards de sécurité les plus élevés.',
    icon: 'lock',
  },
]

export const team = [
  {
    name: 'Alexandre Dubois',
    role: 'Fondateur & Expert-Comptable',
    bio: 'Plus de 20 ans d\'expérience au service des entrepreneurs ambitieux.',
    image: '/images/team/alexandre.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Marie Laurent',
    role: 'Directrice Audit',
    bio: 'Expertise pointue en audit et commissariat aux comptes.',
    image: '/images/team/marie.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Thomas Bernard',
    role: 'Responsable Fiscal',
    bio: 'Stratège fiscal reconnu, spécialiste de l\'optimisation.',
    image: '/images/team/thomas.jpg',
    linkedin: 'https://linkedin.com',
  },
]

export const faqs = [
  {
    category: 'Général',
    questions: [
      {
        question: 'Pourquoi choisir V7LVET comme expert-comptable ?',
        answer: 'V7LVET combine expertise technique de haut niveau et approche innovante. Notre cabinet utilise les dernières technologies pour vous offrir un suivi en temps réel, des conseils proactifs et un accompagnement stratégique qui va bien au-delà de la simple comptabilité. Nous sommes votre partenaire de croissance.',
      },
      {
        question: 'Comment se déroule le premier rendez-vous ?',
        answer: 'Le premier rendez-vous est un échange découverte gratuit d\'environ 45 minutes. Nous analysons votre situation, comprenons vos objectifs et vous présentons comment V7LVET peut vous accompagner. C\'est l\'occasion de poser toutes vos questions et de vérifier que notre approche correspond à vos attentes.',
      },
      {
        question: 'Travaillez-vous avec tous types d\'entreprises ?',
        answer: 'Nous accompagnons principalement les TPE, PME et startups à fort potentiel de croissance. Notre expertise couvre tous les secteurs d\'activité : tech, services, commerce, industrie, professions libérales. Ce qui nous anime : travailler avec des entrepreneurs visionnaires.',
      },
    ],
  },
  {
    category: 'Tarifs & Engagement',
    questions: [
      {
        question: 'Comment sont calculés vos honoraires ?',
        answer: 'Nos honoraires sont établis sur-mesure en fonction de la complexité de votre dossier, du volume de pièces à traiter et des missions confiées. Nous privilégions les forfaits mensuels pour une visibilité budgétaire optimale. Un devis détaillé vous est remis après notre premier échange.',
      },
      {
        question: 'Y a-t-il une période d\'engagement minimum ?',
        answer: 'Nous proposons des engagements flexibles adaptés à votre situation. Pour les missions récurrentes, un engagement annuel permet d\'optimiser notre collaboration. Cependant, nous croyons que c\'est la qualité de notre service qui doit vous fidéliser, pas un contrat contraignant.',
      },
      {
        question: 'Quels sont vos délais de réponse ?',
        answer: 'Nous nous engageons sur une réponse sous 24h ouvrées pour toute demande urgente. Pour les questions courantes, vous bénéficiez d\'un accès direct à votre interlocuteur dédié. Notre plateforme client vous permet également d\'accéder à vos documents et indicateurs 24/7.',
      },
    ],
  },
  {
    category: 'Services',
    questions: [
      {
        question: 'Proposez-vous un service de paie ?',
        answer: 'Oui, nous proposons une gestion complète de la paie : établissement des bulletins, déclarations sociales, suivi des absences, entrées/sorties, et veille sociale. Notre solution intégrée garantit conformité et efficacité.',
      },
      {
        question: 'Pouvez-vous m\'aider à créer mon entreprise ?',
        answer: 'Absolument. Nous vous accompagnons de A à Z : choix du statut juridique optimal, rédaction des statuts, formalités de création, mise en place de la comptabilité, conseil fiscal initial. Un parcours structuré pour démarrer sur de bonnes bases.',
      },
      {
        question: 'Intervenez-vous en cas de contrôle fiscal ?',
        answer: 'Oui, nous assurons une assistance complète en cas de contrôle fiscal : préparation du dossier, présence aux rendez-vous avec l\'administration, rédaction des réponses, négociation si nécessaire. Vous êtes accompagné à chaque étape.',
      },
    ],
  },
  {
    category: 'Technologie',
    questions: [
      {
        question: 'Quels outils utilisez-vous ?',
        answer: 'Nous utilisons une suite d\'outils digitaux de pointe : plateforme collaborative sécurisée, automatisation intelligente des écritures, tableaux de bord en temps réel, signature électronique, coffre-fort numérique. La technologie au service de votre sérénité.',
      },
      {
        question: 'Mes données sont-elles sécurisées ?',
        answer: 'La sécurité est notre priorité absolue. Toutes vos données sont hébergées en France sur des serveurs certifiés, avec chiffrement de bout en bout, authentification forte et sauvegardes quotidiennes. Nous sommes conformes RGPD et aux normes les plus exigeantes de la profession.',
      },
    ],
  },
]

export const blogPosts = [
  {
    slug: 'optimisation-fiscale-2024',
    title: 'Optimisation fiscale 2024 : les stratégies gagnantes',
    excerpt: 'Découvrez les nouvelles opportunités d\'optimisation fiscale pour votre entreprise cette année.',
    content: '',
    author: 'Alexandre Dubois',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Fiscal',
    image: '/images/blog/fiscal-2024.jpg',
    featured: true,
  },
  {
    slug: 'ia-comptabilite',
    title: 'L\'IA révolutionne la comptabilité : ce qui change pour vous',
    excerpt: 'Comment l\'intelligence artificielle transforme notre métier et améliore votre expérience.',
    content: '',
    author: 'Marie Laurent',
    date: '2024-01-10',
    readTime: '4 min',
    category: 'Innovation',
    image: '/images/blog/ia-comptabilite.jpg',
    featured: true,
  },
  {
    slug: 'creation-entreprise-guide',
    title: 'Créer son entreprise en 2024 : le guide complet',
    excerpt: 'Toutes les étapes pour réussir la création de votre entreprise cette année.',
    content: '',
    author: 'Thomas Bernard',
    date: '2024-01-05',
    readTime: '8 min',
    category: 'Création',
    image: '/images/blog/creation-guide.jpg',
    featured: false,
  },
  {
    slug: 'bilan-previsionnel',
    title: 'Business plan : les erreurs à éviter absolument',
    excerpt: 'Les pièges classiques du business plan et comment les contourner pour convaincre.',
    content: '',
    author: 'Alexandre Dubois',
    date: '2024-01-02',
    readTime: '6 min',
    category: 'Stratégie',
    image: '/images/blog/business-plan.jpg',
    featured: false,
  },
]
