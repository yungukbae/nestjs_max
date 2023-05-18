import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((x) => x.id === id);
  //   if (!found) {
  //     throw new NotFoundException(
  //       '아이디와 일치하는 게시물을 찾을 수 없습니다.',
  //     );
  //   }
  //   return found;
  // }
  // deleteBoardById(id: string): string {
  //   const idIdx = this.boards.map((x) => x.id).indexOf(id);
  //   if (idIdx == -1) {
  //     throw new NotFoundException('해당 아이디는 존재하지 않습니다.');
  //   }
  //   this.boards.splice(idIdx, 1);
  //   return `Remove id:${id} successful`;
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
