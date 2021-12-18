export const initialState = {
  isLoggedIn: true,
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "임우찬",
      },
      content: "첫 번째 게시글",
      img: "data:image/jpeg;base64,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",
      Comments: [],
    }, // 화면에 보일 포스트들
  ],
  imagePaths: [], // 미리보기 이미지 경로
  addPostError: false, // 포스트 업로드 실패
  addPostErrorReason: false, // 포스트 업로드 실패 사유
  isAddingPost: false, // 포스트 업로드중
  postAdded: false,
  isAddingComment: false,
  addCommentErrorReason: "",
  commentAdded: false,
};

const dummyPost = {
  User: {
    id: 1,
    nickname: "임우찬",
  },
  content: "나는 더미입니다.",
  Comments: [],
};

const dummyComment = {
  id: 1,
  User: {
    id: 1,
    nickname: "임우찬",
  },
  createdAt: new Date(),
  content: "더미댓글입니다.",
};

export const ADD_POST = "ADD_POST";
export const ADD_DUMMY = "ADD_DUMMY";

export const LOAD_MAIN_ADD_POSTS_REQUEST = "LOAD_MAIN_ADD_POSTS_REQUEST";
export const LOAD_MAIN_ADD_POSTS_SUCCESS = "LOAD_MAIN_ADD_POSTS_SUCCESS";
export const LOAD_MAIN_ADD_POSTS_FAILURE = "LOAD_MAIN_ADD_POSTS_FAILURE";

export const LOAD_HASHTAG_ADD_POSTS_REQUEST = "LOAD_HASHTAG_ADD_POSTS_REQUEST";
export const LOAD_HASHTAG_ADD_POSTS_SUCCESS = "LOAD_HASHTAG_ADD_POSTS_SUCCESS";
export const LOAD_HASHTAG_ADD_POSTS_FAILURE = "LOAD_HASHTAG_ADD_POSTS_FAILURE";

export const LOAD_USER_ADD_POSTS_REQUEST = "LOAD_USER_ADD_POSTS_REQUEST";
export const LOAD_USER_ADD_POSTS_SUCCESS = "LOAD_USER_ADD_POSTS_SUCCESS";
export const LOAD_USER_ADD_POSTS_FAILURE = "LOAD_USER_ADD_POSTS_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const LOAD_COMMENT_REQUEST = "LOAD_COMMENT_REQUEST";
export const LOAD_COMMENT_SUCCESS = "LOAD_COMMENT_SUCCESS";
export const LOAD_COMMENT_FAILURE = "LOAD_COMMENT_FAILURE";

export const RETWEET_REQUEST = "RETWEET_REQUEST";
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";
export const RETWEET_FAILURE = "RETWEET_FAILURE";

export const REMOVE_RETWEET_REQUEST = "REMOVE_RETWEET_REQUEST";
export const REMOVE_RETWEET_SUCCESS = "REMOVE_RETWEET_SUCCESS";
export const REMOVE_RETWEET_FAILURE = "REMOVE_RETWEET_FAILURE";

// const addPost = {
//   type: ADD_POST,
// };

const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "Hello",
    UserId: 1,
    User: {
      nickname: "임우찬",
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST: {
      return {
        ...state,
        isAddingPost: true,
        addPostErrorReason: "",
        postAdded: false,
      };
    }
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        isAddingPost: false,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        isAddingPost: false,
        addPostErrorReason: action.error,
      };
    }
    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        isAddingComment: true,
        addCommentErrorReason: "",
        commentAdded: false,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        (v) => v.id === action.data.postId
      );
      const post = state.mainPosts[postIndex];
      const Comments = [...post.Comments, dummyComment];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };
      return {
        ...state,
        isAddingComment: false,
        mainPosts,
        commentAdded: true,
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        isAddingComment: false,
        addCommentErrorReason: action.error,
      };
    }
    case ADD_DUMMY: {
      return {
        ...state, // spread쓰는 이유? 새로운객체 생성해 참조 바꿀라고(바뀐건지 안바뀐건지 모르니깐.)
        mainPosts: [action.data, ...state.mainPosts],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
