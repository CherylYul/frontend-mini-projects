This repository displays my front-end exercise with some common formats we usually see on web. I also note down some important codes that will support lots of tasks related to front-end.

:rocket: Actively updating!

### **Commonly used code**

<hr>

`<input>` type (radio, checkbox), id, value, name
`<label>` for (associated with the id of input)

Multiple inputs have the same name will limit the choice of users to choose only 1, if it has different names means it can have multiple choices.

```
<input type="radio" id="horses" value="horses" name="choice-radios">
<label for="horses">choosing horses</label>

const checkedRadio = document.querySelector('input[type="radio"]:checked')
checkRadio.value

A checkbox will return value true or false
const acceptTerms = document.getElementById('accept-terms').checked
```

`.includes()` a method for checking if an array holds a given value

`.filter()` a filtered array

```
const thrillerSeries = series.filter(function(show){
    return show.genres.includes('thriller')
})
```

`.getElementById`

`.getElementsByClassName` (iterate through a list)

`.querySelector`

`.parentElement`

`.classList.remove('')`

`.classList.add('')`

document.getElementById(e.target.id).parentElement.classList.add('read')
document.getElementById(e.target.id).parentElement.classList.remove('unread')
