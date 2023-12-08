let i = 5;
let ask = prompt('Пароль');
let pass = '8888';
do {
  if(ask !== pass){
  	if (i === 1) {
  		alert("Попробуйте позже");
  		i = 0;
  	} else {
  		ask = prompt(`Попробуйте еще раз. У вас ещё ${i - 1} попытки`);
    	i--;
  	}
  }
  else if(ask == pass){
    alert('Добро пожаловать');
    i = 0;
  }
} while(i > 0);