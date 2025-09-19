`@umeshp1212/angular-download`

This package provides an injectable service that allows you to easily use the download functionality in your Angular components.

**Installation**
npm install @umeshp1212/angular-download

**Usage**
Inject the DownloadService into your component's constructor and call the download method.

```
import { Component } from '@angular/core';
import { DownloadService } from '@umeshp1212/angular-download';

@Component({
  selector: 'app-download-button',
  template: `
    <button (click)="onDownloadClick()">
      Download Invoice
    </button>
  `,
  styleUrls: ['./download-button.component.css']
})
export class DownloadButtonComponent {
  constructor(private downloadService: DownloadService) {}

  onDownloadClick(): void {
    const fileUrl = '[https://example.com/invoices/invoice-123.pdf](https://example.com/invoices/invoice-123.pdf)';
    const fileName = 'Invoice-123.pdf';
    this.downloadService.download(fileUrl, fileName);
  }
}
```