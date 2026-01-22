
import { Project, Experience, Education, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "BELAL ALLALA",
  title: "DÉVELOPPEUR FULL-STACK JAVA/ANGULAR",
  email: "belalallala810@gmail.com",
  phone: "+212-689948144",
  github: "Belal-allala",
  linkedin: "belal-allala-3990a6394",
  location: "Safi, Maroc",
  bio: "Développeur Full-Stack passionné par l'écosystème Java/Spring et Angular. Formé à l'excellence chez YouCode (Safi), je suis actuellement en recherche active d'une opportunité d'insertion professionnelle pour mettre mes compétences techniques et mon agilité au service de projets ambitieux.",
  status: "À la recherche d'une opportunité professionnelle"
};

export const SOFT_SKILLS = [
  { name: "Intelligence Collective", desc: "Capacité à collaborer efficacement au sein d'équipes multidisciplinaires." },
  { name: "Agilité (Scrum)", desc: "Habitué aux cycles itératifs et à la culture du feedback constructif." },
  { name: "Autonomie & Rigueur", desc: "Capacité à mener des projets de la conception au déploiement avec précision." },
  { name: "Résolution de problèmes", desc: "Approche analytique pour transformer des défis complexes en solutions techniques." },
  { name: "Curiosité Technique", desc: "Veille constante sur les dernières innovations Java, Spring et Cloud." }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Développeur Full-Stack (Stagiaire)",
    company: "Strategie Trente-Deux",
    location: "Essaouira",
    period: "Mai - Août 2025",
    description: "Conception et développement d'une application de gestion full-stack (API Laravel / SPA React). Optimisation des performances et préparation de l'infrastructure de déploiement."
  },
  {
    role: "Entrepreneur E-commerce",
    company: "Bio-Maroc",
    location: "Maroc",
    period: "Mai - Août 2024",
    description: "Gestion d'une plateforme e-commerce, marketing digital orienté conversion et gestion de la relation client."
  },
  {
    role: "Technicien de Maintenance Informatique",
    company: "Sadki-Info",
    location: "Maroc",
    period: "Juin - Septembre 2023",
    description: "Expertise technique en maintenance matérielle et logicielle, déploiement de solutions systèmes et réseaux."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "SDMS (SmartLogi)",
    tech: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Docker", "JUnit", "Mockito"],
    description: "Application complète de gestion logistique. Implémentation de la sécurité par tokens, tests unitaires rigoureux et conteneurisation."
  },
  {
    title: "Vega Go",
    tech: ["Laravel", "PostgreSQL", "Stripe API", "QR Code JS"],
    description: "Digitalisation du transport par bus : réservation sécurisée, billetterie dynamique et interface administrateur complète."
  },
  {
    title: "Javalution Bank",
    tech: ["Java 8", "Streams API", "JDBC", "Log4j", "MySQL"],
    description: "Application bancaire en console exploitant la puissance du Java moderne et des Design Patterns structurels."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Langages",
    skills: ["Java", "PHP", "JavaScript", "TypeScript", "Python"]
  },
  {
    name: "Backend",
    skills: ["Spring Boot", "Spring Security", "Jakarta EE", "Hibernate", "Laravel", "PostgreSQL", "MySQL"]
  },
  {
    name: "Frontend",
    skills: ["Angular", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    name: "Outils & DevOps",
    skills: ["Docker", "Maven", "Git", "Postman", "Swagger", "SonarQube", "JUnit 5", "Mockito"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "YouCode Safi (UM6P)",
    degree: "Développement Web Full Stack",
    period: "2024 - 2026",
    details: "Apprentissage intensif par projets réels, pédagogie active axée sur l'autonomie et le travail en équipe."
  },
  {
    institution: "CPGE Moulay Ali Cherif",
    degree: "Filière Mathématiques, Physique (MP)",
    period: "2022 - 2024",
    details: "Formation scientifique rigoureuse axée sur l'analyse et la résolution de problèmes mathématiques."
  },
  {
    institution: "Lycée technique Errachidia",
    degree: "Bac Sciences Mathématiques B",
    period: "2022",
    details: "Diplôme d'excellence scientifique."
  }
];

export const LANGUAGES = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Intermédiaire" },
  { name: "Anglais", level: "Intermédiaire" }
];

export const INTERESTS = [
  "Jeux d'échecs", 
  "Lecture", 
  "Football", 
  "Nouvelles Technologies", 
  "Développement personnel", 
  "Voyage",
  "Natation"
];
