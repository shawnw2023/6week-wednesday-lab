const btn = document.querySelector('button')

const clickHandler = () => {
    axios.get('/api/stuff')
    .then((res) => alert(res.data))
    .catch((err) => alert("there was turbulance"))
}

btn.addEventListener('click', clickHandler)