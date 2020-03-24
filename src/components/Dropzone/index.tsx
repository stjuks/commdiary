import React, { useCallback, useState } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { DropzoneContainer } from './styles';
import { FiFile } from 'react-icons/fi';

interface DropzoneProps {
  onChange: (files: File[]) => any;
  dropzoneOptions?: DropzoneOptions;
}

const Dropzone: React.FC<DropzoneProps> = ({ dropzoneOptions, onChange }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (files: File[]) => {
    setFiles(files);
    onChange(files);
  };

  const onDrop = useCallback(handleChange, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop, ...dropzoneOptions });

  return (
    <DropzoneContainer {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps({ className: 'dropzone-input' })} />
      {files.length > 0 ? (
        files.map((file, index) => (
          <div className="file-item" key={index}>
            <FiFile className="file-icon" />
            <span className="filename">{file.name}</span>
          </div>
        ))
      ) : (
        <>
          Lohista JSON fail siia või vajuta,
          <br />
          et fail valida...
        </>
      )}
    </DropzoneContainer>
  );
};

export default Dropzone;
