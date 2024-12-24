import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native'
import { s } from './styles'
import { colors } from '@/styles/theme'
import { IconProps as TablerIconProps } from '@tabler/icons-react-native'

interface ButtonRootProps extends TouchableOpacityProps {
  isLoading?: boolean
}

interface ButtonIconProps extends TablerIconProps {
  icon: React.ComponentType<TablerIconProps>
}

function ButtonRoot({
  children,
  style,
  isLoading = false,
  ...rest
}: ButtonRootProps) {
  return (
    <TouchableOpacity
      style={[s.container, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.gray[100]} size="small" />
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

function ButtonTitle({ children }: TextProps) {
  return <Text style={s.title}>{children}</Text>
}

function ButtonIcon({ icon: Icon }: ButtonIconProps) {
  return <Icon size={24} color={colors.gray[100]} />
}

export const Button = {
  Root: ButtonRoot,
  Title: ButtonTitle,
  Icon: ButtonIcon,
}
