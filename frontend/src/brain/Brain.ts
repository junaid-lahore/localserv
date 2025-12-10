import {
  BlogPostCreate,
  CheckApiHealthData,
  CheckHealthData,
  CreateBlogPostData,
  CreateBlogPostError,
  GetBlogPostData,
  GetBlogPostError,
  GetBlogPostParams,
  GetRequirementsContentData,
  ListBlogPostsData,
  SubscribeToWaitlistData,
  SubscribeToWaitlistError,
  WaitlistSubmission,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Brain<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Check health of application. Returns 200 when OK, 500 when not.
   *
   * @name check_health
   * @summary Check Health
   * @request GET:/_healthz
   */
  check_health = (params: RequestParams = {}) =>
    this.request<CheckHealthData, any>({
      path: `/_healthz`,
      method: "GET",
      ...params,
    });

  /**
   * @description Receives a waitlist submission, validates it, stores it in Firestore, and sends an email notification.
   *
   * @tags dbtn/module:waitlist
   * @name subscribe_to_waitlist
   * @summary Subscribe To Waitlist
   * @request POST:/routes/waitlist/subscribe
   */
  subscribe_to_waitlist = (data: WaitlistSubmission, params: RequestParams = {}) =>
    this.request<SubscribeToWaitlistData, SubscribeToWaitlistError>({
      path: `/routes/waitlist/subscribe`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description List all blog posts. Retrieves the index and then loads each post.
   *
   * @tags dbtn/module:blog
   * @name list_blog_posts
   * @summary List Blog Posts
   * @request GET:/routes/blog
   */
  list_blog_posts = (params: RequestParams = {}) =>
    this.request<ListBlogPostsData, any>({
      path: `/routes/blog`,
      method: "GET",
      ...params,
    });

  /**
   * @description Create a new blog post. A unique ID is generated from the title. The post is saved to db.storage.json.
   *
   * @tags dbtn/module:blog
   * @name create_blog_post
   * @summary Create Blog Post
   * @request POST:/routes/blog
   */
  create_blog_post = (data: BlogPostCreate, params: RequestParams = {}) =>
    this.request<CreateBlogPostData, CreateBlogPostError>({
      path: `/routes/blog`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieve a single blog post by its ID.
   *
   * @tags dbtn/module:blog
   * @name get_blog_post
   * @summary Get Blog Post
   * @request GET:/routes/blog/{post_id}
   */
  get_blog_post = ({ postId, ...query }: GetBlogPostParams, params: RequestParams = {}) =>
    this.request<GetBlogPostData, GetBlogPostError>({
      path: `/routes/blog/${postId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Reads and returns the content of requirements.txt.
   *
   * @tags dbtn/module:diagnostics
   * @name get_requirements_content
   * @summary Get Requirements Content
   * @request GET:/routes/diag/requirements
   */
  get_requirements_content = (params: RequestParams = {}) =>
    this.request<GetRequirementsContentData, any>({
      path: `/routes/diag/requirements`,
      method: "GET",
      ...params,
    });

  /**
   * @description A simple endpoint to confirm the API is running.
   *
   * @tags dbtn/module:health
   * @name check_api_health
   * @summary Check Api Health
   * @request GET:/routes/health
   */
  check_api_health = (params: RequestParams = {}) =>
    this.request<CheckApiHealthData, any>({
      path: `/routes/health`,
      method: "GET",
      ...params,
    });
}
