let contact = document.getElementById("contact")
let forward = document.getElementById("forward")
let back = document.getElementById("back")

let imageIndex = 0
let videoIndex = 0

let drawing = document.getElementById("drawing_img")

let video = document.getElementById("video")
let description = document.getElementById("description")
let link = document.getElementById("github")

let back_project = document.getElementById("back_project");
let forward_project = document.getElementById("forward_project");


let projects = [
    {
        "video": '<iframe width="400" height="400" src="https://www.youtube.com/embed/TaZ2JLbOvAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        "description": '<p>In this project I made a pokemon game using android studio and java. I also used a pokemon api to get all the images and moves for each pokemon</p>',
        "github": '<a href="https://github.com/Kendric285/FinaleProject2020/tree/master/project/app/src/main/java/com/example/finalproject2020" target="_blank">Github Link</a>'
    },
    {
        "video": '<video class="tab" controls height="400" width="400">Your browser does not support the &lt;video&gt; tag.<source src="/images/reminders.mov"/></video>',
        "description": '<p>This is a reminders website I used app using flask, SQlite database, and a sensehat </p>',
        "github": '<a href="https://github.com/Kendric285/teamedge-flask-projects/blob/master/reminders/app.py" target="_blank">Github Link</a>'
    },
    {
        "video":'<video class="tab" controls height="400" width="400">Your browser does not support the &lt;video&gt; tag.<source src="/images/social.mov"/></video>',
        "description":'<p>This is I think the project I was most proud of because me and my partner were able to make a fully functional social media app. This video show the how the user logs into our site, posts, and interatcs with other users. Our site has so many features I could keep going on about it.</p>' ,
        "github": '<a href="https://github.com/Kendric285/Final-Project-2021/blob/master/app.py" target="_blank">Github Link</a>'   
    }
]

contact.onclick = function(){
    console.log("clicked")
    location.href = "/templates/contact.html"
}

let drawings = ['/images/black.jpeg', '/images/goku_vegeta.jpeg ','/images/buu.jpeg', '/images/kid.jpeg', '/images/king.jpeg', '/images/ninja.jpeg']

forward.onclick = function(){
    if(imageIndex < 5){
        imageIndex++;
    }else{
        imageIndex = 0;
    }
    drawing.src = drawings[imageIndex]
    
}
back.onclick = function(){
    if(imageIndex == 0){
        imageIndex = 5
    }
    else{
        imageIndex--;
    }
    drawing.src = drawings[imageIndex]
}

forward_project.onclick = function(){
    if(videoIndex < 2){
        videoIndex++;
    }
    else{
        videoIndex = 0;
    }
    video.innerHTML = projects[videoIndex].video
    description.innerHTML = projects[videoIndex].description
    link.innerHTML = projects[videoIndex].github
}

back_project.onclick = function(){
    if(videoIndex == 0){
        videoIndex = 2
    }
    else{
        videoIndex--;
    }

    video.innerHTML = projects[videoIndex].video
    description.innerHTML = projects[videoIndex].description
    link.innerHTML = projects[videoIndex].github
}