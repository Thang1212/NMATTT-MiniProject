export default function sha1(message) {
    function rotateLeft(n, s) {
        return (n << s) | (n >>> (32 - s));
    }

    function toWords(buffer) {
        var words = [];
        for (var i = 0; i < buffer.length * 8; i += 8) {
            words[i >>> 5] |= (buffer[i / 8] & 255) << (24 - (i % 32));
        }
        return words;
    }

    function toHex(value) {
        var hex = "";
        for (var i = 0; i < 4; i++) {
            hex += ((value >>> (24 - i * 8)) & 255).toString(16).padStart(2, "0");
        }
        return hex;
    }

    var block = [];
    var h0 = 0x67452301;
    var h1 = 0xefcdab89;
    var h2 = 0x98badcfe;
    var h3 = 0x10325476;
    var h4 = 0xc3d2e1f0;

  // Padding
  message = unescape(encodeURIComponent(message)); // UTF-8 encode
  var messageLength = message.length * 8;
  message += String.fromCharCode(0x80);
  while (message.length % 64 !== 56) {
    message += String.fromCharCode(0);
  }
  message += String.fromCharCode(
    (messageLength >>> 24) & 255,
    (messageLength >>> 16) & 255,
    (messageLength >>> 8) & 255,
    messageLength & 255
  );

  // Process each 512-bit block
  for (var i = 0; i < message.length; i += 64) {
    block = toWords(message.slice(i, i + 64));

    var a = h0;
    var b = h1;
    var c = h2;
    var d = h3;
    var e = h4;

    for (var j = 0; j < 80; j++) {
      var f, k;
      if (j < 20) {
        f = (b & c) | (~b & d);
        k = 0x5a827999;
      } else if (j < 40) {
        f = b ^ c ^ d;
        k = 0x6ed9eba1;
      } else if (j < 60) {
        f = (b & c) | (b & d) | (c & d);
        k = 0x8f1bbcdc;
      } else {
        f = b ^ c ^ d;
        k = 0xca62c1d6;
      }

      var temp = (rotateLeft(a, 5) + f + e + k + block[j]) >>> 0;
      e = d;
      d = c;
      c = rotateLeft(b, 30);
      b = a;
      a = temp;
    }

    h0 = (h0 + a) >>> 0;
    h1 = (h1 + b) >>> 0;
    h2 = (h2 + c) >>> 0;
    h3 = (h3 + d) >>> 0;
    h4 = (h4 + e) >>> 0;
  }

  // Produce the final hash value
  var result = toHex(h0) + toHex(h1) + toHex(h2) + toHex(h3) + toHex(h4);

  return result;
}
