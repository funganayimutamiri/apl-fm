import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                          <p> Great You're logged in!</p>
                          <br /> 
                          <p>Please navigate to the the "Image Upload" page were you can upload an image file from your device by selecting it through the upload interface. You also have the option to add a brief description of the image.</p>
                          <br />
                          <p> To complete the upload process, simply click the "Upload" button. The system handles the file transfer securely, ensuring that your image is stored safely in Azure Blob Storage. Any errors during the upload will be communicated clearly on the page, allowing you to take the necessary steps to resolve any issues.</p>
                          <br />
                          <p>Happy uploading! &#128640;</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
