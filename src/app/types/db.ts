import { createClient } from '@supabase/supabase-js';
import type { Categories, Products } from './definitions';
import { environment } from 'src/environments/environment';
export const supabaseClient = createClient(environment.supabaseUrl,environment.supabaseApiKey)


export const db = {
	categories: () => supabaseClient.from<'categories',Categories>('categories'),
	products: () => supabaseClient.from<"products",Products>('products'),
};
