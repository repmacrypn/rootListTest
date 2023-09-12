import axios from 'axios'

import { ITree } from 'src/types/responses/tree'

export const API_URL = 'https://test.vmarmysh.com/'
export const TREE_NAME = 'los pollos hermanos'

const instance = axios.create({
    baseURL: API_URL,
})

export const rootListAPI = {
    async getTree() {
        return await instance.post<ITree>(`api.user.tree.get?treeName=${TREE_NAME}`)
    },
    async createTreeNode(parentNodeId: number, nodeName: string) {
        try {
            return await instance.post(`api.user.tree.node.create?treeName=${TREE_NAME}&parentNodeId=${parentNodeId}&nodeName=${nodeName}`)
        } catch (e) {
            if (axios.isAxiosError(e)) throw new Error(e.response?.data.data.message)
        }
    },
    async deleteTreeNode(nodeId: number) {
        try {
            return await instance.post(`api.user.tree.node.delete?treeName=${TREE_NAME}&nodeId=${nodeId}`)
        } catch (e) {
            if (axios.isAxiosError(e)) throw new Error(e.response?.data.data.message)
        }
    },
    async renameTreeNode(nodeId: number, newNodeName: string) {
        try {
            return await instance.post(`api.user.tree.node.rename?treeName=${TREE_NAME}&nodeId=${nodeId}&newNodeName=${newNodeName}`)
        } catch (e) {
            if (axios.isAxiosError(e)) throw new Error(e.response?.data.data.message)
        }
    },
}