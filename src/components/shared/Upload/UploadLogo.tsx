/* eslint-disable react/jsx-no-undef */
import { Loader } from "@/components/ui/Loader";
import { serverUrl } from "@/globals/serverUrl";
import { ReactNode, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG"];

export const UploadLogo: React.FC<{ children: ReactNode, isMultiple: boolean, onUrl: (url: string) => void }> = ({ children, isMultiple, onUrl }) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileChange = async (files: File[]) => {
        setLoading(true); // Activer le chargement pendant l'envoi des fichiers

        // Créer un objet FormData pour envoyer les fichiers
        const formData = new FormData();
        if (isMultiple) {
            Array.from(files).forEach((file) => {
                formData.append(`logos`, file);
            });
        } else {
            formData.append(`logo`, files[0]);
        }
        try {
            // Envoyer les fichiers au serveur
            const response = await fetch(`${serverUrl}/aws-s3/upload-${isMultiple ? 'logos' : 'logo'}`, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const responseData = await response.json();
                if (!isMultiple) {
                    onUrl(responseData.logo_url)
                }
                // Gérer la réponse du serveur si nécessaire
            } else {
                throw new Error('Erreur lors de la requête serveur');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi des fichiers:', error);
            // Gérer l'erreur si nécessaire
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <FileUploader handleChange={isMultiple ? handleFileChange : (file: File) => handleFileChange([file])} name={isMultiple ? "logos" : "file"} types={fileTypes} multiple={isMultiple}>
                {children}
            </FileUploader>
            {loading && <Loader />}
        </div>
    );
};
