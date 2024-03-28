"use client"

import Image from 'next/image';
import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import { UploaderBackground } from '@/components/shared/Upload/UploadBackground';
import { UploadLogo } from '@/components/shared/Upload/UploadLogo';
import { Loader } from '@/components/ui/Loader';
import { Logo, LogoCategory } from '@/types/logo';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const LOGOS = gql`
  query {
    logos {
      id
      category
      url
    }
  }
`;

// Définissez l'ordre souhaité des catégories
const categoriesOrder: LogoCategory[] = [
  "Tendances",
  "Basket-ball",
  "Université",
  "Handball",
  "Volley-ball",
  "Football",
  "Tennis",
  "Natation",
  "Athlétisme",
  "Rugby",
  "Judo",
  "Cyclisme",
  "Escrime",
  "Gymnastique",
  "Équitation",
  "Super-héros",
  "Animaux",
  "Chevalier",
  "Nourriture",
  "Musique",
  "Voyage",
  "Espace",
  "Fantaisie",
  "Dessins animés",
];

export default function SelectLogo() {
  const { data, loading } = useQuery(LOGOS);
  const [selectedLogoUrl, setSelectedLogoUrl] = useState<string | null>()
  const [customSelectedLogoUrl, setCustomSelectedLogoUrl] = useState<string | null>()

  // WHEN ON CONTIUNE GET LOGO URL FROM selectedLogoURL || customSelectedLogoUrl according to null status on each

  const trierLogosParCategorie = (logos: Logo[]): Record<LogoCategory, Logo[]> => {
    const logosParCategorie: Record<LogoCategory, Logo[]> = {} as Record<LogoCategory, Logo[]>;
    logos.forEach((logo) => {
      if (!logosParCategorie[logo.category]) {
        logosParCategorie[logo.category] = [];
      }
      logosParCategorie[logo.category].push(logo);
    });
    return logosParCategorie;
  };

  if (loading) {
    return (
      <div className="container flex justify-center items-center">
        <Loader />
      </div>
    )
  }

  if (data) {
    const logosParCategorie = trierLogosParCategorie(data.logos);

    // Tri des catégories selon l'ordre défini
    const orderedCategories = categoriesOrder.filter(category => Object.keys(logosParCategorie).includes(category));

    const selectLogo = (url: string) => {
      setSelectedLogoUrl(url);
      setCustomSelectedLogoUrl(null)
    }

    const customSelectedLogo = (url: string) => {
      setCustomSelectedLogoUrl(url);
      setSelectedLogoUrl(null);
    }

    return (
      <CheckoutWrapper
        currentStep={2}
        title="Quel logo souhaitez-vous utiliser ?"
        primaryButton={{
          label: 'Continuer',
          relativePathToNextPage: 'faceArriere',
        }}
      >
        <UploadLogo isMultiple={false} onUrl={customSelectedLogo}>
          <UploaderBackground text="Utiliser mon logo" />
        </UploadLogo>

        <div className='pt-5'>
          {
            customSelectedLogoUrl &&
            <div>
              <h2 className="text-xl font-bold mb-1">Votre logo</h2>
              <Image
                src={customSelectedLogoUrl}
                alt="logo-custom"
                width={150}
                height={150}
                className="border-4 border-yellow-300 rounded-lg p-1 animate-pulse mb-10"
              />
            </div>
          }
          {orderedCategories.map((category: LogoCategory) => {
            const logosForThisCategory = logosParCategorie[category];
            return (
              <div key={category} className='mb-10'>
                <h2 className="text-xl font-bold mb-1">{category}</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 place-items-center w-full gap-5">
                  {logosForThisCategory.map((logo) => (
                    <div key={logo.id} className={`cursor-pointer ${selectedLogoUrl === logo.url ? 'animate-pulse' : ''}`}>
                      <Image
                        src={logo.url}
                        alt={`logo-${logo.id}`}
                        width={150}
                        height={150}
                        onClick={() => selectLogo(logo.url)}
                        className={selectedLogoUrl === logo.url ? 'border-4 border-yellow-300 rounded-lg p-1' : 'border-4 border-white rounded-lg p-1'}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </CheckoutWrapper>
    );
  }
}
