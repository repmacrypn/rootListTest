import { ActionType } from './actionTypes'

export interface IListControlResult {
    isModalVisible: ActionType;
    areChildrenVisivle: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<ActionType>>;
    handleNodeClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleAddFieldClick: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
    handleChangeFieldClick: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
    handleDeleteFieldClick: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
}