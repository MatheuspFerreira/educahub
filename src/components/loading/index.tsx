import { LoadingOutlined } from '@ant-design/icons';
import './loading.css';

export function Loading ({textCarregando = 'Carregando'}) {
    return (
        
        <div className='Loading__content'>
            <LoadingOutlined
                className='Loading__component'
            
            />
            <p>{textCarregando}</p>
            
        </div>

    );
};