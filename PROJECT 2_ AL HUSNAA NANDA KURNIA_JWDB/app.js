function login(){
    const email = document.getElementById('email').value
    const password =document.getElementById('password').value

    if(email === 'husnaa@gmail.com' && password === '1234'){
        document.getElementById('box-berhasil').style.display = ''
        document.getElementById('box-gagal').style.display = 'none'
    }else{
        document.getElementById('box-gagal').style.display = ''
        document.getElementById('box-berhasil').style.display = 'none'
    }
}