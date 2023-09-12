import { ITree } from 'src/types/responses/tree'
import { ActionType } from './actionTypes'

export interface IModalProps {
    listTree: ITree | null;
    handleTreeUpdate: () => void;
    setIsModalVisible: React.Dispatch<React.SetStateAction<ActionType>>
}