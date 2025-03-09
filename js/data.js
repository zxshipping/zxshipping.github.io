/**
 * Data for the ZX Shipping website
 * Contains all the multilingual content for dynamic sections
 */

// Services data
const servicesData = [
    {
        icon: `<svg width="100" height="100" viewBox="0 0 24 24">
                <path fill="#00aaff" d="M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5 L13.5,19v-5.5L22,16z"/>
              </svg>`,
        title: {
            en: "US to Port-au-Prince (PAP)",
            fr: "USA vers Port-au-Prince (PAP)",
            ht: "Etazini pou Pòtoprens (PAP)"
        },
        description: {
            en: "Direct air freight service to Haiti's capital with 2-3 day delivery, customs clearance assistance, and door-to-door options from any US location.",
            fr: "Service de fret aérien direct vers la capitale d'Haïti avec livraison en 2-3 jours, assistance au dédouanement et options de porte-à-porte depuis n'importe quel endroit aux États-Unis.",
            ht: "Sèvis transpò ayeryen dirèk pou kapital Ayiti a avèk livrezon 2-3 jou, asistans pou dedwanman, ak opsyon pòt-a-pòt soti nenpòt kote nan Etazini."
        },
        link: {
            en: "Get Rates",
            fr: "Obtenir les Tarifs",
            ht: "Pran Pri"
        }
    },
    {
        icon: `<svg width="100" height="100" viewBox="0 0 24 24">
                <path fill="#00aaff" d="M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5 L13.5,19v-5.5L22,16z"/>
              </svg>`,
        title: {
            en: "US to Cap-Haïtien (CAP)",
            fr: "USA vers Cap-Haïtien (CAP)",
            ht: "Etazini pou Okap (CAP)"
        },
        description: {
            en: "Scheduled air freight service to northern Haiti with real-time tracking, insurance options, and comprehensive delivery solutions from any US city.",
            fr: "Service de fret aérien régulier vers le nord d'Haïti avec suivi en temps réel, options d'assurance et solutions de livraison complètes depuis n'importe quelle ville américaine.",
            ht: "Sèvis transpò ayeryen pwograme pou nò Ayiti avèk swivi an tan reyèl, opsyon asirans, ak solisyon livrezon konplè soti nan nenpòt vil Etazini."
        },
        link: {
            en: "Get Rates",
            fr: "Obtenir les Tarifs",
            ht: "Pran Pri"
        }
    },
    {
        icon: `<svg width="100" height="100" viewBox="0 0 24 24">
                <path fill="#00aaff" d="M20,8h-3V4H3C1.9,4,1,4.9,1,6v12c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V10C23,8.9,22.1,8,20,8z M20,18H4V6h12v2H8v2 h12V18z M10,12.73V16h4v-3.27L16,9h-5l2,3.73z"/>
              </svg>`,
        title: {
            en: "Express Document Service",
            fr: "Service Express de Documents",
            ht: "Sèvis Dokiman Eksprès"
        },
        description: {
            en: "Dedicated 24-hour service for urgent documents and small packages to both Port-au-Prince and Cap-Haïtien with priority handling.",
            fr: "Service dédié 24h/24 pour documents urgents et petits colis vers Port-au-Prince et Cap-Haïtien avec traitement prioritaire.",
            ht: "Sèvis 24 èdtan pou dokiman ijan ak ti pake pou Pòtoprens ak Okap avèk tretman priyorite."
        },
        link: {
            en: "Learn More",
            fr: "En Savoir Plus",
            ht: "Aprann Plis"
        }
    },
    {
        icon: `<svg width="100" height="100" viewBox="0 0 24 24">
                <path fill="#00aaff" d="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14l1.43,1.43 L2,7.71l1.43,1.43L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22l1.43-1.43L16.29,22l2.14-2.14l1.43,1.43l1.43-1.43 l-1.43-1.43L22,16.29L20.57,14.86z"/>
              </svg>`,
        title: {
            en: "Customs Clearance",
            fr: "Dédouanement",
            ht: "Dedwanman"
        },
        description: {
            en: "Expert assistance with Haitian customs regulations, documentation preparation, and expedited clearance for commercial and personal shipments.",
            fr: "Assistance experte concernant les réglementations douanières haïtiennes, préparation de documentation et dédouanement accéléré pour les envois commerciaux et personnels.",
            ht: "Asistans ekspè avèk règleman ladwàn ayisyen, preparasyon dokiman, ak dedwanman rapid pou ekspedisyon komèsyal ak pèsonèl."
        },
        link: {
            en: "Learn More",
            fr: "En Savoir Plus",
            ht: "Aprann Plis"
        }
    },
    {
        icon: `<svg width="100" height="100" viewBox="0 0 24 24">
                <path fill="#00aaff" d="M18.36,9l0.6,3H5.04l0.6-3H18.36 M20,4H4v2h16V4z M20,7H4l-1,5v2h1v6h10v-6h4v6h2v-6h1v-2L20,7z M6,18v-4h6v4H6z"/>
              </svg>`,
        title: {
            en: "Package Forwarding",
            fr: "Transfert de Colis",
            ht: "Transfè Pake"
        },
        description: {
            en: "Ship your packages to our Naples, Florida address from anywhere in the US, and we'll consolidate and forward them to Haiti on the next available flight.",
            fr: "Expédiez vos colis à notre adresse à Naples, Floride, depuis n'importe où aux États-Unis, et nous les regrouperons pour les envoyer en Haïti sur le prochain vol disponible.",
            ht: "Voye pake ou yo nan adrès nou nan Naples, Florid soti nenpòt kote nan Etazini, epi nou ap konsolide yo epi voye yo an Ayiti nan pwochen vòl ki disponib la."
        },
        link: {
            en: "Get Your Shipping Address",
            fr: "Obtenez Votre Adresse d'Expédition",
            ht: "Jwenn Adrès Ekspedisyon Ou"
        }
    },
    {
        icon: `<svg width="100" height="100" viewBox="0 0 24 24">
                <path fill="#00aaff" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,16.5c-2.49,0-4.5-2.01-4.5-4.5 S9.51,7.5,12,7.5s4.5,2.01,4.5,4.5S14.49,16.5,12,16.5z"/>
                <path fill="#00aaff" d="M12,9c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,9,12,9z"/>
              </svg>`,
        title: {
            en: "Shipment Tracking",
            fr: "Suivi d'Expédition",
            ht: "Swivi Ekspedisyon"
        },
        description: {
            en: "Advanced real-time tracking technology with SMS and email notifications for every stage of your Haiti-bound shipment from pickup to delivery.",
            fr: "Technologie de suivi avancée en temps réel avec notifications SMS et e-mail pour chaque étape de votre envoi vers Haïti, de l'enlèvement à la livraison.",
            ht: "Teknoloji swivi an tan reyèl avanse avèk notifikasyon SMS ak imèl pou chak etap ekspedisyon ou nan direksyon Ayiti soti nan ranmasaj rive nan livrezon."
        },
        link: {
            en: "Track Your Package",
            fr: "Suivre Votre Colis",
            ht: "Swiv Pake Ou"
        }
    }
];

