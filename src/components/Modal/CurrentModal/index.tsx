/* eslint-disable indent */
import { Modal } from 'src/components/Modal'
import { AddModal } from 'src/components/Modal/AddModal'
import { ChangeModal } from 'src/components/Modal/ChangeModal'
import { DeleteModal } from 'src/components/Modal/DeleteModal'

import { ICurrentModal } from './interface'

export const CurrentModal = ({ type, setIsModalVisible, handleTreeUpdate, listTree }: ICurrentModal) => {
    switch (type) {
        case 'add': {
            return (
                <Modal isModalVisible={type} setIsModalVisible={setIsModalVisible}>
                    <AddModal
                        setIsModalVisible={setIsModalVisible}
                        handleTreeUpdate={handleTreeUpdate}
                        listTree={listTree}
                    />
                </Modal>
            )
        }
        case 'change': {
            return (
                <Modal isModalVisible={type} setIsModalVisible={setIsModalVisible}>
                    <ChangeModal
                        setIsModalVisible={setIsModalVisible}
                        handleTreeUpdate={handleTreeUpdate}
                        listTree={listTree}
                    />
                </Modal>
            )
        }
        case 'delete': {
            return (
                <Modal isModalVisible={type} setIsModalVisible={setIsModalVisible}>
                    <DeleteModal
                        setIsModalVisible={setIsModalVisible}
                        handleTreeUpdate={handleTreeUpdate}
                        listTree={listTree}
                    />
                </Modal>
            )
        }
        case 'none': {
            return
        }
    }
}