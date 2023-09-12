import { useEffect, useState } from 'react'

import { rootListAPI } from 'src/services/rootListService'
import { Ul } from 'src/components/Ul'

import { ITree } from 'src/types/responses/tree'

export const Main = () => {
    const [tree, setTree] = useState<ITree | null>(null)

    const handleTreeUpdate = () => {
        rootListAPI.getTree().then(
            response => setTree(response.data),
        )
    }

    useEffect(() => {
        handleTreeUpdate()
    }, [])

    return (
        <main>
            <Ul handleTreeUpdate={handleTreeUpdate} listTree={tree} />
        </main>
    )
}