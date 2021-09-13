function maxAdding(item,db) {
  const index = db.findIndex((card) => card.id === item.id);
  if (index === -1) {
    return 0;
  } else {
    if (db[index].count >= item.count) {
      return 1;
    } else {
      return 0;
    }
  }
}
export default maxAdding;
