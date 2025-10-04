'use client';

import { useState } from 'react';
import Papa from 'papaparse';
import FileUpload from '../components/FileUpload';
import CsvTable from '../components/CsvTable';

interface CsvRow {
  filename: string;
  abs_path: string;
  alt_text: string;
  [key: string]: string;
}

export default function Home() {
  const [csvData, setCsvData] = useState<CsvRow[]>([]);
  const [images, setImages] = useState<{ [filename: string]: string }>({});

  const handleFilesUploaded = (files: File[]) => {
    const csvFile = files.find(file => file.name.endsWith('.csv'));
    const imageFiles = files.filter(file => file.type.startsWith('image/'));

    if (csvFile) {
      Papa.parse(csvFile, {
        header: true,
        complete: (results) => {
          setCsvData(results.data as CsvRow[]);
        },
      });
    }

    const imageMap: { [filename: string]: string } = {};
    imageFiles.forEach(file => {
      imageMap[file.name] = URL.createObjectURL(file);
    });
    setImages(imageMap);
  };

  const handleDownload = (data: CsvRow[]) => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'edited.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Alt Text Web App</h1>
      {!csvData.length ? (
        <FileUpload onFilesUploaded={handleFilesUploaded} />
      ) : (
        <CsvTable csvData={csvData} images={images} onDownload={handleDownload} />
      )}
    </div>
  );
}
