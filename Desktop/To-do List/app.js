// Timer hovering

const timer = document.querySelector('.timer');
const Timerr = document.querySelector('.timercontainer');
const timerIcon = document.querySelector('#icon-timer');
const timerText = document.querySelector('.text-container-timer');
const TITLE = document.querySelector('.title');
const not = document.querySelector('.noteContainer');


timer.addEventListener('click', function(){
    Timerr.style.display = 'block';
    not.style.display = 'none';
    TITLE.innerText = 'Timer';
})

timer.addEventListener('mouseover', function(){
    timerIcon.style.color = 'darkblue';
    timerText.style.color = 'darkblue';
})

timer.addEventListener('mouseout', function(){
    timerIcon.style.color = 'rgb(70, 134, 243)';
    timerText.style.color = 'gray';
})


// Home Havering

const home = document.querySelector('.home');
const homeIcon = document.querySelector('#icon-home');
const homeText = document.querySelector('.text-container-home');

home.addEventListener('click', function(){
    Timerr.style.display = 'none';
    not.style.display = 'none';
    TITLE.innerText = 'Home';
})

home.addEventListener('mouseover', function(){
    homeIcon.style.color = 'darkblue';
    homeText.style.color = 'darkblue';
})

home.addEventListener('mouseout', function(){
    homeText.style.color = 'gray';
    homeIcon.style.color = 'rgb(70, 134, 243)';
})


// Notes Hovering

const note = document.querySelector('.note');
const noteIcon = document.querySelector('#icon-note');
const noteText = document.querySelector('.text-container-note');

note.addEventListener('click', function(){
    not.style.display = 'block';
    Timerr.style.display = 'none';
})

note.addEventListener('mouseover', function(){
    noteIcon.style.color = 'darkblue';
    noteText.style.color = 'darkblue';
})

note.addEventListener('mouseout', function(){
    noteIcon.style.color = 'rgb(70, 134, 243)';
    noteText.style.color = 'gray';
})


// Date

const st = document.querySelector('.st');
const nd = document.querySelector('.nd');
const date = document.querySelector('.text-container-date');
let mounth = 'May';
let day = 31;
let year = 2023;


