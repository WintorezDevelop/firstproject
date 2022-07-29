function selectClassActive (id) {
    let el = document.getElementsByClassName('active')[0];
    el.classList.remove('active');
    let a = document.getElementById(id);
    a.classList.add('active');
}