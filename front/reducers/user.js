const dummyUser = {
  nickname: "임우찬",
  Post: [],
  Followings: [],
  Followers: [],
  signUpData: {},
  id: 1,
};
export const initialState = {
  // 이 부분이 store, 여기 넣어준 값이 초기 state, 이게 react의 state라고 생각하면 될듯, 이 외 나머지는 setState라고 보면 될듯.
  me: null, // 내 정보
  isLoggedIn: false, // 로그인 여부
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingIn: false, // 로그인 시도중
  logInErrorReason: "", // 로그인 에러 사유
  signedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: "", // 회원가입 에러 사유
  followingList: [], // 팔로잉 리스트
  followerList: [], // 팔로워 리스트
  userInfo: null, // 남의 정보
};

// setState하는 부분이 통째로 action과 reducer로 변경되었다고 생각하면 될듯.
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOG_IN = "LOG_IN"; // 액션의 이름
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const LOG_OUT = "LOG_OUT";
export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const LOAD_FOLLOW_REQUEST = "LOAD_FOLLOW_REQUEST";
export const LOAD_FOLLOW_SUCCESS = "LOAD_FOLLOW_SUCCESS";
export const LOAD_FOLLOW_FAILURE = "LOAD_FOLLOW_FAILURE";

export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
export const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";

export const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
export const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
export const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";

export const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
export const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
export const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
        logInErrorReason: "",
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        me: null,
        isLoggingIn: false,
        logInErrorReason: action.error,
      };
    }
    case LOG_IN_SUCCESS: {
      console.log(action);
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
        isLoggingIn: false,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        user: null,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggedIn: false,
        me: null,
        isLoggingIn: false,
      };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        logOutErrorReason: action.error,
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        isSignedUp: false,
        signUpErrorReason: "",
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true,
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
        signUpErrorReason: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
