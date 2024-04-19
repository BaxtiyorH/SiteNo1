const btn = document.getElementById('btn');

const btnn = document.getElementById('btnn')

btn.addEventListener('click', function onClick(event) {
    // 👇️ change background color
    document.body.style.backgroundColor = 'black';

    // 👇️ optionally change text color
    // document.body.style.color = 'white';
});

btnn.addEventListener('click', function onClick(event) {
    // 👇️ change background color
    document.body.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // document.body.style.color = 'white';
});