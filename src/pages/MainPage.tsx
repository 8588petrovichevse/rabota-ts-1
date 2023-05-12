import { Categories } from '.././components/Categories/Categories'
import { tool, garden, household } from '../orders'

export const MainPage = () => {
    return (
        <>
        <h5>Главная страница</h5>
        <Categories categoryName={'Инструмент'} ordersArray={tool} />
        <Categories categoryName={'Садовый инвертарь'} ordersArray={garden} />
        <Categories categoryName={'Бытовая химия'} ordersArray={household} />
        <Categories categoryName={'Прочее'} />
    </>
    );
};
