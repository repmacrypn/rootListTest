export interface IListControlResult {
    isModalVisible: {
        type: string;
    };
    areChildrenVisivle: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<{ type: string; }>>;
    handleNodeClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleAddFieldClick: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
    handleChangeFieldClick: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
    handleDeleteFieldClick: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
}