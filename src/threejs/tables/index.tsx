// UI
import type { FC } from 'react';


// Components
import Structure from './structure';
import TablesComponent from './tables';

// Types
import type { Table } from '~/components/dashboard/types';


interface tablesProps {
    setSelectedTable: (table: Table) => void;
}

const Tables: FC<tablesProps> = ({
    setSelectedTable,
}) => {


        return (
            <>
             <color attach="background" args={['#171717']} />
                <ambientLight intensity={.25} />
                <directionalLight color="white" position={[0, 2, 5]}/>     
                <Structure />
                <TablesComponent 
                    setSelectedTable={setSelectedTable}
                />
            </>
        );
}
export default Tables;