// Features data
const featuresData = [
    {
        icon: "✓",
        title: {
            en: "Haiti Specialists",
            fr: "Spécialistes d'Haïti",
            ht: "Espesyalis Ayiti"
        },
        description: {
            en: "With over 15 years of experience shipping to Haiti, we offer unmatched expertise in local regulations and customs procedures.",
            fr: "Avec plus de 15 ans d'expérience d'expédition vers Haïti, nous offrons une expertise inégalée des réglementations locales et des procédures douanières.",
            ht: "Avèk plis pase 15 ane eksperyans nan ekspedisyon an Ayiti, nou ofri ekspertiz san parèy nan règleman lokal ak pwosedi ladwàn."
        }
    },
    {
        icon: "✓",
        title: {
            en: "Convenient Forwarding Service",
            fr: "Service de Transfert Pratique",
            ht: "Sèvis Transfè Pratik"
        },
        description: {
            en: "Ship to our Naples, Florida address from anywhere in the US and we'll handle the international leg to Haiti for you.",
            fr: "Expédiez à notre adresse à Naples, Floride, de n'importe où aux États-Unis et nous nous occuperons du transport international vers Haïti pour vous.",
            ht: "Voye nan adrès nou nan Naples, Florid soti nenpòt kote nan Etazini epi n ap jere etap entènasyonal la pou Ayiti pou ou."
        }
    },
    {
        icon: "✓",
        title: {
            en: "Haiti Relief Support",
            fr: "Soutien aux Secours en Haïti",
            ht: "Sipò pou Sekou Ayiti"
        },
        description: {
            en: "Special rates and expedited service for humanitarian aid and disaster relief shipments to Haiti.",
            fr: "Tarifs spéciaux et service accéléré pour l'aide humanitaire et les envois de secours en cas de catastrophe vers Haïti.",
            ht: "Pri espesyal ak sèvis akselere pou èd imanitè ak ekspedisyon sekou aprè dezas pou Ayiti."
        }
    },
    {
        icon: "✓",
        title: {
            en: "Dedicated Support",
            fr: "Support Dédié",
            ht: "Sipò Dedye"
        },
        description: {
            en: "Personal account managers and 24/7 customer service for all your shipping needs.",
            fr: "Gestionnaires de compte personnels et service client 24/7 pour tous vos besoins d'expédition.",
            ht: "Manadjè kont pèsonèl ak sèvis kliyan 24/7 pou tout bezwen ekspedisyon ou yo."
        }
    }
];

