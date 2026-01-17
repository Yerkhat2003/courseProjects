import { BoardsService } from './boards.service';
import type { Board } from './board.interface';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    getBoards(): Board[];
    createBoard(createBoardDto: CreateBoardDto): Board;
}
