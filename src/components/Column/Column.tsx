import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

import { Item } from '../Item/Item';
import { useDroppable } from '@dnd-kit/core';

interface Props {
  column: any;
  items: any;
}
export const Column = ({ column, items }: Props) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
    data: {
      type: 'column',
    },
  });

  return (
    <div
      className="w-[100px] h-[100px] bg-slate-300 mx-2 my-3"
      ref={setNodeRef}
    >
      <h2>{column.title}</h2>
      <SortableContext id={column.id} items={column.itemIds} disabled={false}>
        {column?.itemIds?.map((itemId: any, index: any) => (
          <Item key={itemId} item={items[itemId]} index={index} />
        ))}
      </SortableContext>
    </div>
  );
};
