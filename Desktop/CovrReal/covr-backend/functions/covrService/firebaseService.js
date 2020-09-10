import admin from 'firebase-admin'
export const getBars = async () => {
  let snapshot = await admin
    .firestore()
    .collection('bars')
    .get()
  let bars = []
  snapshot.forEach(snapshot =>
    bars.push({
      ...snapshot.data(),
      id: snapshot.id,
    })
  )

  return bars
}
