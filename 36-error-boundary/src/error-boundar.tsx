import { Component, type ErrorInfo, type ReactNode } from 'react'
import ErrorFallbackUI, { type FallbackRenderProps } from './error-fallback-ui'

interface Props {
  FallbackComponent?: ReactNode
  fallbackRender?: ({ error, errorInfo }: FallbackRenderProps) => ReactNode
  children: ReactNode
}

interface State {
  hasError: boolean
  error: null | Error
  errorInfo: null | ErrorInfo
}

// 컴포넌트
// - 속성(props)
// - 상태(state)
// - 생명주기(lifecycles) : 오류 감지를 위한 생명주기
export default class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  static getDerivedStateFromError(error: Error) {
    // 파생된 상태
    return error
      ? {
          hasError: true,
          error,
        }
      : null
  }

  render() {
    const { FallbackComponent, children } = this.props
    const { hasError, error, errorInfo } = this.state

    if (hasError) {
      return (
        FallbackComponent ?? (
          <ErrorFallbackUI error={error} errorInfo={errorInfo} />
        )
      )
    }

    return children
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }
}
