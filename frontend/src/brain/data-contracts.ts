/** BlogPost */
export interface BlogPost {
  /** Title */
  title: string;
  /** Content */
  content: string;
  /** Author */
  author: string;
  /** Id */
  id: string;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
}

/** BlogPostCreate */
export interface BlogPostCreate {
  /** Title */
  title: string;
  /** Content */
  content: string;
  /** Author */
  author: string;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** HealthResponse */
export interface HealthResponse {
  /** Status */
  status: string;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

/** WaitlistResponse */
export interface WaitlistResponse {
  /** Message */
  message: string;
  /** Submissionid */
  submissionId: string;
}

/** WaitlistSubmission */
export interface WaitlistSubmission {
  /** Fullname */
  fullName: string;
  /**
   * Email
   * @format email
   */
  email: string;
  /** Usertype */
  userType: "consumer" | "business";
  /** City */
  city: string;
  /** State */
  state: string;
  /** Industry */
  industry?: string | null;
  /** Serviceinterest */
  serviceInterest?: string | null;
}

export type CheckHealthData = HealthResponse;

export type SubscribeToWaitlistData = WaitlistResponse;

export type SubscribeToWaitlistError = HTTPValidationError;

/** Response List Blog Posts */
export type ListBlogPostsData = BlogPost[];

export type CreateBlogPostData = BlogPost;

export type CreateBlogPostError = HTTPValidationError;

export interface GetBlogPostParams {
  /** Post Id */
  postId: string;
}

export type GetBlogPostData = BlogPost;

export type GetBlogPostError = HTTPValidationError;

export type GetRequirementsContentData = any;

export type CheckApiHealthData = any;
