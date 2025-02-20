const map = new Map([
    ['p0', {
        name: 'Nerd Haven App',
        lang: ['Flutter', 'Dart'],
        description: 'A one stop shop for all things media. From movies to games, games to books, and books to shows. Whatever you decide to put in your list, its yours. The Nerd Haven is a one stop shop for your backlog. Make ordered lists, ques, or just a junk drawer. Its up to you!',
        img: ['/media/imgs'],
        vid: ['/media/videos/listappprojectvideo.mp4'],
    }],
    ['p1', {
        name: 'Library Project program',
        lang: ['Java', 'SQL'],
        description: '',
        img: ['/media/imgs'],
        vid: ['/media/videos'],
    }],
    ['p2', {
        name: 'Machine Learning Project',
        lang: ['Python', 'Jypitur Notebooks'],
        description: '',
        img: ['/media/imgs'],
        vid: ['/media/videos'],
    }],
    ['p3', {
        name: 'Tomagatchie Project',
        lang: ['Python'],
        description: '',
        img: ['/media/imgs'],
        vid: ['/media/videos'],
    }],
    ['p4',{ 
        name: 'This Website',
        lang: ['HTML', 'CSS', 'JS'],
        description: '',
        img: ['/media/imgs'],
        vid: ['/media/videos'],}
    ]
]);

let id = 0;

window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    id = data.id;
    document.getElementById('title').innerHTML = map.get(id).name;
    document.getElementById('description').innerHTML = map.get(id).description;
    for(let i = 0; i < map.get(id).vid.length; i++){
        document.getElementById('media').innerHTML += ('<div class=\"media-card\"><video class=\"video-card\" src=\"' + map.get(id).vid[i] +'\" controls autoplay ></video></div>');
    }
    for(let i = 0; i < map.get(id).img.length; i++){

    }
    for(let i = 0; i < map.get(id).lang.length; i++){
        document.getElementById('used-s-l').innerHTML += ('<p class=\"used-s-l\">' + map.get(id).lang[i] + '</p>');
    }
}
