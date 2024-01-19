import { useState } from 'react';
import Head from 'next/head';
import DragDropArea from '../components/DragDropArea';
import VideoProcessor from '../components/VideoProcessor';
import ProgressBar from '../components/ProgressBar';

export default function Home() {}
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [processingComplete, setProcessingComplete] = useState(false);

  const handleFilesDrop = (acceptedFiles) => {
    // Update the state with the uploaded files
    setUploadedFiles(acceptedFiles.map((file) => URL.createObjectURL(file)));
  };

  const handleProcessingComplete = () => {
    // Set the state to indicate processing is complete
    setProcessingComplete(true);
  };

  return (
    <div>
      <Head>
        <title>Video Processing App</title>
        <meta name="description" content="Combine videos and images into a single video" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Video Processing App</h1>
        <DragDropArea onFilesDrop={handleFilesDrop} />
        {uploadedFiles.length > 0 && <VideoProcessor files={uploadedFiles} onProcessingComplete={handleProcessingComplete} />}
        {processingComplete && <ProgressBar progress={100} />}
      </main>

      <footer>
        <p>Video Processing App</p>
      </footer>
    </div>
  );


