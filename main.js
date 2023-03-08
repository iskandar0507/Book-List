window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title'),
        author = document.querySelector('#author'),
        year = document.querySelector('#year'),
        btn = document.querySelector('.btn'),
        bookList = document.querySelector('#book-list');

    btn.addEventListener('click', (event) => {
        event.preventDefault()

        //  Basiv validation

        if (title.value == '' && author.value == '' && year.value == '') {
            alert('Please input your information.')
        } else {
            const newRow = document.createElement('tr')

            // creating new title
            const newTitle = document.createElement('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)

            // creating new author
            const newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)

            // creating new year
            const dataYear = document.createElement('th')
            dataYear.innerHTML = year.value
            newRow.appendChild(dataYear)

            // displaying in UI
            bookList.appendChild(newRow)

            title.value = ''
            author.value = ''
            year.value = ''

        }
    })
})
