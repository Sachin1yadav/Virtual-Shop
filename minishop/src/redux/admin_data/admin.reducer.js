import {
  GET_PROD_LOADING,
  GET_PROD_SUCCESS,
  GET_PROD_FAIL,
  ADD_PROD_LOADING,
  ADD_PROD_ERROR,
  ADD_PROD_SUCCESS,
} from "./admin.actoins.type";

const initState = {
  loading: false,
  error: false,
  products: [],
};

export const adminAllData = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PROD_LOADING: {
      return { ...state,loading:true };
    }
    case GET_PROD_SUCCESS: {
      return { ...state,loading:false, products:payload };
    }
    case GET_PROD_FAIL: {
      return { ...state,error:true };
    }
    case ADD_PROD_LOADING: {
      return { ...state };
    }
    case ADD_PROD_ERROR: {
      return { ...state };
    }
    case ADD_PROD_SUCCESS: {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
