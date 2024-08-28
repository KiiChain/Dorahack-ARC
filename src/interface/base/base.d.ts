declare type IChildren = Readonly<{
  children: ReactNode
}>

declare type IElement = {
  className?: string
}

declare type IErrorBoundary = {
  error: Error
  errorInfo?: ErrorInfo
  reset?: () => void
}

declare type IProvider<P = Record> = P & IChildren

declare type FCC<P = Record> = FunctionComponent<P & { children?: ReactNode }>
