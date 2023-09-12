import { useState } from 'react'

import { rootListAPI } from 'src/services/rootListService'
import { Loader } from 'src/components/Loader'
import { DeclineButton, SubmitButton } from 'src/components/Button'
import { Input } from 'src/components/Input'
import { Title } from 'src/components/Title'

import { IModalProps } from 'src/types/modalTypes'

import styles from '../styles.module.css'

export const AddModal = ({ listTree, handleTreeUpdate, setIsModalVisible }: IModalProps) => {
    const [value, setValue] = useState(listTree?.name || '')
    const [isLoading, setIsLoading] = useState(false)

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const addNodeOnClick = async () => {
        try {
            setIsLoading(true)
            await rootListAPI.createTreeNode(listTree!.id, value)
            handleTreeUpdate()
        } catch (e) {
            alert(e)
        } finally {
            setIsLoading(false)
            setIsModalVisible({ type: 'none' })
        }
    }

    if (isLoading) return <Loader />

    return (
        <>
            <Title text='Add Node:' />
            <Input
                value={value}
                handleInputValue={handleInputValue}
            />
            <div className={styles.buttonsWrapper}>
                <DeclineButton setIsModalVisible={setIsModalVisible} />
                <SubmitButton text='ADD' handleButtonClick={addNodeOnClick} />
            </div>
        </>
    )
}