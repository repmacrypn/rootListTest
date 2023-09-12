import { ReactNode } from 'react'

export interface IModal {
    children: ReactNode;
    isModalVisible: string;
    setIsModalVisible: React.Dispatch<React.SetStateAction<{
        type: string;
    }>>;
}