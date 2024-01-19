import { useDropzone } from 'react-dropzone';

const DragDropArea = ({ onFilesDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onFilesDrop,
    accept: 'video/*,image/*',
  });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <p>Drag and drop video or image files here, or click to select files</p>
    </div>
  );
};

export default DragDropArea;
