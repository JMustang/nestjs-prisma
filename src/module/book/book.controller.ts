import { Body, Controller, Post } from '@nestjs/common';
import { BookDto } from './book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {
    // empty
  }

  @Post()
  async create(@Body() data: BookDto) {
    return this.bookService.create(data);
  }
}
