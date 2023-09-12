import { useState } from 'react'

import { DeclineButton, SubmitButton } from 'src/components/Button'
import { Loader } from 'src/components/Loader'
import { Title } from 'src/components/Title'
import { rootListAPI } from 'src/services/rootListService'

import styles from '../styles.module.css'

import { IModalProps } from 'src/types/modalTypes'

export const DeleteModal = ({ listTree, setIsModalVisible, handleTreeUpdate }: IModalProps) => {
    const [isLoading, setIsLoading] = useState(false)

    const deleteNodeOnClick = async () => {
        try {
            setIsLoading(true)
            await rootListAPI.deleteTreeNode(listTree!.id)
            handleTreeUpdate()
        } catch (e) {
            alert(e)
        } finally {
            setIsLoading(false)
            setIsModalVisible('none')
        }
    }

    if (isLoading) return <Loader />

    return (
        <>
            <Title text={`Do you want to delete ${listTree!.name}?`} />
            <div className={styles.buttonsWrapper}>
                <DeclineButton setIsModalVisible={setIsModalVisible} />
                <SubmitButton text='DELETE' handleButtonClick={deleteNodeOnClick} />
            </div>
        </>
    )
}