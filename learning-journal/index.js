import { blogs } from './data.js'
const mainBlog = document.getElementById('main-blog')
const blogContainer = document.getElementById('blog-container')
const viewMore = document.getElementById('view-more')

function renderMainBlog() {
    let blogHTML = ``
    let main = []
    main.push(blogs[0])
    main.forEach(function(blog){
        blogHTML += `
        <p class="blog-date">${blog.date}</p>
        <h1 class="blog-title">${blog.title}</h1>
        <p class="blog-desc">${blog.desc}</p>
        `
    })
    mainBlog.innerHTML = blogHTML
}

function renderBlog() {
    let blogHTML = ``
    let partialBlog = []
    partialBlog.push(blogs[1], blogs[2], blogs[3])

    partialBlog.forEach(function(blog){
        blogHTML += `
        <div class="blog">
            <img src="${blog.image}">
            <p class="blog-date">${blog.date}</p>
            <h2 class="blog-title">${blog.title}</h2>
            <p class="blog-desc">${blog.desc}</p>
        </div>
        `
    })

    blogContainer.innerHTML = blogHTML
}

renderBlog()
renderMainBlog()

function renderAllBlogs() {
    let blogHTML = ``
    let all = []
    for (let i = 1; i < blogs.length; i++) {
        all.push(blogs[i])
    }

    all.forEach(function(blog){
        blogHTML += `
        <div class="blog">
            <img src="${blog.image}">
            <p class="blog-date">${blog.date}</p>
            <h2 class="blog-title">${blog.title}</h2>
            <p class="blog-desc">${blog.desc}</p>
        </div>
        ` 
    })

    blogContainer.innerHTML = blogHTML
}

viewMore.addEventListener('click', function() {
    renderAllBlogs()
    viewMore.style.display = 'none'
})