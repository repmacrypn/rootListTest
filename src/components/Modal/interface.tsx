import { ReactNode } from 'react'
import { ActionType } from 'src/types/actionTypes'

export interface IModal {
    children: ReactNode;
    isModalVisible: string;
    setIsModalVisible: React.Dispatch<React.SetStateAction<ActionType>>;
}