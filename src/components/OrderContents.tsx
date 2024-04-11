import { formatCurrency } from '../helpers';
import { OrderItem } from '../types';

type OrderContentsProps = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <>
      <h2 className="text-2xl font-bold">Consumo</h2>

      <div className="bg-white mt-4">
        {order.length === 0 ? (
          <p>No hay ordenes</p>
        ) : (
          order.map((orderItem) => (
            <div
              key={orderItem.id}
              className="flex justify-between p-4 items-center border-b last-of-type:border-none"
            >
              <div className="flex gap-4">
                <p>{orderItem.name}</p>
                <p>{orderItem.quantity}</p>
                <p>{formatCurrency(orderItem.price)}</p>
                <p className="font-medium">
                  {formatCurrency(orderItem.quantity * orderItem.price)}
                </p>
              </div>

              <div>
                <button className="bg-red-600 hover:bg-red-900 h-8 w-8 rounded-full text-white font-semibold">
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
