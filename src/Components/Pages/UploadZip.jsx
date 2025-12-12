import React, { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";

function UploadZip() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(""); // upload status
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  // Fetch files from Supabase storage
  const fetchFiles = async () => {
    setLoading(true);
    setFetchError(null);
    try {
      console.log("Attempting to fetch files from 'zips' bucket...");
      
      const { data, error } = await supabase.storage
        .from("zips")
        .list("", {
          limit: 100,
          offset: 0,
        });

      console.log("Supabase response - data:", data);
      console.log("Supabase response - error:", error);

      if (error) {
        console.error("Error fetching files:", error);
        console.error("Error details:", JSON.stringify(error, null, 2));
        setFetchError("Failed to fetch files: " + error.message);
        setUploadedFiles([]);
        
        // Try alternative method using REST API
        console.log("Attempting alternative fetch method...");
        await fetchFilesAlternative();
      } else {
        console.log("Raw response from Supabase:", data);
        console.log("Number of items received:", (data || []).length);
        console.log("Type of data:", typeof data);
        console.log("Is array?", Array.isArray(data));
        
        // Handle case where data might be null or undefined
        if (!data) {
          console.warn("Data is null or undefined");
          setFetchError("Received empty response from Supabase. The bucket might not allow listing.");
          setUploadedFiles([]);
          return;
        }
        
        // Filter out folders - keep all items that have a name
        const filesOnly = (data || []).filter(item => {
          return item && item.name && item.name.length > 0;
        });
        
        console.log("Files after filtering:", filesOnly);
        
        // Sort by created_at descending if available, otherwise by name
        const sortedData = filesOnly.sort((a, b) => {
          if (a.created_at && b.created_at) {
            return new Date(b.created_at) - new Date(a.created_at);
          }
          return a.name.localeCompare(b.name);
        });
        
        setUploadedFiles(sortedData);
        setFetchError(null);
        
        if (sortedData.length === 0) {
          if ((data || []).length > 0) {
            console.warn("Items found but filtered out. Raw data:", data);
            setFetchError(`Found ${(data || []).length} item(s) but none matched file criteria. Check console for details.`);
          } else {
            console.log("No files found in storage bucket 'zips'");
            setFetchError("No files found. Make sure the bucket allows public listing in RLS policies.");
          }
        }
      }
    } catch (err) {
      console.error("Exception while fetching files:", err);
      console.error("Exception stack:", err.stack);
      setFetchError("Unexpected error: " + err.message);
      setUploadedFiles([]);
    } finally {
      setLoading(false);
    }
  };

  // Alternative method using REST API directly
  const fetchFilesAlternative = async () => {
    try {
      const supabaseUrl = 'https://nexrfifcymcgnuwslimw.supabase.co';
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5leHJmaWZjeW1jZ251d3NsaW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MTMxMzEsImV4cCI6MjA2NDk4OTEzMX0.zozXrk8D_EODOvQPYsOoDDgbmUnvK2EJOyV237u1LzM';
      
      console.log("Trying alternative REST API method...");
      const response = await fetch(`${supabaseUrl}/storage/v1/object/list/zips?limit=100`, {
        method: 'GET',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      });
      
      console.log("Alternative API response status:", response.status);
      const result = await response.json();
      console.log("Alternative fetch result:", result);
      
      if (response.ok) {
        if (Array.isArray(result)) {
          const filesOnly = result.filter(item => item && item.name);
          console.log("Alternative method found files:", filesOnly.length);
          if (filesOnly.length > 0) {
            setUploadedFiles(filesOnly);
            setFetchError(null);
            setLoading(false);
          }
        } else {
          console.error("Alternative API returned non-array:", result);
        }
      } else {
        console.error("Alternative fetch failed with status:", response.status, result);
        if (response.status === 403 || response.status === 401) {
          setFetchError("Permission denied. The bucket needs RLS policies to allow listing. Check console for details.");
        }
      }
    } catch (err) {
      console.error("Alternative fetch exception:", err);
    }
  };

  // Fetch files on component mount - try both methods
  useEffect(() => {
    fetchFiles();
    // Also try alternative method immediately
    fetchFilesAlternative();
  }, []);

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
        setStatus("✅ Uploaded successfully!");
        setFile(null); // Reset file input
        // Refresh the file list
        fetchFiles();
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Unexpected error during upload");
    }
  };

  const handleDownload = (filename) => {
    const publicUrl = `https://nexrfifcymcgnuwslimw.supabase.co/storage/v1/object/public/zips/${filename}`;
    window.open(publicUrl, "_blank");
  };

  const formatFileSize = (fileItem) => {
    // Try different possible locations for file size
    const size = fileItem.metadata?.size || fileItem.size || null;
    if (!size) return "Unknown size";
    if (size < 1024) return size + " B";
    if (size < 1024 * 1024) return (size / 1024).toFixed(2) + " KB";
    return (size / (1024 * 1024)).toFixed(2) + " MB";
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto", color: "white" }}>
      <h2 style={{ color: "white" }}>Upload a .zip File to Supabase</h2>
      <div style={{ marginBottom: "2rem" }}>
        <input type="file" accept=".zip" onChange={handleFileChange} style={{ color: "white" }} />
        <br />
        <button onClick={handleUpload} style={{ marginTop: "1rem", padding: "0.5rem 1rem", color: "white" }}>
          Upload
        </button>
        {status && (
          <p style={{ marginTop: "1rem", whiteSpace: "pre-wrap", color: "white" }}>{status}</p>
        )}
      </div>

      <div style={{ marginTop: "3rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <h3 style={{ color: "white" }}>Available Files for Download</h3>
          <button onClick={fetchFiles} disabled={loading} style={{ padding: "0.5rem 1rem", color: "white" }}>
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {loading && uploadedFiles.length === 0 ? (
          <p style={{ color: "white" }}>Loading files...</p>
        ) : (
          <>
            {fetchError && (
              <div style={{ padding: "1rem", backgroundColor: "rgba(255, 193, 7, 0.2)", border: "1px solid #ffc107", borderRadius: "4px", marginBottom: "1rem", color: "white" }}>
                <strong style={{ color: "white" }}>⚠️ {fetchError}</strong>
                <div style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "white" }}>
                  <p><strong style={{ color: "white" }}>To fix this issue:</strong></p>
                  <ol style={{ marginLeft: "1.5rem", marginTop: "0.5rem", color: "white" }}>
                    <li>Open your Supabase dashboard</li>
                    <li>Go to Storage → Policies</li>
                    <li>For the "zips" bucket, add a policy that allows SELECT (list) operations</li>
                    <li>The policy should be: <code style={{ color: "white", backgroundColor: "rgba(0,0,0,0.3)", padding: "2px 4px", borderRadius: "3px" }}>SELECT</code> for <code style={{ color: "white", backgroundColor: "rgba(0,0,0,0.3)", padding: "2px 4px", borderRadius: "3px" }}>public</code> role</li>
                  </ol>
                  <p style={{ marginTop: "0.5rem", color: "white" }}>
                    Check the browser console (F12) for detailed error messages.
                  </p>
                </div>
              </div>
            )}
            {uploadedFiles.length === 0 && !loading ? (
              <div>
                <p style={{ color: "white" }}>No files available yet. Upload a file to get started!</p>
                <details style={{ marginTop: "1rem", padding: "0.5rem", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "4px" }}>
                  <summary style={{ cursor: "pointer", color: "white" }}>Debug Info</summary>
                  <pre style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "white" }}>
                    {JSON.stringify({ fileCount: uploadedFiles.length, files: uploadedFiles }, null, 2)}
                  </pre>
                </details>
              </div>
            ) : uploadedFiles.length > 0 ? (
          <div style={{ border: "1px solid rgba(255, 255, 255, 0.3)", borderRadius: "8px", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid rgba(255, 255, 255, 0.3)", color: "white" }}>File Name</th>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid rgba(255, 255, 255, 0.3)", color: "white" }}>Size</th>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid rgba(255, 255, 255, 0.3)", color: "white" }}>Uploaded</th>
                  <th style={{ padding: "0.75rem", textAlign: "center", borderBottom: "2px solid rgba(255, 255, 255, 0.3)", color: "white" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {uploadedFiles.map((fileItem, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
                    <td style={{ padding: "0.75rem", color: "white" }}>{fileItem.name}</td>
                    <td style={{ padding: "0.75rem", color: "white" }}>{formatFileSize(fileItem)}</td>
                    <td style={{ padding: "0.75rem", color: "white" }}>{formatDate(fileItem.created_at || fileItem.updated_at)}</td>
                    <td style={{ padding: "0.75rem", textAlign: "center" }}>
                      <button
                        onClick={() => handleDownload(fileItem.name)}
                        style={{
                          padding: "0.5rem 1rem",
                          backgroundColor: "#007bff",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

export default UploadZip;
