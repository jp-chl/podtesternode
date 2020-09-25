import { Injectable } from '@nestjs/common';

@Injectable() // can be injected in other artifacts (such as a controller)
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
