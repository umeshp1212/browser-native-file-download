import { useCallback } from 'react';
import { downloadFile } from '@umeshp1212/browser-downloader';

export function useDownload() {
  const handleDownload = useCallback((url, fileName) => {
    downloadFile(url, fileName);
  }, []);

  return handleDownload;
}