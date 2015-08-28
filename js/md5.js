function md5cycle(r, f) {
	var h = r[0],
	i = r[1],
	n = r[2],
	t = r[3];
	h = ff(h, i, n, t, f[0], 7, -680876936), t = ff(t, h, i, n, f[1], 12, -389564586), n = ff(n, t, h, i, f[2], 17, 606105819), i = ff(i, n, t, h, f[3], 22, -1044525330), h = ff(h, i, n, t, f[4], 7, -176418897), t = ff(t, h, i, n, f[5], 12, 1200080426), n = ff(n, t, h, i, f[6], 17, -1473231341), i = ff(i, n, t, h, f[7], 22, -45705983), h = ff(h, i, n, t, f[8], 7, 1770035416), t = ff(t, h, i, n, f[9], 12, -1958414417), n = ff(n, t, h, i, f[10], 17, -42063), i = ff(i, n, t, h, f[11], 22, -1990404162), h = ff(h, i, n, t, f[12], 7, 1804603682), t = ff(t, h, i, n, f[13], 12, -40341101), n = ff(n, t, h, i, f[14], 17, -1502002290), i = ff(i, n, t, h, f[15], 22, 1236535329), h = gg(h, i, n, t, f[1], 5, -165796510), t = gg(t, h, i, n, f[6], 9, -1069501632), n = gg(n, t, h, i, f[11], 14, 643717713), i = gg(i, n, t, h, f[0], 20, -373897302), h = gg(h, i, n, t, f[5], 5, -701558691), t = gg(t, h, i, n, f[10], 9, 38016083), n = gg(n, t, h, i, f[15], 14, -660478335), i = gg(i, n, t, h, f[4], 20, -405537848), h = gg(h, i, n, t, f[9], 5, 568446438), t = gg(t, h, i, n, f[14], 9, -1019803690), n = gg(n, t, h, i, f[3], 14, -187363961), i = gg(i, n, t, h, f[8], 20, 1163531501), h = gg(h, i, n, t, f[13], 5, -1444681467), t = gg(t, h, i, n, f[2], 9, -51403784), n = gg(n, t, h, i, f[7], 14, 1735328473), i = gg(i, n, t, h, f[12], 20, -1926607734), h = hh(h, i, n, t, f[5], 4, -378558), t = hh(t, h, i, n, f[8], 11, -2022574463), n = hh(n, t, h, i, f[11], 16, 1839030562), i = hh(i, n, t, h, f[14], 23, -35309556), h = hh(h, i, n, t, f[1], 4, -1530992060), t = hh(t, h, i, n, f[4], 11, 1272893353), n = hh(n, t, h, i, f[7], 16, -155497632), i = hh(i, n, t, h, f[10], 23, -1094730640), h = hh(h, i, n, t, f[13], 4, 681279174), t = hh(t, h, i, n, f[0], 11, -358537222), n = hh(n, t, h, i, f[3], 16, -722521979), i = hh(i, n, t, h, f[6], 23, 76029189), h = hh(h, i, n, t, f[9], 4, -640364487), t = hh(t, h, i, n, f[12], 11, -421815835), n = hh(n, t, h, i, f[15], 16, 530742520), i = hh(i, n, t, h, f[2], 23, -995338651), h = ii(h, i, n, t, f[0], 6, -198630844), t = ii(t, h, i, n, f[7], 10, 1126891415), n = ii(n, t, h, i, f[14], 15, -1416354905), i = ii(i, n, t, h, f[5], 21, -57434055), h = ii(h, i, n, t, f[12], 6, 1700485571), t = ii(t, h, i, n, f[3], 10, -1894986606), n = ii(n, t, h, i, f[10], 15, -1051523), i = ii(i, n, t, h, f[1], 21, -2054922799), h = ii(h, i, n, t, f[8], 6, 1873313359), t = ii(t, h, i, n, f[15], 10, -30611744), n = ii(n, t, h, i, f[6], 15, -1560198380), i = ii(i, n, t, h, f[13], 21, 1309151649), h = ii(h, i, n, t, f[4], 6, -145523070), t = ii(t, h, i, n, f[11], 10, -1120210379), n = ii(n, t, h, i, f[2], 15, 718787259), i = ii(i, n, t, h, f[9], 21, -343485551), r[0] = add32(h, r[0]), r[1] = add32(i, r[1]), r[2] = add32(n, r[2]), r[3] = add32(t, r[3])
}

function cmn(r, f, h, i, n, t) {
	return f = add32(add32(f, r), add32(i, t)), add32(f << n | f >>> 32 - n, h)
}

function ff(r, f, h, i, n, t, d) {
	return cmn(f & h | ~f & i, r, f, n, t, d)
}

function gg(r, f, h, i, n, t, d) {
	return cmn(f & i | h & ~i, r, f, n, t, d)
}

function hh(r, f, h, i, n, t, d) {
	return cmn(f ^ h ^ i, r, f, n, t, d)
}

function ii(r, f, h, i, n, t, d) {
	return cmn(h ^ (f | ~i), r, f, n, t, d)
}

function md51(r) {
	txt = "";
	var f, h = r.length,
	i = [1732584193, -271733879, -1732584194, 271733878];
	for (f = 64; f <= r.length; f += 64) md5cycle(i, md5blk(r.substring(f - 64, f)));
		r = r.substring(f - 64);
	var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (f = 0; f < r.length; f++) n[f >> 2] |= r.charCodeAt(f) << (f % 4 << 3);
		if (n[f >> 2] |= 128 << (f % 4 << 3), f > 55)
			for (md5cycle(i, n), f = 0; 16 > f; f++) n[f] = 0;
				return n[14] = 8 * h, md5cycle(i, n), i
		}

		function md5blk(r) {
			var f, h = [];
			for (f = 0; 64 > f; f += 4) h[f >> 2] = r.charCodeAt(f) + (r.charCodeAt(f + 1) << 8) + (r.charCodeAt(f + 2) << 16) + (r.charCodeAt(f + 3) << 24);
				return h
		}

		function rhex(r) {
			for (var f = "", h = 0; 4 > h; h++) f += hex_chr[r >> 8 * h + 4 & 15] + hex_chr[r >> 8 * h & 15];
				return f
		}

		function hex(r) {
			for (var f = 0; f < r.length; f++) r[f] = rhex(r[f]);
				return r.join("")
		}

		function md5(r) {
			return hex(md51(r))
		}

		function add32(r, f) {
			return r + f & 4294967295
		}

		function add32(r, f) {
			var h = (65535 & r) + (65535 & f),
			i = (r >> 16) + (f >> 16) + (h >> 16);
			return i << 16 | 65535 & h
		}
		var hex_chr = "0123456789abcdef".split("");
		"5d41402abc4b2a76b9719d911017c592" != md5("hello");
		var password, thePassword = "fa8eca2cac8fea6f15afb977bff2ffa3";
		// password = prompt("Enter Password", ""), md5(password) == thePassword || (alert("Incorrect Password! Click OK to Enter!"), window.location = "../");

		password = prompt('Prompt text','Suggested input');
		if (password) {
			md5(password) == thePassword || (alert("Incorrect Password! Click OK to Enter!"), window.location = "../");
		} else {
			window.location = "../";	
		}