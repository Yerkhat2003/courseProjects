import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import type { Board } from './board.interface';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

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

  @Patch(':id')
  updateBoard(
    @Param('id') id: string,
    @Body() updateBoardDto: UpdateBoardDto,
  ): Board {
    return this.boardsService.update(id, updateBoardDto.title);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  removeBoard(@Param('id') id: string): Board {
    return this.boardsService.remove(id);
  }
}

