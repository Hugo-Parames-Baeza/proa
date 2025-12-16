import { supabase } from "@/services/supabase";
import {
  postsFSchema,
  postsSchema,
  membersSchema,
  membersFSchema,
  chaptersSchema,
  chaptersFSchema,
  newsSchema,
} from "@/schema/db.zod";

export async function getPosts() {
  const { data, error } = await supabase.from("posts").select();
  if (error) throw error;
  const validated = postsSchema.parse(data);
  if (!validated)
    throw new Error("La validacion de la base de datos ha tenido algun error");
  const postsWithUrls = data.map((post) => {
    const { data: publicUrl } = supabase.storage
      .from("imagenes")
      .getPublicUrl(`images/${post.imagen}`);
    return {
      ...post,
      publicUrl,
    };
  });
  const resultado = postsFSchema.parse(postsWithUrls);
  if (resultado) return resultado;
}

export async function getMembers() {
  const { data, error } = await supabase.from("miembros").select();
  if (!data) {
    throw error;
  }
  if (!membersSchema.parse(data)) {
    throw new Error("La informacion no ha pasado la validacion");
  }
  const membersWithUrls = data.map((member) => {
    const { data: publicUrl } = supabase.storage
      .from("imagenes")
      .getPublicUrl(`team/${member.imagen}`);
    return {
      ...member,
      publicUrl,
    };
  });
  if (!membersFSchema.parse(membersWithUrls) || !membersWithUrls) {
    throw new Error("La informacion no ha pasado la validacion");
  }
  return membersWithUrls;
}
export async function getChapters() {
  const { data, error } = await supabase.from("capitulos").select();
  if (!data) {
    throw error;
  }
  if (!chaptersSchema.parse(data)) {
    throw new Error("La informacion no ha pasado la validacion");
  }
  const chaptersWithUrls = data.map((chap) => {
    const { data: publicUrl } = supabase.storage
      .from("imagenes")
      .getPublicUrl(`podcast/${chap.imagen}`);
    return {
      ...chap,
      publicUrl,
    };
  });
  if (!chaptersFSchema.parse(chaptersWithUrls) || !chaptersWithUrls) {
    throw new Error("La informacion no ha pasado la validacion");
  }
  return chaptersWithUrls;
}
export async function getNews() {
  const { data, error } = await supabase.from("novedades").select();
  if (!data) {
    throw error;
  }
  if (!newsSchema.parse(data)) {
    throw new Error("La informacion no ha pasado la validacion");
  }
  return data;
}
