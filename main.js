document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const nome = document.getElementById('nome');
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/matheus-meissner')
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        avatar.src = json.avatar_url;
        nome.innerText = json.name;
        username.innerText = json.login;
        repo.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.html_url;
    })
})