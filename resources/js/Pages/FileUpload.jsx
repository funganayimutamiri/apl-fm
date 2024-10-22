import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const FileUpload = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [success, setSuccess] = useState(null);

    // Get errors from the page props
    const { errors } = usePage().props;

    const handleUpload = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', image);
        formData.append('description', description);

        // Clear previous success message
        setSuccess(null);

        Inertia.post('/upload', formData, {
            forceFormData: true,
            onSuccess: () => {
                setSuccess('Image uploaded successfully!');
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Upload Image To Azure Blob Storage
                </h2>
            }
        >
            <Head title="Upload Image" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                Upload an Image
                            </h1>

                            <form onSubmit={handleUpload} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="file-upload"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Select Image
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setImage(e.target.files[0])}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    {errors.file && (
                                        <div className="text-red-600 text-sm mt-1">
                                            {errors.file}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Image Description
                                    </label>
                                    <textarea
                                        id="description"
                                        placeholder="Enter image description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    {errors.description && (
                                        <div className="text-red-600 text-sm mt-1">
                                            {errors.description}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Upload
                                    </button>
                                </div>
                            </form>

                            {/* Success Message */}
                            {success && (
                                <div className="mt-4 text-green-600 text-sm">
                                    {success}
                                </div>
                            )}

                            {/* Error Messages */}
                            {errors.error && (
                                <div className="mt-4 text-red-600 text-sm">
                                    {errors.error}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default FileUpload;
