import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './board.interface';

@Injectable()
export class BoardsService {
  private boards: Board[] = [
    {
      id: '1',
      title: 'Учебная доска',
      createdAt: '2025-03-15T10:00:00.000Z',
    },
    {
      id: '2',
      title: 'Рабочие задачи',
      createdAt: '2025-03-10T10:00:00.000Z',
    },
    {
      id: '3',
      title: 'Личные дела',
      createdAt: '2025-03-05T10:00:00.000Z',
    },
  ];

  findAll(): Board[] {
    return this.boards;
  }

  create(title: string): Board {
    const newBoard: Board = {
      id: Date.now().toString(),
      title,
      createdAt: new Date().toISOString(),
    };
    this.boards.push(newBoard);
    return newBoard;
  }

  update(id: string, title: string): Board {
    const board = this.boards.find((b) => b.id === id);
    if (!board) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }
    board.title = title;
    return board;
  }

  remove(id: string): Board {
    const boardIndex = this.boards.findIndex((b) => b.id === id);
    if (boardIndex === -1) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }
    const removedBoard = this.boards[boardIndex];
    this.boards.splice(boardIndex, 1);
    return removedBoard;
  }
}

