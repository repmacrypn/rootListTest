import { ITree } from 'src/types/responses/tree'

export interface IUl {
    listTree: ITree | null;
    handleTreeUpdate: () => void;
}