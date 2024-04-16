import { formatCurrency } from '../helpers';
import { MenuItem, OrderItem } from '../types';

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem['id']) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <>
      <h2 className="text-2xl font-bold">Consumo</h2>

      <div className="bg-white">
        {order.map((orderItem) => (
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
              <button
                className="bg-red-600 hover:bg-red-900 h-8 w-8 rounded-full text-white font-semibold"
                onClick={() => removeItem(orderItem.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
