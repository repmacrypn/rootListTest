export interface IDeclineButton {
    setIsModalVisible: React.Dispatch<React.SetStateAction<{
        type: string;
    }>>;
}

export interface ISubmitButton {
    text: string;
    handleButtonClick: () => void;
}