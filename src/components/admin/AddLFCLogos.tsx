/* eslint-disable react/jsx-key */
import { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { valeursLogoCategory } from "@/types/logo"
import { UploadLogo } from "../shared/Upload/UploadLogo"
import { Loader } from "../ui/Loader"

const CREATE_LOGO = gql`
    mutation($category: String!, $urls: [String!]!){
    createLogos(category: $category, urls: $urls) {
        url
    }
    }
`

export const AddLFCLogos = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>()
    const [success, setSuccess] = useState<string | null>(null);
    const [createLogos, { loading, error }] = useMutation(CREATE_LOGO);

    const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    }

    const handleCreateLogos = (urls: string[]) => {
        createLogos({
            variables: {
                urls,
                category: selectedCategory
            },
            onCompleted: () => setSuccess(`Logos uploadés pour la catégorie ${selectedCategory}`),
        })
    }

    return (
        <div>
            <p className="font-semibold">Ajouter des logos LFC</p>
            <div className="flex gap-2">
                <select onChange={handleSelectCategory} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Sélectionner une catégorie</option>
                    {valeursLogoCategory.map(key => (
                        <option selected={key === selectedCategory} value={key}>{key}</option>
                    ))}
                </select>
                <UploadLogo isMultiple onUrls={handleCreateLogos}>{null}</UploadLogo>
            </div>
            {success && <p>{success}</p>}
            {error && <p>ERREUR : {error.message}</p>}
            {loading && <Loader />}
        </div >
    )
}