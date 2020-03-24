import React, { Fragment, useRef, useState, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

type OnChooseFunc<T> = (item: ItemT<T>, nowChoosing?: ItemT<T>[], setChoosing?: any) => void;

type ItemT<T> = T & {
  imgSrc: string;
};
type Data<T> = ItemT<T>[];

type RenderItemRollSelect<T> = (item: ItemT<T>, index: number, onChoose?: OnChooseFunc<T>) => ReactNode;


export interface RollSelectBaseProps<ItemT> {
  data: Data<ItemT>;
  defaultSelected?: any;
  renderItem: RenderItemRollSelect<ItemT>;
  multiple?: boolean;
  onChoose?: OnChooseFunc<ItemT>;
  onResult?: (result: ItemT | ItemT[]) => void;
}

const RollSelectBase = <T extends any>({ data, defaultSelected, multiple = false, onChoose, onResult, renderItem }: RollSelectBaseProps<T>) => {
  const onChooseRef = useRef(onChoose);
  const onResultRef = useRef(onResult);
  const [choosing, setChoosing] = useState(() => {
    if (multiple && defaultSelected) {
      return [].concat(defaultSelected);
    }
    if (multiple) {
      return [] as any;
    }
    return {} as ItemT<T>;
  });

  const handleChoose = (item: ItemT<T>) => () => {
    onChooseRef.current?.(item);
    if (choosing instanceof Array) {
      choosing.findIndex(chose => chose.imgSrc === item.imgSrc) !== -1 ? setChoosing(choosing.filter(chose => chose.imgSrc !== item.imgSrc)) : setChoosing(choosing.concat(item));
    }
    else {
      setChoosing(item)
    }
  }

  useEffect(() => {
    if (!!choosing) onResultRef.current?.(choosing);
  }, [choosing, onResultRef])

  return (
    <>
      {
        data.map(item => {
          const index = choosing instanceof Array ? choosing?.findIndex(chose => chose.imgSrc === item.imgSrc) : choosing.imgSrc === item.imgSrc ? 0 : -1;
          return <Fragment key={uuidv4()}>{renderItem(item, index, handleChoose(item))}</Fragment>
        })
      }
    </>
  )
}

export default RollSelectBase;
