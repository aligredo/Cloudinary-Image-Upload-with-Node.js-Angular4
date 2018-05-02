import { Component, Input,OnInit,  ElementRef,  ViewChild } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent {
@ViewChild("fileInput") fileInput: ElementRef;
  loading: boolean = false;
  valid: boolean = false;
  message: string = "";
  Image: File;

  constructor(
    private appService: AppService,
  ) {
  }

   onFileChange(event) {
     this.Image = event.target.files[0]; //To get the image selected by the user
     this.valid = true;
  }

   onSubmit(event) {
     var image = new FormData();
     image.append('Image', this.Image);
     this.appService
       .sendImage(image)
       .subscribe((res: any) => {
         console.log(res);
      });
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    this.message = "Uploaded";
  }

   clearFile() {
     this.valid = false;
     this.message = "Cleared";
    this.fileInput.nativeElement.value = "";
  }
}
