import type { Comment } from "@prisma/client";
import { db } from "@/db";
import { cache } from "react";

export type CommentWithAuthor = Comment & {
    user: {
        name: string | null,
        image: string | null,
    }
}

export const fetchCommentsByPostId = cache(
(postId: string): Promise<CommentWithAuthor[]> => {
    return db.comment.findMany({
        where: {
            postId,
        },
        include: {
            user: {
                select: {
                    name: true,
                    image: true,
                }
            }
        }
    })
})