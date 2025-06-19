import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if we have valid Supabase configuration
const isSupabaseConfigured = 
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  supabaseAnonKey !== 'your-anon-key-here' &&
  !supabaseUrl.includes('your-project-id') &&
  !supabaseAnonKey.includes('your-anon-key');

if (!isSupabaseConfigured) {
  console.warn('Supabase is not properly configured. Using demo mode with local data.');
}

// Create a mock client for demo mode that returns empty data instead of making network requests
const createMockSupabaseClient = () => ({
  from: () => ({
    select: () => ({
      order: () => ({
        then: (callback: (result: { data: null; error: null }) => void) => {
          callback({ data: null, error: null });
          return Promise.resolve({ data: null, error: null });
        }
      })
    }),
    insert: () => ({
      then: (callback: (result: { data: null; error: null }) => void) => {
        callback({ data: null, error: null });
        return Promise.resolve({ data: null, error: null });
      }
    }),
    update: () => ({
      eq: () => ({
        then: (callback: (result: { data: null; error: null }) => void) => {
          callback({ data: null, error: null });
          return Promise.resolve({ data: null, error: null });
        }
      })
    }),
    delete: () => ({
      eq: () => ({
        then: (callback: (result: { data: null; error: null }) => void) => {
          callback({ data: null, error: null });
          return Promise.resolve({ data: null, error: null });
        }
      })
    })
  }),
  auth: {
    signUp: () => Promise.resolve({ data: null, error: null }),
    signInWithPassword: () => Promise.resolve({ data: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  }
});

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockSupabaseClient() as any;

export { isSupabaseConfigured };