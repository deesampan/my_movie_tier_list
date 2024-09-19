const { generateUploadButton, generateUploadDropzone } = require("@uploadthing/react");
const { ourFileRouter } = require("../api/uploadthing/core"); // Adjust the path as needed

const UploadButton = generateUploadButton();
const UploadDropzone = generateUploadDropzone();

module.exports = { UploadButton, UploadDropzone };
