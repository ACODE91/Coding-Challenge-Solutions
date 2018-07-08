//brute force
var isValid = function(s) {
    let stack = [];
    let list = [')', '}', ']'];
    
    for(let i = 0; i < s.length; i++) {
        if(stack[stack.length - 1] == s[i]) {
            stack.pop();
        } else if(s[i] != stack[stack.length - 1]) {
            for(let j = 0; j < list.length; j++) {
                if(s[i] == list[j]) {
                    return false;
                }
            }
        }
    
        if(s[i] == '(') {
            stack.push(')');
        } else if(s[i] == '{') {
            stack.push('}');
        } else if(s[i] == '[') {
            stack.push(']');
        }
    }
        if(stack.length == 0) {
            return true;
        }
        
        return false;
    };