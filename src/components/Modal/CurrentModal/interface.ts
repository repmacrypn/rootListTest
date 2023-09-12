import { ActionType } from 'src/types/actionTypes'
import { IModalProps } from 'src/types/modalTypes'

export interface ICurrentModal extends IModalProps {
    type: ActionType;
}