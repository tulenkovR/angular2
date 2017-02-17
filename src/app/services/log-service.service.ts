import { Injectable } from '@angular/core';

@Injectable()
export class LogServiceService {
  write(logMessage: string) {
    console.log(logMessage);
  }
  constructor() { }

}
