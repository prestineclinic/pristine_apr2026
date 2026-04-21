import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQS } from '../lib/faqs';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SITE_URL = "https://pristinephysio.com";
const DEFAULT_TITLE = "Physiotherapist in Koramangala, Bengaluru | Pristine Clinic";
const DEFAULT_DESCRIPTION = "Pristine Clinic in Koramangala 8th Block, Bengaluru — expert physiotherapy, osteopathy, neuro & pediatric rehab, PNF therapy and pilates. Book a physiotherapist near you today.";

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical = SITE_URL + "/",
  ogType = "website",
  ogImage = SITE_URL + "/images/outsideclinic.jpg",
}) => {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "Physiotherapist", "LocalBusiness"],
        "@id": `${SITE_URL}/#clinic`,
        "name": "Pristine Clinic",
        "alternateName": ["Pristine Physio", "PristinePhysio", "Pristine Physiotherapy & Rehabilitation Center"],
        "description": DEFAULT_DESCRIPTION,
        "image": [
          `${SITE_URL}/images/outsideclinic.jpg`,
          `${SITE_URL}/images/innerclinic.jpg`,
        ],
        "logo": `${SITE_URL}/images/logo.png`,
        "url": SITE_URL,
        "telephone": "+91-6364-635-943",
        "email": "prestine.clinic@gmail.com",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No 50 hig, KHB Colony, Koramangala 8th Block, Koramangala",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560095",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9352,
          "longitude": 77.6245
        },
        "hasMap": "https://maps.app.goo.gl/X6yLj491oM27uxEz6",
        "areaServed": [
          { "@type": "City", "name": "Bengaluru" },
          { "@type": "AdministrativeArea", "name": "Koramangala" },
          { "@type": "AdministrativeArea", "name": "HSR Layout" },
          { "@type": "AdministrativeArea", "name": "BTM Layout" },
          { "@type": "AdministrativeArea", "name": "Indiranagar" },
          { "@type": "AdministrativeArea", "name": "Ejipura" },
          { "@type": "AdministrativeArea", "name": "Sarjapur Road" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "20:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "09:00",
            "closes": "13:00"
          }
        ],
        "medicalSpecialty": ["Physiotherapy", "Osteopathy", "Rehabilitation", "Neurology", "SportsMedicine", "Pediatrics"],
        "availableService": [
          { "@type": "MedicalTherapy", "name": "Physiotherapy" },
          { "@type": "MedicalTherapy", "name": "Osteopathy" },
          { "@type": "MedicalTherapy", "name": "Neuro & Pediatric Rehabilitation" },
          { "@type": "MedicalTherapy", "name": "PNF Therapy" },
          { "@type": "MedicalTherapy", "name": "Pilates" },
          { "@type": "MedicalTherapy", "name": "Manual Therapy" },
          { "@type": "MedicalTherapy", "name": "Sports Injury Rehabilitation" },
          { "@type": "MedicalTherapy", "name": "Posture Correction" }
        ],
        "knowsAbout": [
          "Cervical pain", "Lower back pain", "Sciatica", "Knee osteoarthritis",
          "Tennis elbow", "Golfer's elbow", "Frozen shoulder", "Ligament sprains",
          "Stroke recovery", "Guillain-Barré Syndrome", "Postural pain",
          "Tech neck", "Sports injury rehabilitation"
        ],
        "sameAs": [
          "https://facebook.com/pristineclinic",
          "https://instagram.com/pristineclinic"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Pristine Clinic",
        "publisher": { "@id": `${SITE_URL}/#clinic` },
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${SITE_URL}/?s={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        "url": canonical,
        "name": title,
        "description": description,
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/#clinic` },
        "primaryImageOfPage": ogImage,
        "inLanguage": "en-IN"
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        "mainEntity": FAQS.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL + "/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": SITE_URL + "/#services" },
          { "@type": "ListItem", "position": 3, "name": "Conditions", "item": SITE_URL + "/#about" },
          { "@type": "ListItem", "position": 4, "name": "Contact", "item": SITE_URL + "/#contact" }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Pristine Clinic" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
};
