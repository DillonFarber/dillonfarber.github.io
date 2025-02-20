/** Todo: fix the machine learning description with the correct ML technique used in project */
const map = new Map([
    ['p0', {
        name: 'Nerd Haven App',
        lang: ['Flutter', 'Dart'],
        description: 'A one stop shop for all things media.' +
            'From movies to games, games to books, and books to shows. Whatever you ' +
            'decide to put in your list, its yours. The Nerd Haven is a one stop shop ' + 
            'for your backlog. Make ordered lists, ques, or just a junk drawer. Its up to you!',
        img: [],
        vid: ['/media/videos/listappprojectvideo.mp4'],
        appicon: '',
    }],
    ['p1', {
        name: 'Library Project program',
        lang: ['Java', 'SQL'],
        description: 'Project class study class from my senior year of college. Was worked on ' + 
            'by three other students. I heavily worked on the back end functionality of the ' + 
            'program. Using java to communicate with a SQL database. The database used relational ' +
            'tables to get information about users and books to be borrowed.',
        img: ['/media/imgs/LibraryApp.png'],
        vid: [],
        appicon: '',
    }],
    ['p2', {
        name: 'Machine Learning Project',
        lang: ['Python', 'Jupyter Notebooks'],
        description: 'Machine Learning Final project. Worked on it with two other classmates. ' +
            'I worked on the relational data portions of the project, using k-nearest neighbor, ' +
            'Forest, and something. I also helped with forming the images contained in the notebook' +
            ' along with briefing the class on the data points and results.',
        img: ['/media/imgs/mlproject.png'],
        vid: [],
        appicon: '',
    }],
    ['p3', {
        name: 'Tomagatchie Project',
        lang: ['Python'],
        description: 'Passion project for my daughters and fun for my self. Learning more of the python ' +
            'language and furthering my skills and versatility. Ongoing project at this point.',
        img: [],
        vid: [],
        appicon: '',
    }],
    ['p4',{ 
        name: 'This Website',
        lang: ['HTML', 'CSS', 'JS'],
        description: 'Portfolio site to show case my current projects, skills, and resume. This also doubles as ' + 
            'my personal business site for my applications that are underdevelopment.',
        img: [],
        vid: [],
        appicon: '',
    }],
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
    document.getElementById('title').innerHTML = '<p class=\"title\">hello</p>';
    document.getElementById('description').innerHTML = map.get(id).description;

    for(let i = 0; i < map.get(id).lang.length; i++){
        document.getElementById('used-s-l').innerHTML += 
            '<p class=\"s-l\">' + map.get(id).lang[i] + '</p>';
    }

    if(map.get(id).img.length != 0 || map.get(id).vid.length != 0){
        for(let i = 0; i < map.get(id).vid.length; i++){
            document.getElementById('media').innerHTML += 
            ('<div class=\"media-card\"><video class=\"video-card\" src=\"' + 
                map.get(id).vid[i] +'\" controls autoplay ></video></div>');
        }
        for(let i = 0; i < map.get(id).img.length; i++){
            document.getElementById('media').innerHTML += 
            ('<div class=\"media-card\"><img class=\"img-card\" src=\"' + 
                map.get(id).img[i] +'\" ></img></div>');
        }
    }else{
        document.getElementById('media').innerHTML += 
        '<div class=\"no-media\"><div class=\"line\"></div><p>no-media</p><div class=\"line\"></div></div>';
    }

    
    
}
