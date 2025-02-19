const map = {
    0: {
        name: 'Nerd Haven App',
        lang: ['flutter', 'dart'],
        description: '',
        img: ['/media/imgs'],
        vid: ['/media/videos/listappprojectvideo.mp4'],
    },
    1: {
        name: 'Library Project program',
        lang: ['Java', 'SQL'],
        description: '',
        img: ['/media/imgs'],
        vid: ['/media/videos'],
    },
    2: {
        name: 'Machine Learning Project',
        lang: ['Python', 'Jypitur Notebooks'],
        description: '',
        img: ['/media/imgs'],
        vid: ['/media/videos'],
    },
    3: {
        name: 'Tomagatchie Project',
        lang: ['Python'],
        description: '',
        img: ['/media/imgs'],
        vid: ['/media/videos'],
    },
    4: {
        name: 'This Website',
        lang: ['HTML', 'CSS', 'JS'],
        description: '',
        img: ['/media/imgs'],
        vid: ['/media/videos'],
    }
}

let id = 0;

window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    id = document.getElementById('here').innerHTML = data.id;
}

const projectTitle = document.getElementById('title');
projectTitle = map[id].name;

document.body.style.backgroundColor = 'black';