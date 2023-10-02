# Image Upload API

This is a simple API for performing image uploads. It allows users to upload their images to the server and provides URLs to access these images later.

## Key Features

- Upload images to the server.
- Retrieve URLs for the uploaded images.

## Technologies Used

- Node.js
- Express.js
- Multer (for managing file uploads)
- MongoDB (or another database for storing image metadata)

## How to Use

### Configuration

1. Clone this repository: `git clone https://github.com/erickbarrosr/image_upload_backend.git`
2. Navigate to the project directory: `cd image_upload_backend`
3. Install dependencies: `npm install`
4. To run: `npm run start`

### Environment Variables Configuration

Create a `.env` file in the project's root directory with the following environment variables:

1. `PORT=8080`
2. `UPLOAD_DIR=uploads`

## Contribution

Contributions are welcome! Feel free to open issues and pull requests to improve this API.
