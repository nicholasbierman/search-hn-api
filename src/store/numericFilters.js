const SET_CREATED_AT = 'numericFilers/setCreatedAt';
const SET_POINTS = 'numericFilters/setPoints';
const SET_NUM_COMMENTS = 'numericFilters/setNumComments';


const storeCreatedAt = (createdAt) => ({
    type: SET_CREATED_AT,
    payload: createdAt
});

const storePoints = (points) => ({
    type: SET_POINTS,
    payload: points
});

const storeNumComments = (numComments) => ({
    type: SET_NUM_COMMENTS,
    payload: numComments
});


export const setCreatedAt = (createdAt) => async (dispatch) => {
    dispatch(storeCreatedAt(createdAt));
};

export const setNumPoints = (points) => async (dispatch) => {
    dispatch(storePoints(points));
};

export const setNumComments = (numComments) => async (dispatch) => {
    dispatch(storeNumComments(numComments));
};



function reducer (state = { created_at_i: "", points: "", num_comments: "" }, action) {
    let newState;
    switch (action.type) {
        case SET_CREATED_AT:
            newState = { ...state };
            newState.created_at_i = action.payload;
            return newState;
        case SET_POINTS:
            newState = { ...state };
            newState.points = action.payload;
            return newState;
        case SET_NUM_COMMENTS:
            newState = { ...state };
            newState.num_comments = action.payload;
            return newState;
        default:
            return state;
    };
};

export default reducer;