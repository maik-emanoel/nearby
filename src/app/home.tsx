import { Alert, View } from 'react-native'
import { useEffect, useState } from 'react'

import { Categories, CategoriesProps } from '@/components/categories'
import { Places } from '@/components/places'
import { PlaceProps } from '@/components/place'

import { api } from '@/services/api'

type MarketProps = PlaceProps & {}

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps[]>([])
  const [category, setCategory] = useState('')
  const [markets, setMarkets] = useState<MarketProps[]>([])

  async function fetchCategories() {
    try {
      const { data } = await api.get('/categories')
      setCategories(data)
      setCategory(data[0].id)
    } catch (error) {
      console.error(error)
      Alert.alert('Categorias', 'Não foi possível carregar as categorias')
    }
  }

  async function fetchMarkets() {
    try {
      if (!category) return

      const { data } = await api.get('/markets/category/' + category)
      setMarkets(data)
    } catch (error) {
      console.error(error)
      Alert.alert('Locais', 'Não foi possível carregar os locais')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [category])

  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />

      <Places data={markets} />
    </View>
  )
}
