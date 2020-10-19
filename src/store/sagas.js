import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* dsslackconnector1_get_v1_albums_listWorker(action) {
  try {
    const result = yield call(
      apiService.dsslackconnector1_get_v1_albums_list,
      action
    )
    yield put(
      actions.dsslackconnector1_get_v1_albums_listSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.dsslackconnector1_get_v1_albums_listFailed(err, action))
  }
}
function* dsslackconnector1_get_v1_albums_listWatcher() {
  yield takeEvery(
    types.DSSLACKCONNECTOR1_GET_V1_ALBUMS_LIST,
    dsslackconnector1_get_v1_albums_listWorker
  )
}
export default function* rootSaga() {
  const sagas = [dsslackconnector1_get_v1_albums_listWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
