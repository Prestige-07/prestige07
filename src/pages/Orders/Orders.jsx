import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { getAllOrders } from 'redux/orders/ordersOperations';
import { selectTotalPages } from 'redux/orders/ordersSelectors';

import {
  Section,
  HeaderContainer,
  MainButton,
} from 'components/Global/Global.styled';
import { ModaAddOrder } from 'components/AdminPage/Modals/ModaAddOrder/ModaAddOrder';
import { OrdersList } from '../../components/AdminPage/OrdersPage/OrdersList/OrdersList';
import { OrdersFilterList } from 'components/AdminPage/OrdersPage/OrdersFilterList/OrdersFilterList';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigation = useNavigate();

  const [isOpenModal, setOpenModal] = useState(false);
  const totalPages = useSelector(selectTotalPages);
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get('status') || '';
  const page = queryParams.get('page') || 1;

  useEffect(() => {
    dispatch(getAllOrders({ status, page }));
  }, [dispatch, status, page]);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  const handlePageClick = e => {
    const newPage = e.selected + 1;
    queryParams.set('page', newPage);

    navigation({
      pathname: location.pathname,
      search: `?status=${status}&page=${e.selected + 1}`,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Section>
      <HeaderContainer>
        <OrdersFilterList />
        <MainButton type="button" onClick={() => setOpenModal(true)}>
          Створити замовлення
        </MainButton>
      </HeaderContainer>

      <OrdersList />
      {isOpenModal && <ModaAddOrder handleExitModal={handleExitModal} />}
      {Number(totalPages) > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={Math.ceil(totalPages)}
          pageCount={Math.ceil(totalPages)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="react-paginate"
          initialPage={Number(page) - 1}
        />
      )}
    </Section>
  );
};

export default OrdersPage;
