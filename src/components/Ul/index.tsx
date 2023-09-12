import { ChevronRight, ChevronDown, Plus, Pencil, Trash } from 'tabler-icons-react'

import { CurrentModal } from '../Modal/CurrentModal'

import styles from './styles.module.css'

import { ITree } from 'src/types/responses/tree'
import { useListControl } from 'src/hooks/useListControl'

export const Ul = ({ listTree, handleTreeUpdate }: { listTree: ITree | null; handleTreeUpdate: () => void }) => {
    const {
        areChildrenVisivle,
        isModalVisible,
        handleAddFieldClick,
        handleChangeFieldClick,
        handleDeleteFieldClick,
        handleNodeClick,
        setIsModalVisible,
    } = useListControl()

    const modal = <CurrentModal
        handleTreeUpdate={handleTreeUpdate}
        listTree={listTree}
        setIsModalVisible={setIsModalVisible}
        type={isModalVisible.type}
    />

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