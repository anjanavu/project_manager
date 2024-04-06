import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview);

const FileUpload = () => {
  return (
    <div>
          <label   class="mb-1 block text-sm font- text-gray-900">
        Attachments
      </label>
      <FilePond
       maxFiles={3}
      labelIdle='Drop attachments here or click to browse'
        allowMultiple={true}
        server={{
          process: (fieldName, file, metadata, load, error, progress, abort) => {
            const formData = new FormData();
            formData.append(fieldName, file, file.name);

            fetch('/upload-endpoint', {
              method: 'POST',
              body: formData,
              onUploadProgress: (event) => {
                progress(event.lengthComputable, event.loaded, event.total);
              },
              onComplete: (data) => {
                load(data);
              },
              onError: (err) => {
                error(err);
              },
              onAbort: () => {
                abort();
              }
            });
          }
        }}
      />
    </div>
  )
}

export default FileUpload
