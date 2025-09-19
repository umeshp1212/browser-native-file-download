**Browser Native File Downloader**
A lightweight, zero-dependency library for triggering file downloads in a browser using native JavaScript functionality. This monorepo provides a core utility package and easy-to-use wrappers for popular frameworks like React and Angular.

**Packages**
This monorepo contains three packages:
`@umeshp1212/download-core`: The core, framework-agnostic download logic.
`@umeshp1212/react-downloader`: A custom React hook for seamless integration.
`@umeshp1212/angular-download`: An Angular service for dependency injection.
`@umeshp1212/download-core`
This package provides a single, pure JavaScript function to trigger a file download.

**Installation**
`npm install @umeshp1212/download-core`

**Usage**
```
import { downloadFile } from '@umeshp1212/download-core';

// Example: Download a file from a URL
downloadFile('[https://example.com/api/report.pdf](https://example.com/api/report.pdf)', 'my-report.pdf');
```
