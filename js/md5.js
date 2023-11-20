export default function md5(str) {
  function rotateLeft(value, shift) {
    return (value << shift) | (value >>> (32 - shift));
  }

  function convertToWordArray(str) {
    const words = [];
    for (let i = 0; i < str.length * 8; i += 8) {
      words[i >> 5] |= (str.charCodeAt(i / 8) & 0xff) << (i % 32);
    }
    return words;
  }

  const appendPadding = function (data) {
    const bitLength = data.length * 8;
    data.push(0x80);
    while (data.length % 64 !== 56) {
      data.push(0);
    }
    for (let i = 0; i < 8; i++) {
      data.push((bitLength >>> (8 * i)) & 0xff);
    }
  };

  const initialHashValues = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476];
  const k = [
    0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee,
    0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501,
    0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be,
    0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821,
    0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa,
    0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
    0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed,
    0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a,
    0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c,
    0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70,
    0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05,
    0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
    0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039,
    0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1,
    0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1,
    0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391
  ];

  const words = convertToWordArray(str);
  const hashValues = initialHashValues.slice();

  appendPadding(words);

  for (let i = 0; i < words.length; i += 16) {
    const chunk = words.slice(i, i + 16);
    let [a, b, c, d] = hashValues;

    for (let j = 0; j < 64; j++) {
      let f, g;

      if (j < 16) {
        f = (b & c) | ((~b) & d);
        g = j;
      } else if (j < 32) {
        f = (d & b) | ((~d) & c);
        g = (5 * j + 1) % 16;
      } else if (j < 48) {
        f = b ^ c ^ d;
        g = (3 * j + 5) % 16;
      } else {
        f = c ^ (b | (~d));
        g = (7 * j) % 16;
      }

      const temp = d;
      d = c;
      c = b;
      b = b + rotateLeft((a + f + k[j] + chunk[g]), [7, 12, 17, 22][Math.floor(j / 16)]);
      a = temp;
    }

    hashValues[0] += a;
    hashValues[1] += b;
    hashValues[2] += c;
    hashValues[3] += d;
  }

  const result = hashValues.map(value => ('00000000' + (value >>> 0).toString(16)).slice(-8)).join('');
  return result;
}