st.addEventListener('click', function(){

    day--;
    if(day == 0){
        if(mounth == 'May'){
            mounth = 'April';
            day = 30;
        }else
        {
            if(mounth == 'April'){
                mounth = 'March';
                day = 31;
            }else{
                if(mounth == 'March'){
                    mounth = 'February';
                    day = 29;
                }
                else{
                    if(mounth == 'February'){
                        mounth = 'January';
                        day = 31;
                    }
                    else{
                        if(mounth == 'January'){
                            mounth = 'December';
                            day = 31;
                            year--;
                        }
                        else{
                            if(mounth == 'December'){
                                mounth = 'November';
                                day = 30;
                            }
                            else{
                                if(mounth == 'November'){
                                    mounth = 'October';
                                    day = 31;
                                }
                                else{
                                    if(mounth == 'October'){
                                        mounth = 'September';
                                        day = 30;
                                    }
                                    else{
                                        if(mounth == 'September'){
                                            mounth = 'August';
                                            day = 31;
                                        }
                                        else{
                                            if(mounth == 'August'){
                                                mounth = 'July';
                                                day = 31;
                                            }
                                            else{
                                                if(mounth == 'July'){
                                                    mounth = 'June';
                                                    day = 30;
                                                }
                                                else{
                                                    if(mounth == 'June'){
                                                        mounth = 'May';
                                                        day = 31;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    date.innerText= mounth + "," + " " + day + "," +" "+year;
})

nd.addEventListener('click', function(){
    day++;
    if(day == 32 && mounth == 'January'){
        day = 1;
        mounth = 'February';
    }
    else{
        if(day == 30 && mounth == 'February'){
            day = 1;
            mounth = 'March';
        }
        else{
            if(day == 32 && mounth == 'March'){
                day = 1;
                mounth = 'April';
            }
            else{
                if(day == 31 && mounth == 'April'){
                    day = 1;
                    mounth = 'May';
                }
                else{
                    if(day == 32 && mounth == 'May'){
                        day = 1;
                        mounth = 'June';
                    }
                    else{
                        if(day == 31 && mounth == 'June'){
                            day = 1;
                            mounth = 'July';
                        }
                        else{
                            if(day  == 32 && mounth == 'July'){
                                day = 1;
                                mounth = 'August';
                            }
                            else{
                                if(day == 32 && mounth == 'August'){
                                    day = 1;
                                    mounth = 'September';
                                }
                                else{
                                    if(day == 31 && mounth == 'September'){
                                        day = 1;
                                        mounth = 'October';
                                    }
                                    else{
                                        if(day == 32 && mounth == 'October'){
                                            day = 1;
                                            mounth = 'November';
                                        }
                                        else{
                                            if(day == 31 && mounth == 'November'){
                                                day = 1;
                                                mounth = 'December';
                                            }
                                            else{
                                                if(day == 32 && mounth == 'December'){
                                                    year++;
                                                    day = 1;
                                                    mounth = 'January';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    date.innerText = mounth + "," + " " + day + "," + " " + year;
})


// Dark mood

// const darkMoodBtn = document.querySelector('.darkMood');
// const sideBare = document.querySelector('.side-bare');
// const toDoListTitle = document.querySelector('.To-do-list');
// const textcontainerTimer = document.querySelector('.text-container-timer');
// const textcontainerHome = document.querySelector('.text-container-home');
// const textcontainerNote = document.querySelector('.text-container-note');
// const moonIcon = document.querySelector('#moon-icon');
// const circle = document.querySelector('#circle');
// const body = document.querySelector('.body');
// const mainBare = document.querySelector('.main-bare');
// const title = document.querySelector('.title');
// const dat = document.querySelector('.date');
// const sth = document.querySelector('.st');
// const ndh = document.querySelector('.nd');
// const Addtask = document.querySelector('.add-task-btn');
// const todolisttitle = document.querySelector('.to-do-list-title');
// const progresstitle = document.querySelector('.progress-title');
// const donetitle = document.querySelector('.done-title');

// let mood = 'ligth';
// darkMoodBtn.addEventListener('click', function(){

    
//     if(mood === 'ligth'){
        

//         sideBare.style.backgroundColor = 'rgb(0, 0, 71)';
//         toDoListTitle.style.color = 'white';

//         textcontainerTimer.style.color = 'white';
//         timer.addEventListener('mouseover', function(){
//             timerText.style.color = 'rgb(214, 231, 254)';
//             timerIcon.style.color = 'rgb(214, 231, 254)';
//         })
        
//         timer.addEventListener('mouseout', function(){
//             timerText.style.color = 'white';
//             timerIcon.style.color = '';
//         })

//         textcontainerHome.style.color = 'white';
//         home.addEventListener('mouseover', function(){
//             homeText.style.color = 'rgb(214, 231, 254)';
//             homeIcon.style.color = 'rgb(214, 231, 254)';
//         })
        
//         home.addEventListener('mouseout', function(){
//             homeText.style.color = 'white';
//             homeIcon.style.color = '';
//         })
        

//         textcontainerNote.style.color = 'white';
//         note.addEventListener('mouseover', function(){
//             noteIcon.style.color = 'rgb(214, 231, 254)';
//             noteText.style.color = 'rgb(214, 231, 254)';
//         })
        
//         note.addEventListener('mouseout', function(){
//             noteIcon.style.color = '';
//             noteText.style.color = 'white';
//         })

//         moonIcon.style.color = 'white';

//         darkMoodBtn.style.backgroundColor = 'rgb(0, 0, 71)'
//         circle.style.color = 'rgb(163, 201, 255)';
//         circle.style.marginRight = '0px';
//         circle.style.marginLeft = '23px';

//         body.style.backgroundColor = 'rgb(0, 0, 51)'


//         mainBare.style.backgroundColor = 'rgb(0, 0, 71)';
//         title.style.color = 'white';
//         dat.style.color ='white';

//         sth.addEventListener('mouseover', function(){
//             sth.style.color = 'white';
//         })

//         sth.addEventListener('mouseout', function(){
//             sth.style.color = 'gray';
//         })

//         ndh.addEventListener('mouseover', function(){
//             ndh.style.color = 'white';
//         })

//         ndh.addEventListener('mouseout', function(){
//             ndh.style.color = 'gray';
//         })

//         Addtask.style.borderColor = 'white';
//         Addtask.style.backgroundColor = 'rgb(0, 0, 71)';
//         Addtask.style.color = 'white';

//         toDoListContainer.style.backgroundColor = 'rgb(0, 0, 71)';
        

//         updateTaskStyles('dark');


//         mood = 'dark';
//     }else{
//         if(mood === 'dark'){
//             sideBare.style.backgroundColor = 'rgb(214, 231, 254)';
//             toDoListTitle.style.color = 'darkblue';
            
//             textcontainerTimer.style.color = 'gray';
//             timer.addEventListener('mouseover', function(){
//                 timerText.style.color = 'darkblue';
//                 timerIcon.style.color = 'darkblue';
//             })
            
//             timer.addEventListener('mouseout', function(){
//                 timerText.style.color = '';
//                 timerIcon.style.color = '';
//             })

//             textcontainerHome.style.color = 'gray';
//             home.addEventListener('mouseover', function(){
//                 homeText.style.color = 'darkblue';
//                 homeIcon.style.color = 'darkblue';
//             })
            
//             home.addEventListener('mouseout', function(){
//                 homeText.style.color = '';
//                 homeIcon.style.color = '';
//             })
            
//             textcontainerNote.style.color = 'gray';
//             note.addEventListener('mouseover', function(){
//                 noteIcon.style.color = 'darkblue';
//                 noteText.style.color = 'darkblue';
//             })
            
//             note.addEventListener('mouseout', function(){
//                 noteIcon.style.color = '';
//                 noteText.style.color = '';
//             })
//             moonIcon.style.color = 'gray';

//             darkMoodBtn.style.backgroundColor = '#fcfce0'

//             circle.style.color = '#eaea02';
//             circle.style.marginRight = '100px';
//             circle.style.marginLeft = '0px';

//             body.style.backgroundColor = 'white';   

//             mainBare.style.backgroundColor = 'rgb(214, 231, 254)';
//             title.style.color = 'darkblue';
//             dat.style.color = 'rgb(0, 16, 64)';

//             Addtask.style.backgroundColor = '#eef4ff';
//             Addtask.style.color = 'darkblue';
//             Addtask.style.borderColor = '#eef4ff';


//             updateTaskStyles('light');

//             mood = 'ligth';
//         }
//     }
    
// })


const darkMoodBtn = document.querySelector('.darkMood');
const sideBare = document.querySelector('.side-bare');
const toDoListTitle = document.querySelector('.To-do-list');
const textcontainerTimer = document.querySelector('.text-container-timer');
const textcontainerHome = document.querySelector('.text-container-home');
const textcontainerNote = document.querySelector('.text-container-note');
const moonIcon = document.querySelector('#moon-icon');
const circle = document.querySelector('#circle');
const body = document.querySelector('.body');
const mainBare = document.querySelector('.main-bare');
const title = document.querySelector('.title');
const dat = document.querySelector('.date');
const sth = document.querySelector('.st');
const ndh = document.querySelector('.nd');
const Addtask = document.querySelector('.add-task-btn');
const toDoListContainer = document.querySelector('.to-do');
const progressContainer = document.querySelector('.progress');
const doneContainer = document .querySelector('.done');
const todotitle = document.querySelector('.to-do-list-title');
const progresstitle = document.querySelector('.progress-title');
const donetitle = document.querySelector('.done-title');

let mood = 'ligth';

darkMoodBtn.addEventListener('click', function () {
    if (mood === 'ligth') {
        // Dark mode settings
        applyDarkMode();
        updateTaskStyles('dark');
        mood = 'dark';
    } else {
        // Light mode settings
        applyLightMode();
        updateTaskStyles('light');
        mood = 'ligth';
    }
});

function applyDarkMode() {
    sideBare.style.backgroundColor = 'rgb(0, 0, 71)';
    toDoListTitle.style.color = 'white';
    textcontainerTimer.style.color = 'white';
    textcontainerHome.style.color = 'white';
    textcontainerNote.style.color = 'white';
    moonIcon.style.color = 'white';
    darkMoodBtn.style.backgroundColor = 'rgb(0, 0, 71)';
    circle.style.color = 'rgb(163, 201, 255)';
    circle.style.marginRight = '0px';
    circle.style.marginLeft = '23px';
    body.style.backgroundColor = 'rgb(0, 0, 27)';
    mainBare.style.backgroundColor = 'rgb(0, 0, 71)';
    title.style.color = 'white';
    dat.style.color = 'white';
    Addtask.style.borderColor = 'white';
    Addtask.style.backgroundColor = 'rgb(0, 0, 71)';
    Addtask.style.color = 'white';
    toDoListContainer.style.backgroundColor = 'rgb(0, 0, 71)';
    progressContainer.style.backgroundColor = 'rgb(0, 0, 71)';
    doneContainer.style.backgroundColor = 'rgb(0, 0, 71)';
    todotitle.style.color = 'white';
    progresstitle.style.color = 'white';
    donetitle.style.color = 'white';
    
    addHoverListeners('dark');
}

function applyLightMode() {
    sideBare.style.backgroundColor = 'rgb(214, 231, 254)';
    toDoListTitle.style.color = 'darkblue';
    textcontainerTimer.style.color = 'gray';
    textcontainerHome.style.color = 'gray';
    textcontainerNote.style.color = 'gray';
    moonIcon.style.color = 'gray';
    darkMoodBtn.style.backgroundColor = '#fcfce0';
    circle.style.color = '#eaea02';
    circle.style.marginRight = '100px';
    circle.style.marginLeft = '0px';
    body.style.backgroundColor = 'white';
    mainBare.style.backgroundColor = 'rgb(214, 231, 254)';
    title.style.color = 'darkblue';
    dat.style.color = 'rgb(0, 16, 64)';
    Addtask.style.backgroundColor = '#eef4ff';
    Addtask.style.color = 'darkblue';
    Addtask.style.borderColor = '#eef4ff';
    toDoListContainer.style.backgroundColor = 'rgb(214, 231, 254)';
    progressContainer.style.backgroundColor = 'rgb(214, 231, 254)';
    doneContainer.style.backgroundColor = 'rgb(214, 231, 254)';
    todotitle.style.color = 'darkblue';
    progresstitle.style.color = 'darkblue';
    donetitle.style.color = 'darkblue';
    
    
    addHoverListeners('light');
}

function addHoverListeners(mood) {
    const elements = [
        { el: timer, text: timerText, icon: timerIcon },
        { el: home, text: homeText, icon: homeIcon },
        { el: note, text: noteText, icon: noteIcon },
        { el: sth, text: sth, icon: null },
        { el: ndh, text: ndh, icon: null }
    ];

    elements.forEach(({ el, text, icon }) => {
        if (mood === 'dark') {
            el.addEventListener('mouseover', () => {
                text.style.color = 'rgb(214, 231, 254)';
                if (icon) icon.style.color = 'rgb(214, 231, 254)';
            });

            el.addEventListener('mouseout', () => {
                text.style.color = 'white';
                if (icon) icon.style.color = '';
            });
        } else {
            el.addEventListener('mouseover', () => {
                text.style.color = 'darkblue';
                if (icon) icon.style.color = 'darkblue';
            });

            el.addEventListener('mouseout', () => {
                text.style.color = 'gray';
                if (icon) icon.style.color = '';
            });
        }
    });
}



const addTask = document.querySelector('.add-task');
addTask.addEventListener('click', function() {
    addTask.innerHTML = '<div class="task-container"><input type="text" placeholder="Task" class="tasks"> <div class="icon-container"><i class="fa-solid fa-check" id="icon"></i></div></div>';
    
    const taskInput = document.querySelector('.tasks');
    taskInput.focus();

    // Apply styles based on current mood
    updateTaskStyles(mood);

    // Event listener for add icon
    const addIcon = document.querySelector('.icon-container');
    addIcon.addEventListener('click', function() {
        let li = document.createElement('div');
        li.classList.add('task-text');
        li.innerText = `${taskInput.value}`;
        const toDoListContainer = document.querySelector('.to-do-list-container');

        let task = document.createElement('div');
        task.classList.add('task');

        task.appendChild(li);

        let doneBtn = document.createElement('button');
        doneBtn.innerHTML = '<i class="fa-solid fa-check" id="done-task"></i>';
        doneBtn.classList.add('done-task');
        task.appendChild(doneBtn);

        let progressBtn = document.createElement('button');
        progressBtn.innerHTML = ' <i class="fas fa-spinner" id="progress-task"></i>';
        progressBtn.classList.add('progress-task');
        task.appendChild(progressBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can" id="delete-task"></i>';
        deleteBtn.classList.add('delete-task');
        task.appendChild(deleteBtn);

        if (taskInput.value === "") {
            alert('Enter a Task!');
        } else {
            toDoListContainer.appendChild(task);
        }

        doneBtn.addEventListener('click', function() {
            const doneContainer = document.querySelector('.done-container');
            doneContainer.appendChild(task);
        });

        progressBtn.addEventListener('click', function() {
            const progressContainer = document.querySelector('.progress-container');
            progressContainer.appendChild(task);
        });

        deleteBtn.addEventListener('click', function() {
            task.remove();
        });
    });
});




function updateTaskStyles(currentMood) {
    const taskInputs = document.querySelectorAll('.tasks');
    const addIcon = document.querySelectorAll('.icon-container');
    const taskText = document.querySelectorAll('.task-text');
    const task = document.querySelectorAll('.task');
    const donetask = document.querySelectorAll('.done-task');
    const delettask = document.querySelectorAll('.delete-task');
    const progresstask = document.querySelectorAll('.progress-task');
    const doneicon = document.querySelectorAll('#done-task');
    const progressicon = document.querySelectorAll('#progress-task');
    const deleteicon = document.querySelectorAll('#delete-task');
    const ntt = document.querySelectorAll('.noteContainer');
    const nttt = document.querySelectorAll('.note-title');
    const notecontainerr = document.querySelectorAll('.note-containerr');
    const donenote = document.querySelectorAll('.done-note');
    const inputnotee = document.querySelectorAll('.input-note');
    const noticon = document.querySelectorAll('.note-icon');

    inputnotee.forEach(input => {
        if( currentMood === 'dark'){
            input.style.backgroundColor = 'rgb(0, 0, 71)';
            input.style.color = 'white';
        } else {
            input.style.backgroundColor = '#eef4ff';
            input.style.color = 'darkblue';
        }
    })

    noticon.forEach( input => {
        if( currentMood === 'dark'){
            input.style.backgroundColor = 'rgb(0, 0, 71)';
        } else {
            input.style.backgroundColor = '#eef4ff';
        }
    })
    
    taskInputs.forEach(input => {
        if (currentMood === 'dark') {
            input.style.backgroundColor = 'rgb(0, 0, 71)';
            input.style.borderColor = 'white';
            input.style.color = 'white';
        } else {
            input.style.backgroundColor = '#eef4ff';
            input.style.borderColor = '#eef4ff';
            input.style.color = 'darkblue';
        }
    });

    addIcon.forEach(container => {
        if (currentMood === 'dark') {
            container.style.backgroundColor = 'rgb(0, 0, 71)';
        } else {
            container.style.backgroundColor = '#eef4ff';
        }
    });

    taskText.forEach(input => {
        if( currentMood === 'dark') {
            input.style.color = 'white';
            
        } else {
            input.style.color = 'darkblue';
        }
    });

    task.forEach( input => {
        if( currentMood === 'dark'){
            input.style.backgroundColor = 'rgb(0, 0, 71)';
            input.style.borderColor = 'white';
            input.style.borderStyle = 'solid';
            input.style.borderWidth = '2px';
        } else {
            input.style.backgroundColor = '#eef4ff';
            input.style.borderColor = '#eef4ff';
        }
    });

    donetask.forEach( input => {
        if( currentMood === 'dark'){
            input.style.backgroundColor = 'rgb(0, 0, 71)';
            input.style.borderColor = 'white';
        } else {
            input.style.backgroundColor = '#eef4ff';
            input.style.borderColor = '#eef4ff';
        }
    });

    progresstask.forEach( input => {
        if( currentMood === 'dark') {
            input.style.backgroundColor = 'rgb(0, 0, 71)';
            input.style.borderColor = 'white';
        } else {
            input.style.backgroundColor = '#eef4ff';
            input.style.borderColor = '#eef4ff';
        }
    });

    delettask.forEach( input => {
        if( currentMood === 'dark'){
            input.style.backgroundColor = 'rgb(0, 0, 71)';
            input.style.borderColor = 'white';
        } else {
            input.style.backgroundColor = '#eef4ff';
            input.style.borderColor = '#eef4ff';
        }
    });

    deleteicon.forEach( input => {
        if( currentMood === 'dark'){
            input.style.color = 'white';
        } else {
            input.style.color = 'rgb(98, 155, 255)';
        }
    });

    progressicon.forEach( input => {
        if(currentMood === 'dark'){
            input.style.color ='white';
        } else {
            input.style.color = 'rgb(98, 155, 255)';
        }
    });

    doneicon.forEach( input => {
        if( currentMood === 'dark'){
            input.style.color = 'white';
        } else {
            input.style.color = 'rgb(98, 155, 255)';
        }
    })

    ntt.forEach( input => {
        if( currentMood === 'dark'){
            input.style.backgroundColor = 'rgb(0, 0, 71)';
            
        } else {
            input.style.backgroundColor  = 'rgb(214, 231, 254)';
            
        }
    })
    

    nttt.forEach( input => {
        if( currentMood === 'dark'){
            input.style.color = 'white';
        } else {
            input.style.color  = 'darkblue';
        }
    })

    notecontainerr.forEach( input => {
        if( currentMood === 'dark'){
            input.style.backgroundColor = 'rgb(0, 0, 71)';
            input.style.color = 'white';
        } else {
            input.style.backgroundColor = '#eef4ff';
            input.style.color = 'darkblue';
        }
    })

    donenote.forEach( input => {
        if( currentMood === 'dark'){
            input.style.backgroundColor = 'rgb(0, 0, 71)';
        } else {
            input.style.backgroundColor = '#eef4ff';
        }
    })

}

const timerr = document.querySelector('#time');

      
// variable for buttons

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// varibles for time values

let seconds = 0;
let minutes  = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// varibles for timer interval & timerStatus

let timerInterval = null;
let timerStatus = 'stopped';

// stop watch function

function stopWatch() {
    
    seconds ++;

    if( seconds / 60 === 1){

        seconds = 0;
        minutes ++;

        if( minutes / 60 === 1){

            minutes = 0;
            hours ++;
        }

    }


    if( seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } 
    else{
        leadingSeconds = seconds;
    }

    if( minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    }
    else{
        leadingMinutes = minutes;
    }

    if( hours < 10){
        leadingHours = "0" + hours.toString();
    }
    else{
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('time').innerText = 
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener('click', function(){

    if(timerStatus === 'stopped'){
        timerInterval = window.setInterval(stopWatch, 1000);

        document.getElementById('startStopBtn').innerHTML = 
        '<i class="fa-solid fa-pause" id="pause"></i>';

        timerStatus = 'started'
    }
    else{
        window.clearInterval(timerInterval);

        document.getElementById('startStopBtn').innerHTML = 
        '<i class ="fa-solid fa-play" id="play"></i>';

        timerStatus ='stopped';
    }
})

resetBtn.addEventListener('click', function(){

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('time').innerText = "00:00:00";

    if( timerStatus === 'started'){
        window.clearInterval(timerInterval);

        document.getElementById('startStopBtn').innerHTML = 
        '<i class ="fa-solid fa-play" id="play"></i>';

        timerStatus ='stopped';
    }
})


const noteicon = document.querySelector('.note-icon');
const inputnote = document.querySelector('.input-note');
const notes = document.querySelector('.notes');


noteicon.addEventListener('click', function(){
    let div = document.createElement('div');
    div.classList.add('divv')

    let li = document.createElement('div');
    li.classList.add('note-containerr');
    li.innerText = `${inputnote.value}`;

    div.appendChild(li);

    let doneBtnn = document.createElement('button');
    doneBtnn.innerHTML = '<i class="fa-solid fa-check" id="done-task"></i>';
    doneBtnn.classList.add('done-note');
    div.appendChild(doneBtnn);

    notes.appendChild(div);

    inputnote.value = '';

    if( currentMood === 'dark'){
        donenote.style.backgroundColor = 'rgb(0, 0, 71)';
    } else {
        donenote.style.backgroundColor = '#eef4ff';
    }
    
    doneBtnn.addEventListener('click', function(){
        div.remove();
    })
})

