import type { FC } from 'react';
import ThreeCanvas from '~/threejs/threeCanvas';
import Tables from '~/threejs/tables';
import type { Branch, Table } from '~/components/dashboard/types';

interface tables3dProps {
    selectedBranch: Branch;

    setSelectedTable: (table: Table) => void;
}

const Tables3d: FC<tables3dProps> = ({
    selectedBranch,
    setSelectedTable,
 }) => {



    return (
        <>
            <ThreeCanvas>
                <Tables 
                    setSelectedTable={setSelectedTable}
                />
            </ThreeCanvas>
        </>
    );
}
export default Tables3d;