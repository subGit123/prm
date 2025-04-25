import {useEffect, useState} from 'react';
import {Order, OrderListItem} from '../models/oder.model';
import {fetchOrderDetail, fetchOrders} from '../api/order.api';

export const useOrders = () => {
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [seletedItem, setSeletedItem] = useState<number | null>(null);

  useEffect(() => {
    fetchOrders().then(order => {
      setOrders(order);
    });
  }, []);

  const seletOrderItem = (id: number) => {
    // 요청 방어
    if (orders.filter(item => item.id === id)[0].detail) {
      setSeletedItem(id);
      return;
    }

    fetchOrderDetail(id).then(orderItem => {
      setSeletedItem(id);
      setOrders(
        orders.map(item => {
          if (item.id == id) {
            return {
              ...item,
              detail: orderItem,
            };
          }
          return item;
        }),
      );
    });
  };

  return {orders, seletedItem, seletOrderItem};
};
