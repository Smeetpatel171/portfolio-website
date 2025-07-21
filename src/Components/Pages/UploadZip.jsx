import React, { useState } from "react";
import { supabase } from "./utils/supabaseClient";

function UploadZip() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(""); // upload status

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.name.endsWith(".zip")) {
      setFile(selected);
      setStatus("");
    } else {
      setFile(null);
      setStatus("❌ Only .zip files are allowed");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      return alert("Please select a .zip file");
    }

    const filename = `${Date.now()}-${file.name}`;
    setStatus("⏳ Starting upload...");

    try {
      setStatus("📤 Uploading...");

      const { data, error } = await supabase.storage
        .from("zips")
        .upload(filename, file, {
          contentType: "application/zip",
          upsert: false,
        });

      if (error) {
        console.error(error);
        setStatus("❌ Upload failed: " + error.message);
      } else {
        const publicUrl = `https://nexrfifcymcgnuwslimw.supabase.co/storage/v1/object/public/zips/${filename}`;
        setStatus("✅ Uploaded successfully! URL: " + publicUrl);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Unexpected error during upload");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h2>Upload a .zip File to Supabase</h2>
      <input type="file" accept=".zip" onChange={handleFileChange} />
      <br />
      <button onClick={handleUpload} style={{ marginTop: "1rem" }}>
        Upload
      </button>
      {status && (
        <p style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>{status}</p>
      )}
    </div>
  );
}

export default UploadZip;
