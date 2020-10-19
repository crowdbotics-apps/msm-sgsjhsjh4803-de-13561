import * as types from "./constants"
export const dsslackconnector1_get_v1_albums_list = (ids, market) => ({
  type: types.DSSLACKCONNECTOR1_GET_V1_ALBUMS_LIST,
  ids,
  market
})
export const dsslackconnector1_get_v1_albums_listSucceeded = (
  response,
  starter
) => ({
  type: types.DSSLACKCONNECTOR1_GET_V1_ALBUMS_LIST_SUCCEEDED,
  response,
  starter
})
export const dsslackconnector1_get_v1_albums_listFailed = (error, starter) => ({
  type: types.DSSLACKCONNECTOR1_GET_V1_ALBUMS_LIST_FAILED,
  error,
  starter
})
