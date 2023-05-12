import { Row, Col, Alert } from 'react-bootstrap'
import { Card } from '../Card/Card'
import { Order } from '../../orders';

interface Props {
    
    categoryName: string;
  
    ordersArray?: Order[];
}


export const Categories = (props: Props) => {
    return (
        <>
            <h5>{props.categoryName}</h5>
            <Row className='home'>
                {props.ordersArray && props.ordersArray !== null ? props.ordersArray.map((order) => (
                    <Col>
                        <Card order={order} />
                    </Col>
                )) :
                (
                    <Alert>
                        Товары в данной категории отсутствуют
                    </Alert>
                )
            }
            </Row>
        </>
    );
};
