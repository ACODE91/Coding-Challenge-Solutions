var isPalindrome = function(x) {
    if (x < 0) return false
    if (x < 10) return true
    const st = []
    let a = x
    while (a) {
      st.push(a % 10)
      a = Math.floor(a / 10)
    }
    const midpoint = Math.floor(st.length / 2)
    for (let i = 0; i < midpoint; i++) {
      if (st[i] !== st[st.length - i - 1]) return false
    }
    return true
  };