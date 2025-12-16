import { z } from "zod";

export const postSchema = z.object({
  id: z.number(),
  titulo: z.string(),
  hastags: z.array(z.string()),
  imagen: z.string(),
  altText: z.string(),
  parrafos: z.array(z.string()),
});
export const postFSchema = z.object({
  id: z.number(),
  titulo: z.string(),
  hastags: z.array(z.string()),
  publicUrl: z.object({
    publicUrl: z.string(),
  }),
  altText: z.string(),
  parrafos: z.array(z.string()),
});
export const postsSchema = z.array(postSchema);
export const postsFSchema = z.array(postFSchema);

export const memberSchema = z.object({
  id: z.number(),
  puesto: z.string(),
  nombre: z.string(),
  posicion: z.string().nullable(),
  imagen: z.string(),
});
export const memberFSchema = z.object({
  id: z.number(),
  puesto: z.string(),
  nombre: z.string(),
  posicion: z.string().nullable(),
  publicUrl: z.object({
    publicUrl: z.string(),
  }),
});

export const membersSchema = z.array(memberSchema);
export const membersFSchema = z.array(memberFSchema);

export const chapterSchema = z.object({
  id:z.number(),
  titulo:z.string(),
  enlace:z.string(),
  altText:z.string(),
  imagen:z.string()
});
export const chapterFSchema = z.object({
  id:z.number(),
  titulo:z.string(),
  enlace:z.string(),
  altText:z.string(),
  publicUrl: z.object({
    publicUrl: z.string(),
  })
});
export const chaptersSchema = z.array(chapterSchema);
export const chaptersFSchema = z.array(chapterFSchema);

export const newSchema = z.object({
  id:z.number(),
  titulo:z.string(),
  position:z.string(),
  enlace:z.string()
});
export const newsSchema = z.array(newSchema);