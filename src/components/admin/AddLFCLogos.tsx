/* eslint-disable react/jsx-key */
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

import { LogoCategory } from '@/types/logoCategory';

import { UploadLogo } from '../shared/Upload/UploadLogo';
import { Loader } from '../ui/Loader';

const CREATE_LOGO = gql`
  mutation ($category: String!, $urls: [String!]!) {
    createLogos(category: $category, urls: $urls) {
      url
    }
  }
`;

export const AddLFCLogos = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [success, setSuccess] = useState<string | null>(null);
  const [createLogos, { loading, error }] = useMutation(CREATE_LOGO);

  const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleCreateLogos = (urls: string[]) => {
    createLogos({
      variables: {
        urls,
        category: selectedCategory,
      },
      onCompleted: () =>
        setSuccess(`Logos uploadés pour la catégorie ${selectedCategory}`),
    });
  };

  return (
    <div>
      <p className="font-semibold">Ajouter des logos LFC</p>
      <div className="flex gap-2">
        <select
          onChange={handleSelectCategory}
          className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option selected>Sélectionner une catégorie</option>
          {Object.keys(LogoCategory).map((key) => (
            <option selected={key === selectedCategory} value={key}>
              {LogoCategory[key as keyof typeof LogoCategory]}
            </option>
          ))}
        </select>
        <UploadLogo isMultiple onUrls={handleCreateLogos}>
          {null}
        </UploadLogo>
      </div>
      {success && <p>{success}</p>}
      {error && <p>ERREUR : {error.message}</p>}
      {loading && <Loader />}
    </div>
  );
};
