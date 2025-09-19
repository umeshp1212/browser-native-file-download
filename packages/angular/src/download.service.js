import { Injectable } from '@angular/core';
import { downloadFile } from '@umeshp1212/browser-downloader';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  download(url, fileName) {
    downloadFile(url, fileName);
  }
}