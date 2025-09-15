import { useEffect, useState } from 'react'
import { LucideLoader, LucideShieldAlert } from 'lucide-react'
import { tw } from '@/utils'
import { getData } from '../api'

export default function Child({ cutoff }: { cutoff: number }) {
  // 리액트에서 비동기 데이터를 가져오는 일반적인(정석적인) 방법
  // Suspense, ErrorBoundary를 사용하기 전까지는.
  // 다만, Suspense는 지원하는 라이브러리나 프레임워크 없이는 사용 불가
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const [data, setData] = useState<number[]>([])

  // 부수 효과(서버에서 데이터 가져오기)
  useEffect(() => {
    // 중복 상태 업데이트 방지를 위한 지역 변수
    let ignore = false

    // 상태 초기화
    setLoading(true)
    setError(null)

    // 데이터 가져오기(비동기 요청/응답)
    getData(cutoff)
      // 해결(resolved)
      .then((data) => {
        console.log(data)
        if (!ignore) {
          setData(data)
        }
      })
      // 거절(rejected)
      .catch((error) => {
        setError(error as Error)
      })
      // 항상(always)
      .finally(() => {
        setLoading(false)
      })

    // 중복 상태 업데이트 방지를 위한 지역 변수 변경
    return () => {
      ignore = true
    }
  }, [cutoff])

  // 로딩 UI 제공
  if (loading) {
    return (
      <div role="status" aria-label="로딩 중...">
        <LucideLoader className="my-4 size-6 animate-spin opacity-70" />
      </div>
    )
  }

  // 에러 UI 제공
  if (error) {
    return (
      <div role="alert" className="flex gap-x-2 items-center text-red-600">
        <LucideShieldAlert className="my-4 size-6" />
        {error.message}
      </div>
    )
  }

  return (
    <ul className="list-none pl-0 flex flex-col gap-y-1">
      {data?.map((item, i) => (
        <li
          key={i}
          className={tw(
            'size-8 grid place-content-center',
            'p-1 bg-emerald-600 text-white font-bold text-xs rounded'
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
