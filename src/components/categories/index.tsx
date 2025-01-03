import { FlatList } from 'react-native'

import { Category } from '../category'
import { s } from './styles'

export interface CategoriesProps {
  id: string
  name: string
}

interface Props {
  data: CategoriesProps[]
  selected: string
  onSelect: (id: string) => void
}

export function Categories({ data, onSelect, selected }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={s.content}
      style={s.container}
    />
  )
}
