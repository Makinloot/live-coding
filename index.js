const btn = document.querySelectorAll('.btn');
const form = document.querySelectorAll('.form');
const closeBtn = document.querySelectorAll('.close-form')

btn.forEach( (item, i) => {
    // console.log(item, i)
    item.addEventListener('click', () => {
        item.style.display = 'none';
        form[i].style.display = 'block';
        console.log(form)
    });
});

closeBtn.forEach( (item, i) => {
    item.addEventListener('click', () => {
        form[i].style.display = 'none';
        btn[i].style.display = 'block';
    })
})
