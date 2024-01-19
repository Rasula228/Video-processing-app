import { useState, useEffect } from 'react';
import ffmpeg from 'ffmpeg-static';

const VideoProcessor = ({ files, onProcessingComplete }) => {
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (files.length > 0) {
      setProcessing(true);

      // Perform video processing using FFMPEG here
      // This is a simplified example, and you may need to customize it based on your requirements

      // For simplicity, combining videos into one using the concat filter
      const command = `${ffmpeg} -i ${files.join('|')} -filter_complex concat=n=${files.length}:v=1:a=1 -strict -2 output.mp4`;

      const process = window.require('child_process').exec;

      process(command, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
        } else {
          console.log(stdout);
          setProcessing(false);
          onProcessingComplete();
        }
      });
    }
  }, [files, onProcessingComplete]);

  return <div>{processing && <p>Processing...</p>}</div>;
};

export default VideoProcessor;
