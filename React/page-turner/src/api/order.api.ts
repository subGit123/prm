import {Order, OrderDetailItem, OrderSheet} from '../models/oder.model';
import {httpClient} from './http';

export const order = async (orderData: OrderSheet) => {
  const res = await httpClient.post('/orders', orderData);

  return res.data;
};

export const fetchOrders = async () => {
  const res = await httpClient.get<Order[]>('/orders');

  return res.data;
};

export const fetchOrderDetail = async (id: number) => {
  const res = await httpClient.get<OrderDetailItem[]>(`/orders/${id}`);

  return res.data;
};
