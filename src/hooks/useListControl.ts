import { useState, useCallback } from 'react'

import { IListControlResult } from 'src/types/IListControlResult'
import { ActionType } from 'src/types/actionTypes'

export const useListControl = (): IListControlResult => {
    const [areChildrenVisivle, setAreChildrenVisivle] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState<ActionType>('none')

    const handleNodeClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        setAreChildrenVisivle(!areChildrenVisivle)
    }, [areChildrenVisivle])

    const handleAddFieldClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.stopPropagation()
        setIsModalVisible('add')
    }

    const handleChangeFieldClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.stopPropagation()
        setIsModalVisible('change')
    }

    const handleDeleteFieldClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.stopPropagation()
        setIsModalVisible('delete')
    }

    return {
        areChildrenVisivle,
        isModalVisible,
        setIsModalVisible,
        handleNodeClick,
        handleAddFieldClick,
        handleChangeFieldClick,
        handleDeleteFieldClick,
    }
}