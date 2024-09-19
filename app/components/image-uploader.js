"use client"

const { UploadButton } = require("../utils/uploadthing");
import "@uploadthing/react/styles.css";

function ImageUploader() {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        console.log(res[0].appUrl)
        alert("Upload Completed");
      }}
      onUploadError={(error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}

module.exports = { ImageUploader };
