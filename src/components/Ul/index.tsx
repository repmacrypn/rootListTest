/* eslint-disable indent */
/* import { useState, useCallback } from 'react' */
import { ChevronRight, ChevronDown, Plus, Pencil, Trash } from 'tabler-icons-react'

import { ITree } from 'src/types/responses/tree'
import { Modal } from '../Modal'
import { AddModal } from '../Modal/AddModal'
import { ChangeModal } from '../Modal/ChangeModal'
import { DeleteModal } from '../Modal/DeleteModal'

import styles from './styles.module.css'
import { useListControl } from 'src/hooks/useListControl'

export const Ul = ({ listTree, handleTreeUpdate }: { listTree: ITree | null; handleTreeUpdate: () => void }) => {
    /* const [areChildrenVisivle, setAreChildrenVisivle] = useState(false)

    const [isModalVisible, setIsModalVisible] = useState({ type: 'none' })

    const handleNodeClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        setAreChildrenVisivle(!areChildrenVisivle)
    }, [areChildrenVisivle])

    const handleAddFieldClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.stopPropagation()
        setIsModalVisible({ type: 'add' })
    }

    const handleChangeFieldClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.stopPropagation()
        setIsModalVisible({ type: 'change' })
    }

    const handleDeleteFieldClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.stopPropagation()
        setIsModalVisible({ type: 'delete' })
    } */

    const {
        areChildrenVisivle,
        isModalVisible,
        handleAddFieldClick,
        handleChangeFieldClick,
        handleDeleteFieldClick,
        handleNodeClick,
        setIsModalVisible,
    } = useListControl()

    let modal

    switch (isModalVisible.type) {
        case 'add': {
            modal = (
                <Modal isModalVisible={isModalVisible.type} setIsModalVisible={setIsModalVisible}>
                    <AddModal
                        setIsModalVisible={setIsModalVisible}
                        handleTreeUpdate={handleTreeUpdate}
                        listTree={listTree}
                    />
                </Modal>
            )
            break
        }
        case 'change': {
            modal = (
                <Modal isModalVisible={isModalVisible.type} setIsModalVisible={setIsModalVisible}>
                    <ChangeModal
                        setIsModalVisible={setIsModalVisible}
                        handleTreeUpdate={handleTreeUpdate}
                        listTree={listTree}
                    />
                </Modal>
            )
            break
        }
        case 'delete': {
            modal = (
                <Modal isModalVisible={isModalVisible.type} setIsModalVisible={setIsModalVisible}>
                    <DeleteModal
                        setIsModalVisible={setIsModalVisible}
                        handleTreeUpdate={handleTreeUpdate}
                        listTree={listTree}
                    />
                </Modal>
            )
            break
        }
        case 'none': {
            modal = null
        }
    }

    return (
        <div>
            <div className={styles.list} onClick={handleNodeClick}>
                {listTree?.children && listTree?.children.length > 0 &&
                    areChildrenVisivle ? <ChevronDown /> : <ChevronRight className={styles.icon} viewBox='0 2 24 24' />
                }
                <span className={styles.name}>{listTree?.name}</span>
                <Plus
                    color='rgb(94, 222, 94)'
                    viewBox='0 2 24 24'
                    onClick={handleAddFieldClick}
                />
                <Pencil
                    color='blue'
                    viewBox='0 3 24 24'
                    onClick={handleChangeFieldClick}
                />
                <Trash
                    color='red'
                    className={styles.icon}
                    viewBox='0 3 24 24'
                    onClick={handleDeleteFieldClick}
                />
                <div>
                    {areChildrenVisivle && (listTree?.children ?? [])
                        .map((list: ITree) => <Ul key={list.id} listTree={list} handleTreeUpdate={handleTreeUpdate} />)}
                </div>
                {modal}
            </div>
        </div>
    )
}