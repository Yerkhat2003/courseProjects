import { Board } from './board.interface';
export declare class BoardsService {
    private boards;
    findAll(): Board[];
    create(title: string): Board;
}
