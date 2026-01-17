import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import type { Board } from './board.interface';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  getBoards(): Board[] {
    return this.boardsService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.create(createBoardDto.title);
  }
}

