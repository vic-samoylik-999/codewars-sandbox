function getDNSStats(domains) {
  const slices = [];
  const result = {}
  for (let item of domains) {
    slices.push(item.split(".").reverse());
  }
  
}

const test = ["code.yandex.ru", "music.yandex.ru", "yandex.ru"];

/* The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

console.log(getDNSStats(test));
