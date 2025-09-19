`@umeshp1212/react-downloader`
This package provides a custom React hook that simplifies the use of the core download functionality in your React applications.

**Installation**
npm install @umeshp1212/react-downloader

**Usage**
You can use the useDownload hook in any functional component.
```
import { useDownload } from '@umeshp1212/react-downloader';
import React from 'react';

const ReportButton = () => {
  // Use the hook to get the download function
  const handleDownload = useDownload();

  const handleClick = () => {
    // Call the download function with your URL and filename
    const fileUrl = '[https://example.com/files/report.pdf](https://example.com/files/report.pdf)';
    const fileName = 'Quarterly-Report.pdf';
    handleDownload(fileUrl, fileName);
  };

  return (
    <button onClick={handleClick}>
      Download Quarterly Report
    </button>
  );
};

export default ReportButton;
```