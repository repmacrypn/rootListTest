export interface IInput {
    value: string;
    handleInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}