import { useCallback } from 'react';
import { downloadFile } from '@umeshp1212/browser-downloader';
export function useDownload() {
    var handleDownload = useCallback(function (url, fileName) {
        downloadFile(url, fileName);
    }, []);
    return handleDownload;
}
