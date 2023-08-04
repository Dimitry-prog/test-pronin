import { LuEdit } from 'react-icons/lu';
import { BsShare, BsTrash } from 'react-icons/bs';
import { ItemType } from "../types";

export const items: ItemType[] = [
  {
    id: 1,
    label: 'Поделиться в социальных сетях',
    icon: BsShare,
  },
  {
    id: 2,
    label: 'Редактировать страницу',
    icon: LuEdit,
  },
  {
    id: 3,
    label: 'Удалить страницу',
    icon: BsTrash,
  }
]