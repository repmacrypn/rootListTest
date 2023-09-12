import { useState, useCallback } from 'react'

import { IListControlResult } from 'src/types/IListControlResult'

export const useListControl = (): IListControlResult => {
    const [areChildrenVisivle, setAreChildrenVisivle] = useState(false)
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