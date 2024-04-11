import type { MenuItem } from '../types';

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  const { name, price } = item;

  return (
    <button
      className="flex gap-2 rounded-2xl bg-white hover:bg-gray-300 w-full p-3 justify-between"
      onClick={() => addItem(item)}
    >
      <p>{name}</p>
      <p className="font-semibold">${price}</p>
    </button>
  );
}
