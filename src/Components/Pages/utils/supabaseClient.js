// utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nexrfifcymcgnuwslimw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5leHJmaWZjeW1jZ251d3NsaW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MTMxMzEsImV4cCI6MjA2NDk4OTEzMX0.zozXrk8D_EODOvQPYsOoDDgbmUnvK2EJOyV237u1LzM' // Keep this in frontend only if it's anon

export const supabase = createClient(supabaseUrl, supabaseKey)
