export default function healthType(gamerSort) {
  const result = gamerSort.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    }
    return 0;
  });
  return result;
}
