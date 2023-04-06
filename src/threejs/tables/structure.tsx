import type { FC } from 'react';


const Structure: FC = ({ }) => {
    return (
        <>
            <mesh
                position={[5, -1, .5]}
                scale={[.5, .5, 11]}
            >
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh
                position={[0, -1, -3.5]}
                scale={[.5, .5, 3]}
            >
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh
                position={[0, -1, 3.5]}
                scale={[.5, .5, 3]}
            >
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh
                position={[-2.5, -1, 4]}
                scale={[.5, .5, 5]}
                rotation={[0, Math.PI / 2, 0]}
            >
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh
                position={[-2.5, -1, -4]}
                scale={[.5, .5, 5]}
                rotation={[0, Math.PI / 2, 0]}
            >
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh
                position={[-5, -1, 0]}
                scale={[.5, .5, 8]}
            >
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh
                position={[-.5, -1, 8]}
                scale={[.5, .5, 6]}
            >
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh
                position={[.5, -1, 6]}
                scale={[.5, .5, 1.5]}
                rotation={[0, Math.PI / 2, 0]}
            >
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh
                position={[3.5, -1, 6]}
                scale={[.5, .5, 3]}
                rotation={[0, Math.PI / 2, 0]}
            >
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh
                position={[5, -1, 8]}
                scale={[.5, .5, 6]}
            >
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>



            <mesh
                position={[0, -1, 3]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[13, 18, 1]}
            >
                <planeGeometry />
                <meshStandardMaterial
                    color="#C5E4B5"
                />
            </mesh>
        </>
    );
}
export default Structure;