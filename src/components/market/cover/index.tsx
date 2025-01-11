import { ImageBackground, View } from 'react-native'
import { router } from 'expo-router'

import { Button } from '@/components/button'

import { s } from './styles'
import { IconArrowLeft } from '@tabler/icons-react-native'

interface Props {
  uri: string
}

export function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} style={s.container}>
      <View style={s.header}>
        <Button.Root style={{width: 40, height: 40}} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button.Root>
      </View>
    </ImageBackground>
  )
}