// Steps data
const stepsData = [
    {
        number: "1",
        title: {
            en: "Ship to Our Florida Address",
            fr: "Expédiez à Notre Adresse en Floride",
            ht: "Voye nan Adrès Nou nan Florid"
        },
        description: {
            en: "Send your packages from anywhere in the US to our processing center in Naples, Florida",
            fr: "Envoyez vos colis de n'importe où aux États-Unis vers notre centre de traitement à Naples, Floride",
            ht: "Voye pake ou yo soti nenpòt kote nan Etazini nan sant trètman nou an nan Naples, Florid"
        }
    },
    {
        number: "2",
        title: {
            en: "We Process Your Shipment",
            fr: "Nous Traitons Votre Envoi",
            ht: "Nou Trete Pake Ou a"
        },
        description: {
            en: "We handle all customs documentation and prepare your package for international shipping",
            fr: "Nous gérons toute la documentation douanière et préparons votre colis pour l'expédition internationale",
            ht: "Nou jere tout dokiman ladwàn yo epi nou prepare pake ou pou ekspedisyon entènasyonal"
        }
    },
    {
        number: "3",
        title: {
            en: "Delivery to Haiti",
            fr: "Livraison en Haïti",
            ht: "Livrezon an Ayiti"
        },
        description: {
            en: "Your package is delivered directly to Port-au-Prince or Cap-Haïtien via our next scheduled flight",
            fr: "Votre colis est livré directement à Port-au-Prince ou Cap-Haïtien via notre prochain vol prévu",
            ht: "Pake ou a livre dirèkteman nan Pòtoprens oswa Okap nan pwochen vòl pwograme nou an"
        }
    }
];

// Stats data
const statsData = [
    {
        number: "50+",
        label: {
            en: "US Cities Serviced",
            fr: "Villes Américaines Desservies",
            ht: "Vil Etazini ki Desèvi"
        }
    },
    {
        number: "42K+",
        label: {
            en: "Haiti Shipments Yearly",
            fr: "Expéditions Annuelles vers Haïti",
            ht: "Ekspedisyon Ayiti Chak Ane"
        }
    },
    {
        number: "99.1%",
        label: {
            en: "On-Time Delivery",
            fr: "Livraison à Temps",
            ht: "Livrezon Alè"
        }
    },
    {
        number: "3,800+",
        label: {
            en: "Regular Haiti Clients",
            fr: "Clients Réguliers en Haïti",
            ht: "Kliyan Regilye an Ayiti"
        }
    }
];

// Testimonials data
const testimonialsData = [
    {
        text: {
            en: "ZX Shipping has been our exclusive partner for sending medical supplies to our clinic in Port-au-Prince for over 5 years. Their knowledge of Haitian customs procedures and reliable air service has been invaluable to our operations, especially during emergency situations.",
            fr: "ZX Shipping est notre partenaire exclusif pour l'envoi de fournitures médicales à notre clinique de Port-au-Prince depuis plus de 5 ans. Leur connaissance des procédures douanières haïtiennes et leur service aérien fiable ont été inestimables pour nos opérations, surtout pendant les situations d'urgence.",
            ht: "ZX Shipping se patnè eksklizif nou pou voye founiti medikal nan klinik nou an Pòtoprens pandan plis pase 5 ane. Konesans yo sou pwosedi ladwàn ayisyen ak sèvis ayeryen fyab yo te gen anpil valè pou operasyon nou yo, espesyalman pandan sitiyasyon ijans yo."
        },
        author: "Dr. Marie Laurent",
        role: {
            en: "Director, Haiti Health Initiative",
            fr: "Directrice, Initiative Santé Haïti",
            ht: "Direktris, Inisyativ Sante Ayiti"
        }
    }
];