import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentUpdateInput = {
  approved?: boolean | null;
  author?: AuthorWhereUniqueInput | null;
  blogPost?: BlogPostWhereUniqueInput | null;
  content?: string | null;
};
