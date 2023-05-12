import { useLocation } from 'react-router-dom'
import { tool, garden, household } from '../orders'
import { Categories } from '.././components/Categories/Categories'

export const CatalogPage = () => {
  
    const { hash } = useLocation()

    return (
        <>
            <h5>Товары</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad omnis tenetur reprehenderit dicta repudiandae 
                voluptas! Doloribus quia unde veniam, nulla ipsum iste quibusdam sunt odio dolor nesciunt corrupti facilis.</p>
            {hash !== '' ? (
                <>
                    {hash === '#tool' && <Categories categoryName={'Инструмент'} ordersArray={tool} />}
                    {hash === '#garden' && <Categories categoryName={'Садовый инвертарь'} ordersArray={garden} />}
                    {hash === '#household' && <Categories categoryName={'Бытовая химия'} ordersArray={household} />}
                </>
            ) : (
                <>
                    <Categories categoryName={'Инструмент'} ordersArray={tool} />
                    <Categories categoryName={'Садовый инвертарь'} ordersArray={garden} />
                    <Categories categoryName={'Бытовая химия'} ordersArray={household} />
                    <Categories categoryName={'Прочее'} />
                </>
            )}
        </>
    );
};
