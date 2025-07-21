import React, { useState } from "react";
import { supabase } from "./utils/supabaseClient";

function UploadZip() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.name.endsWith(".zip")) {
      setFile(selected);
      setMsg("");
    } else {
      setMsg("Only .zip files allowed");
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a .zip file");

    const filename = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("zips")
      .upload(filename, file, {
        contentType: "application/zip",
        upsert: false,
      });

    if (error) {
      console.error("Upload error:", error.message);
      setMsg("Upload failed: " + error.message);
    } else {
      const publicUrl = `https://nexrfifcymcgnuwslimw.supabase.co/storage/v1/object/public/zips/${filename}`;
      setMsg("Uploaded successfully! URL: " + publicUrl);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload a .zip File</h2>
      <input type="file" accept=".zip" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default UploadZip;
