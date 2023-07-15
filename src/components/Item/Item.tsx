import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  item: any;
  index: number;
}

export const Item = ({ item }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
    data: {
      type: 'column',
    },
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
      }}
      {...attributes}
      {...listeners}
    >
      {item.content}
    </div>
  );
};
