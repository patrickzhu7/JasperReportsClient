import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { saveAs } from 'file-saver'; // npm i file-saver --save
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html' 
})
export class AppComponent {
  topbuild = {}
  title = 'renderJasper';
  pdfSrc: string = 'http://localhost:8070/all';
  // works with https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf

  onSubmit(order, topBuildForm) {
    console.log(order);
    topBuildForm.reset();
  }
}
