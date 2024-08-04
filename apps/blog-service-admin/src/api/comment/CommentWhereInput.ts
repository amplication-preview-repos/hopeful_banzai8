import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  approved?: BooleanNullableFilter;
  author?: AuthorWhereUniqueInput;
  blogPost?: BlogPostWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
};
