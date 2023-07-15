import { useEffect, useState } from 'react';
import { MainLayaout } from '../layout/MainLayaout';
import { DndContext } from '@dnd-kit/core';
import { Column } from '../components/Column/Column';
import { closestCenter } from '@dnd-kit/core';
import { getColumns } from '../services/Services';
import { useDispatch } from 'react-redux';
import { setLoandingBoards } from '../store/slices/boardsSlice';

export const BoardScreen = () => {
  const initialData: any = {
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Columna 1',
        itemIds: ['item-1', 'item-2', 'item-3'],
      },
      'column-2': {
        id: 'column-2',
        title: 'Columna 2',
        itemIds: [],
      },
    },
    items: {
      'item-1': { id: 'item-1', content: 'Item 1', column: 'column-1' },
      'item-2': { id: 'item-2', content: 'Item 2', column: 'column-1' },
      'item-3': { id: 'item-3', content: 'Item 3', column: 'column-1' },
    },
  };

  const [data, setData] = useState(initialData);
  const [newData, setNewData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const path = window.location.pathname.split('/')[2];
    getColumns(path)
      .then((res) => {
        console.log(res.data);
        setNewData(res.data);
        dispatch(setLoandingBoards(false));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      console.log('active', active.id);
      console.log('over', over.id);
      const activeColumn = data['items'].find((i: any) => {
        console.log(i.id);
        if (i.id === active.id) {
          return i.column;
        }
      });

      console.log(activeColumn);
    }

    if (active.id !== over.id) {
      // const sourceColumn = data.columns[active.id];
      // const destinationColumn = data.columns[over.id];
      // const sourceItemIds = Array.from(sourceColumn?.itemIds);
      // const destinationItemIds = Array.from(destinationColumn.itemIds);
      // const [removed] = sourceItemIds.splice(active.index, 1);
      // destinationItemIds.splice(over.index, 0, removed);
      // const updatedColumns = {
      //   ...data.columns,
      //   [sourceColumn.id]: {
      //     ...sourceColumn,
      //     itemIds: sourceItemIds,
      //   },
      //   [destinationColumn.id]: {
      //     ...destinationColumn,
      //     itemIds: destinationItemIds,
      //   },
      // };
      // setData({
      //   ...data,
      //   columns: updatedColumns,
      // });
    }
  };

  return (
    <>
      <MainLayaout>
        <DndContext onDragEnd={handleDragEnd}>
          <div>
            {Object.values(data.columns).map((column: any) => (
              <Column key={column.id} column={column} items={data.items} />
            ))}
          </div>
        </DndContext>
      </MainLayaout>
    </>
  );
};
