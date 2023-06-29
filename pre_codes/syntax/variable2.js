var name = 'JAYOON';

var letter = 'The '+name+'++ library includes the same definitions \
as the  language library organized in the same structure of header files, with the following differences:\
Each header file has the same name as the ${name} language version but with a "c" prefix and no extension. \
For example, the ${name}++ equivalent for the ${name} language header file <stdlib.h> is <cstdlib>.'+name;

var letter = `The ${name}++ library includes 

the same definitions

as the  language library organized in the same structure of header files, with the following differences:\
Each header file has the same name as the ${name} language version but with a "c" prefix and no extension. \
For example, the ${name}++ equivalent for the ${name} language header file <stdlib.h> is <cstdlib>. ${name}`;
console.log(letter);
