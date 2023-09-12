import styles from './styles.module.css'

import { IModal } from './interface'

export const Modal = ({ children, isModalVisible, setIsModalVisible }: IModal) => {
    return (
        <div
            className={isModalVisible !== 'none' ? `${styles['modal']} ${styles['active']}` : styles.modal}
            onClick={() => setIsModalVisible('none')}
        >
            <div
                className={isModalVisible === '' ? `${styles['modalContent']} ${styles['active']}` : styles.modalContent}
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}