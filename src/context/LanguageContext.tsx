"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "fr";

const t = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      comparison: "Comparison",
      reviews: "Reviews",
      contact: "Contact",
      cta: "Book A Free Call",
    },
    hero: {
      typingPhrases: ["MORE LEADS.", "MORE MEMBERS.", "MORE REVENUE."],
      staticLine: "Acquisition for Fitness Studios.",
      sub: "We help fitness studio owners to acquire high-value members through ROI-driven social media ad campaigns",
      cta: "Book A Free Call",
    },
    logoStrip: { label: "Trusted By" },
    services: {
      badge: "Services",
      heading: "How We Can Help You",
      headingItalic: "Grow",
      sub: "Everything you need to fill your studio with high-value members",
      cards: [
        {
          title: "Advertising To Reach EVERY Local Client",
          desc: "We'll run targeted campaigns that bring qualified leads straight to your door.",
        },
        {
          title: "Websites That Turn Viewers Into BUYERS",
          desc: "We'll build you a page that convinces people they need your studio right now.",
        },
        {
          title: "Results You Can See In 48 Hours",
          desc: "Someone's ready to join a gym? You'll be the first studio they see.",
        },
      ],
    },
    process: {
      badge: "Our Process",
      heading: "How It",
      headingItalic: "Works",
      sub: "A simple 3-step system that fills your studio on autopilot",
      tabs: ["Audit", "Launch", "Scale"],
      steps: [
        {
          tag: "Step 01",
          title: "We Audit Your Current System",
          desc: "We run a deep-dive into your marketing, competitors, and local demand to identify where clients are being lost — and exactly how to fix it.",
        },
        {
          tag: "Step 02",
          title: "We Launch Your Campaign",
          desc: "We build and launch your campaigns across Meta and Google with proven copy, creative, and targeting. You'll see leads within 48 hours.",
        },
        {
          tag: "Step 03",
          title: "We Scale What Works",
          desc: "We constantly optimise and scale your best-performing ads, cutting waste and doubling down on what fills your studio fastest.",
        },
      ],
    },
    comparison: {
      badge: "Comparison",
      heading: "Why Choose Us",
      headingItalic: "Over Others",
      sub: "See how we compare against others in performance, growth",
      othersLabel: "Others",
      oursLabel: "Us",
      others: [
        "Focus on 'brand awareness'",
        "Age-old marketing strategies",
        "One-size-fits-all approach",
        "Lock you into 6-12 month contracts",
        "Don't share the risk with you",
        "Extremely slow processes",
      ],
      ours: [
        "Guaranteed results",
        "Focus on sales and clients",
        "Everything done with urgency",
        "1st access to newest updates",
        "Personalized approach",
        "Meta Business Partner Agency",
      ],
    },
    reviews: {
      badge: "Reviews",
      heading: "Trusted by",
      headingItalic: "Visionaries",
      sub: "Hear from real users who achieved success with our campaigns",
      items: [
        {
          name: "Soukaina R",
          role: "Pilates (reformer) Studio owner",
          quote: "Truly impressive. Client bookings increased fast, and everything worked smoothly with our studio.",
        },
        {
          name: "Ikram N",
          role: "Personal Training Studio owner",
          quote: "Game-changer. I get steady clients automatically, and I finally focus on what I love - Coaching.",
        },
        {
          name: "Nouhaila M",
          role: "Nutritionist & Body treatment",
          quote: "Smooth setup. Their system replaced three tools. We saw improvements in just the first week.",
        },
        {
          name: "Johana P",
          role: "Yoga studio owner",
          quote: "Our classes are fuller and our schedule flows naturally. I actually enjoy running the studio again.",
        },
        {
          name: "Dr Hassan B",
          role: "Medical centre",
          quote: "Managing the clinic used to be stressful. Now everything runs smoothly, and I can focus on patient care.",
        },
      ],
    },
    team: {
      badge: "Our Amazing Team",
      heading: "Get to",
      headingItalic: "Know Us",
      role: "CEO",
    },
    faq: {
      badge: "FAQ's",
      heading: "Frequently Asked",
      headingItalic: "Questions",
      sub: "Find quick answers to the most common support questions",
      cardTitle: "Still Have Questions?",
      cardSub: "Reach out and we'll get back to you within 24 hours.",
      cardBtn: "Ask A Question",
      items: [
        {
          q: "How do I know your Meta ads can actually generate results?",
          a: "We've done this for dozens of PT studios, Pilates studios, yoga studios, nutritionists, and medical centres. We only take on businesses we know we can generate results for. Before we take your money, we audit your offer, local market, and competition, and only move forward if we're confident we can generate qualified leads for you. If we don't deliver results within 30 days, you'll get your money back guaranteed.",
        },
        {
          q: "What exactly are you going to do for my business?",
          a: "We take the pressure and stress away from you - the studio owner - when it comes to making social media marketing a profitable channel for your fitness business. We don't do contracts. Why? No need to. Our relationships are built on results and trust - we back ourselves to deliver.",
        },
        {
          q: "How much is this going to cost me upfront?",
          a: "The paid trial is a one-time €500 upfront. No commitment, no retainers, no 12-month contracts. You actively have to tell us that you want to continue a week before the trial ends so that we can offer you a retainer model, which you can still cancel on a monthly basis.",
        },
        {
          q: "Do you only work with big businesses?",
          a: "Not necessarily. We only care about working with people who are hungry for growth and won't stop expanding when they hit capacity. However, if your business is dead or has zero traction we might not be a good fit. We cannot increase sales in something that there is zero demand for.",
        },
        {
          q: "How long does it take to start seeing results?",
          a: "The paid trial is designed to give you enough results to make an informed decision whether you want to continue after the initial 30-day period.",
        },
        {
          q: "How much of my time is this going to require?",
          a: "Barely anything. You just do what you do best: turn leads into customers. We handle all the Meta ads, visuals, copy, and campaign management, and provide weekly updates on what's working and how your campaigns are performing.",
        },
        {
          q: "What happens if I want to cancel?",
          a: "Just hit us up and we'll make sure to handle it the same day.",
        },
      ],
    },
    finalCta: {
      tag: "Reach out anytime",
      heading: "Ready to Grow Your Studio?",
      headingItalic: "Let's Build Together",
      sub: "Claim your FREE 30-minute Strategy Call (€500 value)",
      cta: "Book A Free Call",
    },
    footer: {
      copy: "2026 Farouk Mchiche. All rights reserved.",
      links: [
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Comparison", href: "#comparison" },
        { label: "Reviews", href: "#reviews" },
        { label: "Contact", href: "/contact" },
      ],
    },
    contact: {
      headingLine1: "Free 30-Minute",
      headingLine1Italic: "Scaling",
      headingLine2: "Growth Map Session",
      formTitle: "We'd love to help! Let us know how",
      labels: {
        name: "Full Name",
        namePlaceholder: "John doe",
        email: "Email Address",
        emailPlaceholder: "xyz@abc.com",
        website: "Website",
        websitePlaceholder: "Website URL Or Instagram URL",
        phone: "Phone Number",
        phonePlaceholder: "+1 (000) 000 00 00",
        problem: "What is the current problem you're experiencing?",
        problemPlaceholder: "Give us more info..",
        btn: "Send Message",
        sending: "Sending...",
      },
      success: {
        title: "Message Sent!",
        msg: "Thank you! We'll be in touch within 48 hours.",
      },
      cards: [
        {
          title: "Free Stuff",
          body: "Fill out the form we'll reach out within 48 hours to see if we're a good fit to help you grow.",
        },
        {
          title: "Let's Connect",
          body: "No costs, no obligations, no annoying sales pitch. If that sounds good, then let's scale your biz to the moon! 🚀🌍",
        },
      ],
    },
  },

  fr: {
    nav: {
      services: "Services",
      process: "Processus",
      comparison: "Comparaison",
      reviews: "Avis",
      contact: "Contact",
      cta: "Réserver un Appel",
    },
    hero: {
      typingPhrases: ["PLUS DE LEADS.", "PLUS DE MEMBRES.", "PLUS DE REVENUS."],
      staticLine: "Acquisition pour les Studios de Fitness.",
      sub: "Nous aidons les propriétaires de studios de fitness à acquérir des membres de haute valeur grâce à des campagnes publicitaires sur les réseaux sociaux axées sur le ROI",
      cta: "Réserver un Appel Gratuit",
    },
    logoStrip: { label: "Nos Partenaires" },
    services: {
      badge: "Services",
      heading: "Comment Nous Vous Aidons à",
      headingItalic: "Grandir",
      sub: "Tout ce dont vous avez besoin pour remplir votre studio de membres de haute valeur",
      cards: [
        {
          title: "Publicité pour Toucher CHAQUE Client Local",
          desc: "Nous lançons des campagnes ciblées qui amènent des prospects qualifiés directement à vous.",
        },
        {
          title: "Sites Web qui Transforment les Visiteurs en ACHETEURS",
          desc: "Nous créons une page qui convainc les gens qu'ils ont besoin de votre studio maintenant.",
        },
        {
          title: "Résultats Visibles en 48 Heures",
          desc: "Quelqu'un est prêt à rejoindre une salle ? Votre studio sera le premier qu'il verra.",
        },
      ],
    },
    process: {
      badge: "Notre Processus",
      heading: "Comment ça",
      headingItalic: "Fonctionne",
      sub: "Un système simple en 3 étapes qui remplit votre studio en pilote automatique",
      tabs: ["Audit", "Lancement", "Croissance"],
      steps: [
        {
          tag: "Étape 01",
          title: "Nous Auditons Votre Système Actuel",
          desc: "Nous effectuons une analyse approfondie de votre marketing, de vos concurrents et de la demande locale pour identifier où les clients sont perdus — et comment y remédier.",
        },
        {
          tag: "Étape 02",
          title: "Nous Lançons Votre Campagne",
          desc: "Nous créons et lançons vos campagnes sur Meta et Google avec des textes, visuels et ciblages éprouvés. Vous verrez des prospects en 48 heures.",
        },
        {
          tag: "Étape 03",
          title: "Nous Faisons Évoluer Ce qui Fonctionne",
          desc: "Nous optimisons et développons continuellement vos meilleures publicités, réduisant le gaspillage et doublant la mise sur ce qui remplit votre studio le plus vite.",
        },
      ],
    },
    comparison: {
      badge: "Comparaison",
      heading: "Pourquoi Nous Choisir",
      headingItalic: "Plutôt que les Autres",
      sub: "Voyez comment nous nous comparons en termes de performance et de croissance",
      othersLabel: "Les Autres",
      oursLabel: "Nous",
      others: [
        "Axé sur la 'notoriété de marque'",
        "Stratégies marketing dépassées",
        "Approche générique",
        "Contrats de 6-12 mois",
        "Ne partagent pas le risque",
        "Processus extrêmement lents",
      ],
      ours: [
        "Résultats garantis",
        "Focus sur les ventes et clients",
        "Tout fait avec urgence",
        "Accès prioritaire aux nouveautés",
        "Approche personnalisée",
        "Agence Partenaire Meta Business",
      ],
    },
    reviews: {
      badge: "Avis",
      heading: "La confiance des",
      headingItalic: "Visionnaires",
      sub: "Découvrez comment de vrais utilisateurs ont réussi grâce à nos campagnes",
      items: [
        {
          name: "Soukaina R",
          role: "Propriétaire de Studio Pilates (reformer)",
          quote: "Vraiment impressionnant. Les réservations ont augmenté rapidement, et tout a fonctionné parfaitement avec notre studio.",
        },
        {
          name: "Ikram N",
          role: "Propriétaire de Studio Personal Training",
          quote: "Un vrai changement. J'obtiens des clients réguliers automatiquement et je me concentre enfin sur ce que j'aime — le coaching.",
        },
        {
          name: "Nouhaila M",
          role: "Nutritionniste & Soins corporels",
          quote: "Mise en place fluide. Leur système a remplacé trois outils. Nous avons vu des améliorations dès la première semaine.",
        },
        {
          name: "Johana P",
          role: "Propriétaire de Studio Yoga",
          quote: "Nos cours sont plus remplis et notre planning coule naturellement. J'aime vraiment gérer le studio à nouveau.",
        },
        {
          name: "Dr Hassan B",
          role: "Centre Médical",
          quote: "Gérer la clinique était stressant. Maintenant tout fonctionne sans accroc et je peux me concentrer sur les patients.",
        },
      ],
    },
    team: {
      badge: "Notre Équipe",
      heading: "Faites Notre",
      headingItalic: "Connaissance",
      role: "PDG",
    },
    faq: {
      badge: "FAQ",
      heading: "Questions Fréquemment",
      headingItalic: "Posées",
      sub: "Trouvez des réponses rapides aux questions de support les plus fréquentes",
      cardTitle: "Vous avez encore des questions ?",
      cardSub: "Vous avez encore des questions ? N'hésitez pas à nous contacter dès aujourd'hui !",
      cardBtn: "Poser une question",
      items: [
        {
          q: "Comment puis-je savoir si vos annonces Meta peuvent réellement générer des résultats ?",
          a: "Nous avons fait cela pour des dizaines de studios de PT, de studios de Pilates, de studios de yoga, de nutritionnistes et de centres médicaux. Nous ne prenons en charge que les entreprises pour lesquelles nous savons que nous pouvons générer des résultats.\n\nAvant de prendre votre argent, nous auditons votre offre, le marché local et la concurrence, et ne procédons que si nous sommes confiants de pouvoir générer des prospects qualifiés pour vous.\n\nSi nous ne livrons pas de résultats dans les 30 jours, nous continuerons à travailler gratuitement jusqu'à ce que nous le fassions.",
        },
        {
          q: "Que comptez-vous exactement faire pour mon entreprise ?",
          a: "Nous vous soulageons de la pression et du stress en tant que propriétaire de studio lorsqu'il s'agit de rendre le marketing sur les réseaux sociaux un canal rentable pour votre entreprise de fitness.\n\nNous ne faisons pas de contrats. Pourquoi ? Pas besoin. Nos relations sont basées sur les résultats et la confiance - nous avons confiance en notre capacité à délivrer.",
        },
        {
          q: "Combien cela va-t-il me coûter à l'avance ?",
          a: "L'essai payant est un paiement unique de 500 € à l'avance. Aucun engagement, aucun acompte, aucun contrat de 12 mois.\n\nVous devez nous informer activement que vous souhaitez continuer une semaine avant la fin de l'essai afin que nous puissions vous proposer un modèle de redevance, que vous pouvez toujours annuler mensuellement.",
        },
        {
          q: "Travaillez-vous uniquement avec de grandes entreprises ?",
          a: "Pas nécessairement. Nous ne nous soucions que de travailler avec des personnes qui ont soif de croissance et qui ne s'arrêteront pas d'expansion lorsqu'elles atteignent leur capacité.\n\nCependant, si votre entreprise est morte ou n'a aucune traction, nous pourrions ne pas être un bon choix. Nous ne pouvons pas augmenter les ventes dans quelque chose pour lequel il n'y a aucune demande.",
        },
        {
          q: "Combien de temps faut-il pour commencer à voir des résultats ?",
          a: "L'essai payant est conçu pour vous donner suffisamment de résultats pour vous permettre de prendre une décision éclairée sur votre souhait de continuer après la période initiale de 30 jours.",
        },
        {
          q: "Combien de temps cela va-t-il me demander ?",
          a: "À peine quoi que ce soit. Vous faites simplement ce que vous faites de mieux : transformer des prospects en clients.\n\nNous gérons toutes les publicités Meta, les visuels, les copies et la gestion des campagnes, et nous fournissons des mises à jour hebdomadaires sur ce qui fonctionne et sur les performances de vos campagnes.",
        },
        {
          q: "Que se passe-t-il si je veux annuler ?",
          a: "Il vous suffit de nous contacter et nous nous assurerons de le traiter dans la journée.",
        },
      ],
    },
    finalCta: {
      tag: "Contactez-nous",
      heading: "Prêt à Développer Votre Studio ?",
      headingItalic: "Construisons Ensemble",
      sub: "Réclamez votre Appel Stratégie GRATUIT de 30 minutes (valeur 500 €)",
      cta: "Réserver un Appel",
    },
    footer: {
      copy: "2026 Farouk Mchiche. Tous droits réservés.",
      links: [
        { label: "Services", href: "#services" },
        { label: "Processus", href: "#process" },
        { label: "Comparaison", href: "#comparison" },
        { label: "Avis", href: "#reviews" },
        { label: "Contact", href: "/contact" },
      ],
    },
    contact: {
      headingLine1: "Appel Stratégique Gratuit de 30 Minutes",
      headingLine1Italic: "Gratuit",
      headingLine2: "Réservez votre session de croissance",
      formTitle: "Nous adorons aider ! Dites-nous comment",
      labels: {
        name: "Nom Complet",
        namePlaceholder: "Jean Dupont",
        email: "Adresse Email",
        emailPlaceholder: "xyz@abc.com",
        website: "Site Web",
        websitePlaceholder: "URL du site ou Instagram",
        phone: "Numéro de Téléphone",
        phonePlaceholder: "+33 (0) 00 00 00 00",
        problem: "Quel est le problème actuel que vous rencontrez ?",
        problemPlaceholder: "Donnez-nous plus d'informations..",
        btn: "Envoyer le Message",
        sending: "Envoi en cours...",
      },
      success: {
        title: "Message Envoyé !",
        msg: "Merci ! Nous vous contacterons dans les 48 heures.",
      },
      cards: [
        {
          title: "Cadeau Gratuit",
          body: "Remplissez le formulaire, nous vous contacterons dans les 48 heures pour voir si nous sommes un bon partenaire pour vous aider à croître.",
        },
        {
          title: "Connectons-nous",
          body: "Aucun coût, aucune obligation, aucun argumentaire de vente ennuyeux. Si cela vous convient, faisons monter votre entreprise en flèche ! 🚀🌍",
        },
      ],
    },
  },
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Translations = { [K in keyof typeof t.en]: any };

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  tr: Translations;
}

const LanguageContext = createContext<LangCtx>({
  lang: "en",
  toggle: () => {},
  tr: t.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "fr" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle, tr: t[lang] as unknown as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
