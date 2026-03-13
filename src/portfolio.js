/* Portfolio personnalisé - Serigne Fallou Mbaye */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* Splash Screen */

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

/* Illustration */

const illustration = {
  animated: true
};

/* Présentation */

const greeting = {
  username: "Serigne Fallou MBAYE",
  title: "Bonjour, je suis Serigne Fallou",
  subTitle: emoji(
    "Étudiant passionné en Réseaux et Cybersécurité 🚀 actuellement en BUT Réseaux et Télécommunications. Je m'intéresse aux infrastructures réseaux, à l'administration systèmes et à la sécurité informatique. J'aime concevoir, configurer et sécuriser des réseaux, travailler avec Linux et explorer des technologies comme MPLS, les solutions SIEM (Wazuh) et l'automatisation avec Ansible."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view",
  displayGreeting: true
};

/* Réseaux sociaux */

const socialMediaLinks = {
  github: "https://github.com/mserignefallou16-rgb",
  linkedin: "",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

/* Compétences */

const skillsSection = {
  title: "Compétences",
  subTitle: "RÉSEAUX - SYSTÈMES - CYBERSÉCURITÉ",
  skills: [
    emoji("⚡ Conception et configuration d'infrastructures réseaux"),
    emoji("⚡ Administration systèmes Linux et Windows Server"),
    emoji("⚡ Supervision et détection d'incidents avec Wazuh SIEM"),
    emoji("⚡ Automatisation et déploiement avec Ansible et Docker")
  ],

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Terminal",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Network",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Security",
      fontAwesomeClassname: "fas fa-shield-alt"
    }
  ],

  display: true
};

/* Formation */

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "IUT de Roanne - Université Jean Monnet",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "BUT Réseaux et Télécommunications",
      duration: "2023 - 2026",
      desc: "Formation spécialisée en réseaux, systèmes et cybersécurité.",
      descBullets: [
        "Administration systèmes Linux et Windows",
        "Routage, commutation et sécurité réseau",
        "Projets techniques en MPLS, Wazuh SIEM et automatisation"
      ]
    }
  ]
};

/* Niveau technique */

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Réseaux",
      progressPercentage: "85%"
    },
    {
      Stack: "Systèmes",
      progressPercentage: "75%"
    },
    {
      Stack: "Cybersécurité",
      progressPercentage: "70%"
    },
    {
      Stack: "Automatisation",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};

/* Expérience */

const workExperiences = {
  display: false,
  experience: []
};

/* GitHub */

const openSource = {
  showGithubProfile: "true",
  display: true
};

/* Projets */

const bigProjects = {
  title: "Projets",
  subtitle: "Quelques projets techniques réalisés",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Infrastructure réseau IP/MPLS",
      projectDesc:
        "Conception d'un cœur de réseau IP/MPLS avec routeurs PE, P et CE utilisant OSPF et RIP.",
      footerLink: [
        {
          name: "Voir projet",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Plateforme SIEM avec Wazuh",
      projectDesc:
        "Déploiement d'une solution SIEM pour la supervision et la détection d'incidents de sécurité sur Linux et Windows.",
      footerLink: [
        {
          name: "Voir projet",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Portail Captif Fortigate",
      projectDesc:
        "Mise en place d'un portail captif Wi-Fi invité avec FortiGate et FortiAuthenticator.",
      footerLink: [
        {
          name: "Voir projet",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Automatisation avec Ansible",
      projectDesc:
        "Création d'un serveur de sauvegarde automatisé avec Ansible et Docker.",
      footerLink: [
        {
          name: "Voir projet",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

/* Certifications */

const achievementSection = {
  display: false
};

/* Blog */

const blogSection = {
  display: false
};

/* Talks */

const talkSection = {
  display: false
};

/* Podcast */

const podcastSection = {
  display: false
};

/* CV */

const resumeSection = {
  title: "CV",
  subtitle: "Télécharger mon CV",
  display: true
};

/* Contact */

const contactInfo = {
  title: emoji("Contact ☎️"),
  subtitle:
    "N'hésitez pas à me contacter pour échanger sur un projet ou une opportunité.",
  number: "",
  email_address: ""
};

/* Twitter */

const twitterDetails = {
  userName: "twitter",
  display: false
};

/* Disponibilité */

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
