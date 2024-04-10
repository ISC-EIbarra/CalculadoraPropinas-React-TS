import type { MenuItem } from '../types';

type MenuItemProps = {
  item: MenuItem;
};

export default function MenuItem({ item }: MenuItemProps) {
  const { name, price } = item;

  return (
    <button className="flex gap-2 rounded-2xl bg-white hover:bg-teal-300 w-full p-3 justify-between">
      <p>{name}</p>
      <p className="font-semibold">${price}</p>
    </button>
  );
}
