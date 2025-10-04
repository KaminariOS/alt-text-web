'use client';

import { useState } from 'react';
import Papa from 'papaparse';

interface CsvRow {
  filename: string;
  abs_path: string;
  alt_text: string;
  [key: string]: string;
}

interface CsvTableProps {
  csvData: CsvRow[];
  images: { [filename: string]: string }; // filename to object URL
  onDownload: (data: CsvRow[]) => void;
}

export default function CsvTable({ csvData, images, onDownload }: CsvTableProps) {
  const [data, setData] = useState<CsvRow[]>(csvData);

  const handleAltTextChange = (index: number, value: string) => {
    const newData = [...data];
    newData[index].alt_text = value;
    setData(newData);
  };

  const handleDownload = () => {
    onDownload(data);
  };

  return (
    <div>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {Object.keys(data[0] || {}).map((key) => (
              <th key={key} className="border border-gray-300 p-2">{key === 'abs_path' ? 'Image' : key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="h-50">
              {Object.keys(row).map((key) => (
                <td key={key} className="border border-gray-300 p-2 h-[300px]">
                  {key === 'abs_path' && images[row.filename] ? (
                    <img src={images[row.filename]} alt={row.alt_text} className="w-full h-full object-contain" />
                  ) : key === 'alt_text' ? (
                    <textarea
                      value={row.alt_text}
                      onChange={(e) => handleAltTextChange(index, e.target.value)}
                      className="w-full h-full border resize-none"
                    />
                  ) : (
                    row[key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Download CSV
      </button>
    </div>
  );
}
