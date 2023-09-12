import { IDeclineButton, ISubmitButton } from './interface'

import styles from './styles.module.css'

export const SubmitButton = ({ text, handleButtonClick }: ISubmitButton) => {
    return (
        <button
            className={`${styles.button} ${styles.submitButton}`}
            onClick={handleButtonClick}
        >
            {text}
        </button>
    )
}

export const DeclineButton = ({ setIsModalVisible }: IDeclineButton) => {
    return (
        <button
            className={`${styles.button} ${styles.declineButton}`}
            onClick={() => setIsModalVisible('none')}>
            CANCEL
        </button>
    )
}