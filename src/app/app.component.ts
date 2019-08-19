import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { saveAs } from 'file-saver'; // npm i file-saver --save
import { DownloadService } from './services/download-service.service';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html' 
})
export class AppComponent {
  title = 'renderJasper';
  pdfSrc: string = 'http://localhost:8080/all';
  // works with https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf
}
