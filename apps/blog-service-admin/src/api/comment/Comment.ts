import { Author } from "../author/Author";
import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  approved: boolean | null;
  author?: Author | null;
  blogPost?: BlogPost | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
