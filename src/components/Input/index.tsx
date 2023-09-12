import { IInput } from './interface'

import styles from './styles.module.css'

export const Input = ({ value, handleInputValue }: IInput) => {
    return (
        <input
            className={styles.input}
            placeholder='Node Name'
            value={value}
            onChange={handleInputValue}
        />
    )
}