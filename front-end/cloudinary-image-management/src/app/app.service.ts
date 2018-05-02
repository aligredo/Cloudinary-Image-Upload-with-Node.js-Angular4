import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}
  sendImage(Image: FormData) {
    return this.httpClient.post('http://localhost:3000/sendImage', Image);
  }
}
