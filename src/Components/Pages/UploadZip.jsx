import React, { useState } from "react";

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

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://website-backend-dbfu.onrender.com/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setMsg(`Uploaded successfully: ${data.filename}`);
      } else {
        setMsg("Upload failed");
      }
    } catch (err) {
      console.error(err);
      setMsg("Error during upload");
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
