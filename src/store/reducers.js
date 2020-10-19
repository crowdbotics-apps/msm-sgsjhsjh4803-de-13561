import * as types from "./constants"

const initialState = { dSSlackConnector: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.DSSLACKCONNECTOR1_GET_V1_ALBUMS_LIST:
    case types.DSSLACKCONNECTOR1_GET_V1_ALBUMS_LIST_SUCCEEDED:
    case types.DSSLACKCONNECTOR1_GET_V1_ALBUMS_LIST_FAILED:
      return Object.assign({}, state, {
        dSSlackConnector: [...state.dSSlackConnector, action.response]
      })
    default:
      return state
  }
}
