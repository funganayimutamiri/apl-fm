<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Laravel\Facades\Image; 
use MicrosoftAzure\Storage\Blob\BlobRestProxy;
use App\Models\UploadImages;
use Inertia\Inertia;

class ImageController extends Controller
{


    public function upload(Request $request)
    {
        // Validate the request
        $request->validate([
            'file' => 'required|image|mimes:jpg,png|max:1024', 
            'description' => 'nullable|string|max:255',        
        ]);
    
        try {
            $file = $request->file('file');
            $fileName = time() . '-' . $file->getClientOriginalName();
    
            // Get image dimensions and file size
            $image = Image::read($file); 
            $width = $image->width();
            $height = $image->height();
            $fileSize = $file->getSize(); // For file sizes I am messauring in bytes
    
            // Set file path based on environment -> this variable can be updated to easly test DB storage.
            $filePath = $this->handleFileUpload($file, $fileName);
    
            // Store image details and description in the database
            UploadImages::create([
                'file_name' => $fileName,
                'path' => $filePath,
                'file_size' => $fileSize,
                'width' => $width,
                'height' => $height,
                'description' => $request->input('description'),
            ]);
    
            // If successful, redirect with success
            return redirect()->route('upload')->with('success', 'Image uploaded successfully!');
        } catch (\Exception $e) {
            // Return error with Inertia response
            return back()->withErrors([
                'error' => 'Image upload failed: ' . $e->getMessage(),
            ])->withInput();
        }
    }
    
    

    /**
     * Handle file upload to Azure
     *
     * @param \Illuminate\Http\UploadedFile $file
     * @param string $fileName
     * @return string
     */
    private function handleFileUpload($file, $fileName)
    {
        if (env('APP_ENV') === 'offline') {
            // Save to local storage
            return $file->storeAs('uploads', $fileName);
        } else {
            try {
                // Upload to Azure Blob Storage
                $blobClient = BlobRestProxy::createBlobService(env('AZURE_BLOB_CONNECTION_STRING'));
                $content = file_get_contents($file->getPathName());
                $blobClient->createBlockBlob(env('AZURE_BLOB_CONTAINER'), $fileName, $content);
                return "https://your_storage_account.blob.core.windows.net/" . env('AZURE_BLOB_CONTAINER') . '/' . $fileName;
            } catch (\Exception $e) {
                throw new \Exception('Azure upload failed: ' . $e->getMessage());
            }
        }
    }
    
}
