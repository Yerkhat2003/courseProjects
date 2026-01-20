import { BoardsService } from './boards.service';
import type { Board } from './board.interface';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    getBoards(): Board[];
    createBoard(createBoardDto: CreateBoardDto): Board;
    updateBoard(id: string, updateBoardDto: UpdateBoardDto): Board;
    removeBoard(id: string): Board;
}
