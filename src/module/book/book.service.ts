import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { BookDto } from './book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {
    // empty
  }

  async create(data: BookDto) {
    const bookExists = await this.prisma.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (bookExists) {
      throw new Error('Book already exists');
    }

    const book = await this.prisma.book.create({
      data,
    });
    return book;
  }
}
