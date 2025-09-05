import { createClient } from '@supabase/supabase-js'
import type {
  Database,
  Tables,
  TablesInsert,
  TablesUpdate,
} from './database.types'

const { VITE_SUPABASE_URL, VITE_SUPABASE_API_KEY } = import.meta.env

// Supabase 데이터베이스와 상호 작용할 싱글 Supabase 클라이언트 생성
const supabaseClient = createClient<Database>(
  VITE_SUPABASE_URL,
  VITE_SUPABASE_API_KEY
)

export default supabaseClient

// 단축키 사용함 😍 유틸리티 사용
export type Profile = Tables<'profiles'>
export type ProfileInsert = TablesInsert<'profiles'>
export type ProfileUpdate = TablesUpdate<'profiles'>

// 단축키 사용 안함 😕
// type Profile = Database['bio']['email']['id']
