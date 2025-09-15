import { Suspense, lazy } from 'react'
import { Container, Header, LearnSection } from '@/components'
import { usePageQuery } from './features/single-page-app'

// import Profile from './features/profiles'
// import SuspenseAndLazy from './features/suspense-and-lazy'
// import TodoListApp from './features/todo-list-app'

const Profile = lazy(() => import('./features/profiles'))
const SuspenseAndLazy = lazy(() => import('./features/suspense-and-lazy'))
const TodoListApp = lazy(() => import('./features/todo-list-app'))

export default function App() {
  const page = usePageQuery<'todos' | 'profile' | 'suspense'>('todos')

  let render = null

  switch (page) {
    default:
    case 'todos':
      render = <TodoListApp />
      break
    case 'profile':
      render = <Profile />
      break
    case 'suspense':
      render = <SuspenseAndLazy />
      break
  }

  return (
    <>
      <title>Suspense & Lazy</title>
      <LearnSection title="서스펜스 & 레이지 로드">
        <Header />
        <Container className="pt-24">
          <Suspense fallback={<div role="status">로딩 중...</div>}>
            {render}
          </Suspense>
        </Container>
      </LearnSection>
    </>
  )
}
