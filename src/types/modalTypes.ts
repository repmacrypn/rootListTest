import { ITree } from 'src/types/responses/tree'

export interface IModalProps {
    listTree: ITree | null;
    handleTreeUpdate: () => void;
    setIsModalVisible: React.Dispatch<React.SetStateAction<{ type: string; }>>
}