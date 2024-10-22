Apl Funganayi mutamiri

Overview
This project is a web application built using PHP Laravel with Inertia to connect the backend and React for the frontend. The app allows users to upload images to Azure Blob Storage while meeting specific requirements for image handling and storage.

Technology Stack
Backend: PHP Laravel (Inertia for connecting Laravel and React)
Frontend: React (with reusable components)

Database: SQLite

Requirements Met
The app is written in PHP.
A UI framework of choice (React) is used.
Only JPG or PNG images are allowed for upload.
The maximum dimensions for stored images are 1024x1024.
Images are stored in the apl-recruitment-images Azure Blob Container.
Details of uploaded images are stored in a database for audit purposes.
On successful upload, a confirmation message is displayed to the user alongside the stored image.
Error scenarios are handled gracefully where identified. utilizing reusable components.

Installation
Clone the repository 

Navigate to the project directory.

Install the required dependencies: composer install

Run the database migrations: php artisan migrate

Start the local development server: php artisan serve

Build the frontend assets: npm run build

Usage

To get started with our web app, simply register by providing a generic email address and a password. Please note that the password must be at least 8 characters long to ensure your account's security. Once you've filled in the necessary information, you'll be ready to explore all the features our app has to offer!

Navigate to the "Image Upload" page, where you can select an image file from your device.
You have the option to add a brief description of the image.
Click the "Upload" button to complete the upload process.
The system securely transfers the file and stores it in Azure Blob Storage.
Any errors during the upload will be communicated clearly on the page.


Azure settings e.g Azure connection string, will not be included in my .env due to my git.ignore settings and following best practises.

AZURE_BLOB_CONNECTION_STRING=""
AZURE_BLOB_CONTAINER="apl-recruitment-images"