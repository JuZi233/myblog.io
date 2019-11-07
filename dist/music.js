const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    mini: false, //迷你模式
    autoplay: true, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    lrcType: 3, //歌词传递方式
    audio: [ //音频信息,包含以下
        // {
        //     name: 'Canon In D Major', //音频名称
        //     artist: 'Johann Pachelbel', //音频艺术家
        //     url: 'http://m10.music.126.net/20191029173415/c2f62987fc53699cfe845a4fd7f0c39b/ymusic/8196/2149/d456/64bf29f3d281d10556a5396c26a7fc95.mp3', //音频外链
        //     cover: 'cover1.jpg', //音频封面
        //     lrc: 'lrc1.lrc', //音频歌词，配合上面的lrcType使用
        //     theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        // },{
        //     name: '偏偏喜欢你',
        //     artist: '陈百强',
        //     url: 'http://m10.music.126.net/20191029174041/ebd544cb1a55f9965d00414246cc2550/ymusic/6411/1b1e/507b/8a9523b3b66250160025eb4ae7a3c361.mp3',
        //     cover: 'cover2.jpg',
        //     lrc: 'lrc2.lrc',
        //     theme: '#ebd0c2'
        // },{
        //     name: '庐州月',
        //     artist: '许嵩',
        //     url: 'http://m10.music.126.net/20191030104110/0195f9d694d55c93b9db6495f5e724a8/ymusic/86de/4d7b/c0dc/b45d9ddf9d7837f0d0bb71707ee1decf.mp3',
        //     cover: 'cover3.jpg',
        //     lrc: 'lrc3.lrc',
        //     theme: '#ebd0c2'
        // },
        {
            name: '以父之名',
            artist: '周杰伦',
            url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_28386348&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
            cover: '/dist/Jay.jpg',
            lrc: '/dist/以父之名.lrc',
            theme: '#ebd0c2'
        }
    ]
});