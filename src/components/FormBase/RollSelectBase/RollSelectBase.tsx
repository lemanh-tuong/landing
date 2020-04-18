import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type OnChooseFunc<T> = (item: ItemT<T>, nowChoosing?: ItemT<T>[], setChoosing?: any) => void;

type ItemT<T> = T & {
  imgSrc: string;
};
type Data<T> = ItemT<T>[];

type RenderItemRollSelect<T> = (item: ItemT<T>, index: number, onChoose?: OnChooseFunc<T>) => ReactNode;


export interface RollSelectBaseProps<T> {
  data: Data<T>;
  defaultSelected?: Data<T> | ItemT<T>;
  renderItem: RenderItemRollSelect<T>;
  multiple?: boolean;
  onChoose?: OnChooseFunc<T>;
  onResult?: (result: T | T[]) => void;
}

const RollSelectBase = <T extends object>({ data, defaultSelected, multiple = false, onChoose, onResult, renderItem }: RollSelectBaseProps<T>) => {
  const [choosing, setChoosing] = useState(() => {
    return defaultSelected ? (defaultSelected instanceof Array ? [...defaultSelected] : [{ ...defaultSelected }]) : [] as Data<T>;
  });

  const handleChoose = (item: ItemT<T>) => () => {
    onChoose?.(item);
    if (multiple) {
      choosing.findIndex(chose => chose.imgSrc === item.imgSrc) !== -1 ? setChoosing(choosing.filter(chose => chose.imgSrc !== item.imgSrc)) : setChoosing(choosing.concat(item));
    } else {
      setChoosing([].concat(item as any))
    }

  }

  useEffect(() => {
    if (multiple) {
      onResult?.(choosing);
    } else {
      onResult?.(choosing[0]);
    }
  }, [choosing, multiple, onResult])

  return (
    <>
      {
        data.map(item => {
          const index = choosing?.findIndex(chose => chose.imgSrc === item.imgSrc);
          return <Fragment key={uuidv4()}>{renderItem(item, index, handleChoose(item))}</Fragment>
        })
      }
    </>
  )
}

export default RollSelectBase;
