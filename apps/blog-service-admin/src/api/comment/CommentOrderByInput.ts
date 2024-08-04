import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  approved?: SortOrder;
  authorId?: SortOrder;
  blogPostId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
