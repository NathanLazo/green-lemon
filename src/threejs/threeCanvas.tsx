import { Canvas } from '@react-three/fiber';
import { Suspense, type FC, type ReactNode } from 'react';

interface ThreeCanvasProps {
    children: ReactNode;
}


const ThreeCanvas: FC<ThreeCanvasProps> = (
    { children }
) => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Suspense fallback={
                <p>Cargando mesas...</p>
            }>
                <Canvas
                    camera={
                        {
                            position: [-1, 10, 3],
                            rotation: [Math.PI / 2, Math.PI / 1, Math.PI / 2]
                        }
                    }
                >
                    {children}
                </Canvas>
            </Suspense>
        </div>
    );
}
export default ThreeCanvas;