import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs"

// Explicitly type the Supabase client
let supabaseClient: SupabaseClient<any> | null = null

// Singleton client creator
export const getSupabaseClient = (): SupabaseClient<any> => {
  if (!supabaseClient) {
    supabaseClient = createClientComponentClient()
  }
  return supabaseClient
}

// Check if user is authenticated
export const isAuthenticated = async (): Promise<boolean> => {
  const supabase = getSupabaseClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return !!session
}

// Get current user from session
export const getCurrentUser = async () => {
  const supabase = getSupabaseClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session?.user || null
}
