import type { FC } from 'react';
import type { Table } from '~/components/dashboard/types';

interface tablesProps {
    setSelectedTable: (table: Table) => void;
}

const tables: FC<tablesProps> = ({
    setSelectedTable,
}) => {
    return (
        <>
            {/* Table1 */}
            <mesh
                position={[3.6, -1, -2.5]}
                scale={[1.2, .2, 2]}
                onClick={() => setSelectedTable({ id: 1, name: 'Table 1'})}
            >
                <boxGeometry />
                <meshStandardMaterial color="green" />
            </mesh>
            {/* Table 2 */}
            <mesh
                position={[3.5, -1, 4]}
                scale={[1.2, .2, 1.2]}
                onClick={() => setSelectedTable({ id: 2, name: 'Table 2'})}
            >
                <boxGeometry />
                <meshStandardMaterial color="green" />
            </mesh>
            {/* Table 3 */}
            <mesh
                position={[-1.5, -1, -2.5]}
                scale={[1.2, .2, 1.2]}
                onClick={() => setSelectedTable({ id: 3, name: 'Table 3'})}
            >
                <boxGeometry />
                <meshStandardMaterial color="green" />
            </mesh>
            {/* Table 4 */}
            <mesh
                position={[-4.2, -1, -2]}
                scale={[1.2, .2, 1.2]}
                onClick={() => setSelectedTable({ id: 4, name: 'Table 4'})}
            >
                <boxGeometry />
                <meshStandardMaterial color="green" />
            </mesh>
            {/* Table 5 */}
            <mesh
                position={[-.8, -1, 3.2]}
                scale={[1.2, .2, 1.2]}
                onClick={() => setSelectedTable({ id: 5, name: 'Table 5'})}
            >
                <boxGeometry />
                <meshStandardMaterial color="green" />
            </mesh>
            {/* Table 6 */}
            <mesh
                position={[-3.5, -1, 2.2]}
                scale={[1.2, .2, 1.2]}
                rotation={[0, Math.PI / 3, 0]}
                onClick={() => setSelectedTable({ id: 6, name: 'Table 6'})}
            >
                <boxGeometry />
                <meshStandardMaterial color="green" />

            </mesh>
            {/* Table 7 */}
            <mesh
                position={[.6, -1, 7.2]}
                scale={[1.2, .2, 1.2]}
                onClick={() => setSelectedTable({ id: 7, name: 'Table 7'})}
            >
                <boxGeometry />
                <meshStandardMaterial color="green" />

            </mesh>
            {/* Table 8 */}
            <mesh
                position={[.6, -1, 10.2]}
                scale={[1.2, .2, 1.2]}
                onClick={() => setSelectedTable({ id: 8, name: 'Table 8'})}
            >
                <boxGeometry />
                <meshStandardMaterial color="green" />

            </mesh>
            {/* Table 9 */}
            <mesh
                position={[3.8, -1, 10.2]}
                scale={[1.2, .2, 1.2]}
                onClick={() => setSelectedTable({ id: 9, name: 'Table 9'})}
            >
                <boxGeometry />
                <meshStandardMaterial color="green" />

            </mesh>
            {/* Table 10 */}
            <mesh
                position={[3.8, -1, 7.2]}
                scale={[1.2, .2, 1.2]}
                onClick={() => setSelectedTable({ id: 10, name: 'Table 10'})}
            >
                <boxGeometry />
                <meshStandardMaterial color="green" />

            </mesh>

        </>
    );
}
export default tables;