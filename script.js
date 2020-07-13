// console.log('Hello');
// let hov_on = function (elem) {
//     let img = elem.children[0];
//     alert(img);
// };
alert('hello');

document.addEventListener('click', function(e) {
    console.log(e.target);
    if(e.target.id === 'on') {
        alert('hello');
    }
});