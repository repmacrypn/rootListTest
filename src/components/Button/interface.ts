import { ActionType } from 'src/types/actionTypes'

export interface IDeclineButton {
    setIsModalVisible: React.Dispatch<React.SetStateAction<ActionType>>;
}

export interface ISubmitButton {
    text: string;
    handleButtonClick: () => void;
}