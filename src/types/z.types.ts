import z from "zod";
import {chapterFSchema, memberFSchema, newSchema, postFSchema} from "@/schema/db.zod"

export type TPost = z.infer<typeof postFSchema>;

export type TMember = z.infer<typeof memberFSchema>

export type TChapter = z.infer<typeof chapterFSchema>

export type TNew = z.infer<typeof newSchema>