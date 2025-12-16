import {createClient} from "@supabase/supabase-js";
import { getSecret } from "astro:env/server";

const supabaseURL = getSecret("SUPABASE_URL");
const supabaseKEY = getSecret("SUPABASE_KEY");
if(!supabaseKEY || !supabaseURL){
    throw new Error("Error en conectar con supabase por falta de claves");
}
export const supabase = createClient(supabaseURL, supabaseKEY);