/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlogPostListRelationFilter } from "../../blogPost/base/BlogPostListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CommentListRelationFilter } from "../../comment/base/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class AuthorWhereInput {
  @ApiProperty({
    required: false,
    type: () => BlogPostListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BlogPostListRelationFilter)
  @IsOptional()
  @Field(() => BlogPostListRelationFilter, {
    nullable: true,
  })
  blogPosts?: BlogPostListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CommentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommentListRelationFilter)
  @IsOptional()
  @Field(() => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;
}

export { AuthorWhereInput as AuthorWhereInput };
