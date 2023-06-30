const word = 'jayoon';

/** 개행을 사용하기 위해 n이전에 역슬래시를 넣는데 이때 역슬래시 \ 를 두 개 넣으면 개행으로 인식하지 못한다. */
let str = 'Dear ' + word + '\n\n\
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + word + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' + word + ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' + word + ' sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

 /** 변수를 나타내기 위해서는 중괄호 {} 밖에 사용하지 못한다. 소괄호나 대괄호는 단순히 문자로 인식함. 
  * template의 시작과 끝을 나타내는 것은 Back quote 라고 불린다.
 */
let letter = `Dear ${word}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${word} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ${word} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ${word} sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
console.log(str + '\n\n\n');
console.log(letter);