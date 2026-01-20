"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
let BoardsService = class BoardsService {
    boards = [
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
    findAll() {
        return this.boards;
    }
    create(title) {
        const newBoard = {
            id: Date.now().toString(),
            title,
            createdAt: new Date().toISOString(),
        };
        this.boards.push(newBoard);
        return newBoard;
    }
    update(id, title) {
        const board = this.boards.find((b) => b.id === id);
        if (!board) {
            throw new common_1.NotFoundException(`Board with id ${id} not found`);
        }
        board.title = title;
        return board;
    }
    remove(id) {
        const boardIndex = this.boards.findIndex((b) => b.id === id);
        if (boardIndex === -1) {
            throw new common_1.NotFoundException(`Board with id ${id} not found`);
        }
        const removedBoard = this.boards[boardIndex];
        this.boards.splice(boardIndex, 1);
        return removedBoard;
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)()
], BoardsService);
//# sourceMappingURL=boards.service.js.map