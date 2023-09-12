import { useState } from 'react'

import { DeclineButton, SubmitButton } from 'src/components/Button'
import { Input } from 'src/components/Input'
import { Loader } from 'src/components/Loader'
import { Title } from 'src/components/Title'
import { rootListAPI } from 'src/services/rootListService'

import styles from '../styles.module.css'

import { IModalProps } from 'src/types/modalTypes'

export const ChangeModal = ({ listTree, setIsModalVisible, handleTreeUpdate }: IModalProps) => {
    const [value, setValue] = useState(listTree?.name || '')
    const [isLoading, setIsLoading] = useState(false)

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const changeNodeOnClick = async () => {
        try {
            setIsLoading(true)
            await rootListAPI.renameTreeNode(listTree!.id, value)
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
            <Title text='Change Node:' />
            <Input
                handleInputValue={handleInputValue}
                value={value}
            />
            <div className={styles.buttonsWrapper}>
                <DeclineButton setIsModalVisible={setIsModalVisible} />
                <SubmitButton text='CHANGE' handleButtonClick={changeNodeOnClick} />
            </div>
        </>
    )
}