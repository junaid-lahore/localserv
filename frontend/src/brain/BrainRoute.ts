import {
  BlogPostCreate,
  CheckApiHealthData,
  CheckHealthData,
  CreateBlogPostData,
  GetBlogPostData,
  GetRequirementsContentData,
  ListBlogPostsData,
  SubscribeToWaitlistData,
  WaitlistSubmission,
} from "./data-contracts";

export namespace Brain {
  /**
   * @description Check health of application. Returns 200 when OK, 500 when not.
   * @name check_health
   * @summary Check Health
   * @request GET:/_healthz
   */
  export namespace check_health {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckHealthData;
  }

  /**
   * @description Receives a waitlist submission, validates it, stores it in Firestore, and sends an email notification.
   * @tags dbtn/module:waitlist
   * @name subscribe_to_waitlist
   * @summary Subscribe To Waitlist
   * @request POST:/routes/waitlist/subscribe
   */
  export namespace subscribe_to_waitlist {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WaitlistSubmission;
    export type RequestHeaders = {};
    export type ResponseBody = SubscribeToWaitlistData;
  }

  /**
   * @description List all blog posts. Retrieves the index and then loads each post.
   * @tags dbtn/module:blog
   * @name list_blog_posts
   * @summary List Blog Posts
   * @request GET:/routes/blog
   */
  export namespace list_blog_posts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListBlogPostsData;
  }

  /**
   * @description Create a new blog post. A unique ID is generated from the title. The post is saved to db.storage.json.
   * @tags dbtn/module:blog
   * @name create_blog_post
   * @summary Create Blog Post
   * @request POST:/routes/blog
   */
  export namespace create_blog_post {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BlogPostCreate;
    export type RequestHeaders = {};
    export type ResponseBody = CreateBlogPostData;
  }

  /**
   * @description Retrieve a single blog post by its ID.
   * @tags dbtn/module:blog
   * @name get_blog_post
   * @summary Get Blog Post
   * @request GET:/routes/blog/{post_id}
   */
  export namespace get_blog_post {
    export type RequestParams = {
      /** Post Id */
      postId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetBlogPostData;
  }

  /**
   * @description Reads and returns the content of requirements.txt.
   * @tags dbtn/module:diagnostics
   * @name get_requirements_content
   * @summary Get Requirements Content
   * @request GET:/routes/diag/requirements
   */
  export namespace get_requirements_content {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetRequirementsContentData;
  }

  /**
   * @description A simple endpoint to confirm the API is running.
   * @tags dbtn/module:health
   * @name check_api_health
   * @summary Check Api Health
   * @request GET:/routes/health
   */
  export namespace check_api_health {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckApiHealthData;
  }
}
