import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_ITEMS, fetchedItems } from './actions'


async function fetchItemsFromApi() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const items = await data.json()
  return items
}

function* fetchItemsWorker(action) {
  try {
    console.log('fetching items from server...')
    const items = yield call(fetchItemsFromApi)

    console.log('items fetched, dispatching to redux...')
    yield put(fetchedItems(items))
  }
  catch (e) {
    yield put(fetchedItems([]))
  }
}

export function* fetchItemsSaga() {
  yield takeEvery(FETCH_ITEMS, fetchItemsWorker)
}
