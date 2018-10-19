let judgeSquareSum = function(c) {
	//loop through starting with a = 0 until a^2 equals to or passes c because 
	//that would be go overboard!
	for (let a = 0; a * a <= c; a++) {
		let b = c - (a * a);
		if (binary_search(0, b, b))
			return true;
	}
	return false;
};

let binary_search = function(s, e, n) {
	if (s > e)
		return false;
	let mid = s + (e - s) / 2;
	if (mid * mid == n)
		return true;
	if (mid * mid > n)
		return binary_search(s, mid - 1, n);
	return binary_search(mid + 1, e, n);
};