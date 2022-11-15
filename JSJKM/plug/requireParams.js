if (!["?null", "?", "null", "", null, undefined].includes(location.search)) {
    localStorage.setItem('skmParams', location.search)
}
else if (!["?null", "?", "null", "", null, undefined].includes(localStorage.getItem('skmParams'))) {
    location.search = localStorage.getItem('skmParams')
}
else {
    const input = window.prompt('params')
    if (input.includes('?')) {
        input = input.split('?')[1]
    }
    localStorage.setItem('skmParams', input)
    location.search = input
}
