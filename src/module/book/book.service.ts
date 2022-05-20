import { Injectable } from '@nestjs/common';
import { BookDto } from './book.dto';

@Injectable()
export class BookService {
  async create(data: BookDto) {
    // ...
  }
}
