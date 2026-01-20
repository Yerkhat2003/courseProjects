import { Board } from './board.interface';
export declare class BoardsService {
    private boards;
    findAll(): Board[];
    create(title: string): Board;
    update(id: string, title: string): Board;
    remove(id: string): Board;
}
