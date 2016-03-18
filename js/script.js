
function searchUser()
{
    var arrUser = [],
        userName;
    for (var i = 0; i <= 4; i++){
        arrUser[i] = prompt('Введите имя: ');
    }

    userName = prompt('Введите имя пользователя: ');
    for(i = 0; i <= arrUser.length; i++){
        if(arrUser[i] == userName){
            alert(userName + ', вы успешно вошли');
            return 0;
        }
    }
    alert("Error");
}
searchUser();