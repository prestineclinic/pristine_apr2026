import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Pristine Clinic | Expert Physiotherapy & Rehabilitation in Koramangala, Bengaluru",
  description = "Pristine Clinic offers expert physiotherapy, osteopathy, neuro rehab, PNF therapy, and pilates in Koramangala, Bengaluru. Trusted care for pain relief and rehabilitation.",
  canonical = "https://pristinephysio.com",
  ogType = "website",
  ogImage = "/images/outsideclinic.jpg",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="physiotherapy clinic Bangalore, Pristine Clinic, physiotherapist Bangalore, pain relief, rehabilitation, physiotherapy near me, osteopathy koramangala, PNF therapy bangalore, pilates bangalore" />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Pristine Clinic" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@pristineclinic" />

      {/* Local SEO - Medical Clinic Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Pristine Clinic",
          "alternateName": "Pristine Physio - Physiotherapy & Rehabilitation Center",
          "image": ogImage,
          "@id": "https://pristinephysio.com/#clinic",
          "url": "https://pristinephysio.com",
          "telephone": "+91-6364-635-943",
          "priceRange": "$$",
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
          "medicalSpecialty": ["Physiotherapy", "Osteopathy", "Rehabilitation", "Neurology"],
          "availableService": [
            {
              "@type": "MedicalTherapy",
              "name": "Physiotherapy"
            },
            {
              "@type": "MedicalTherapy",
              "name": "Osteopathy"
            },
            {
              "@type": "MedicalTherapy",
              "name": "Neuro & Pediatric Rehabilitation"
            },
            {
              "@type": "MedicalTherapy",
              "name": "PNF Therapy"
            },
            {
              "@type": "MedicalTherapy",
              "name": "Pilates"
            }
          ],
          "sameAs": [
            "https://facebook.com/pristineclinic",
            "https://instagram.com/pristineclinic"
          ]
        })}
      </script>
    </Helmet>
  );
};
