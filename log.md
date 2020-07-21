npm init
npm i express body-parser mongoose cuncurrently
npm i -D nodemon

# to run with nodemon:
  npm run server

# to run with start: (without auto start when file updated)
  npm run start

# process.env comes with node. I let it show, by
console.log(process.env)

> console.log(process.env)
    {
    CLUTTER_IM_MODULE: 'xim',
    LS_COLORS: 'rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:',
    LESSCLOSE: '/usr/bin/lesspipe %s %s',
    XDG_MENU_PREFIX: 'gnome-',
    LANG: 'en_US.UTF-8',
    DISPLAY: ':0',
    GNOME_SHELL_SESSION_MODE: 'ubuntu',
    COLORTERM: 'truecolor',
    USERNAME: 'ray',
    XDG_VTNR: '2',
    SSH_AUTH_SOCK: '/run/user/1000/keyring/ssh',
    MANDATORY_PATH: '/usr/share/gconf/ubuntu.mandatory.path',
    XDG_SESSION_ID: '2',
    USER: 'ray',
    DESKTOP_SESSION: 'ubuntu',
    QT4_IM_MODULE: 'xim',
    TEXTDOMAINDIR: '/usr/share/locale/',
    GNOME_TERMINAL_SCREEN: '/org/gnome/Terminal/screen/b8824001_b60f_48f1_96ed_7ba54dd8a030',
    DEFAULTS_PATH: '/usr/share/gconf/ubuntu.default.path',
    PWD: '/home/ray/mern',
    HOME: '/home/ray',
    TEXTDOMAIN: 'im-config',
    SSH_AGENT_PID: '1909',
    QT_ACCESSIBILITY: '1',
    XDG_SESSION_TYPE: 'x11',
    XDG_DATA_DIRS: '/usr/share/ubuntu:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop',
    XDG_SESSION_DESKTOP: 'ubuntu',
    GJS_DEBUG_OUTPUT: 'stderr',
    GTK_MODULES: 'gail:atk-bridge',
    WINDOWPATH: '2',
    TERM: 'xterm-256color',
    SHELL: '/bin/bash',
    VTE_VERSION: '5202',
    QT_IM_MODULE: 'ibus',
    XMODIFIERS: '@im=ibus',
    IM_CONFIG_PHASE: '2',
    XDG_CURRENT_DESKTOP: 'ubuntu:GNOME',
    GPG_AGENT_INFO: '/run/user/1000/gnupg/S.gpg-agent:0:1',
    GNOME_TERMINAL_SERVICE: ':1.60',
    XDG_SEAT: 'seat0',
    SHLVL: '1',
    GDMSESSION: 'ubuntu',
    GNOME_DESKTOP_SESSION_ID: 'this-is-deprecated',
    LOGNAME: 'ray',
    DBUS_SESSION_BUS_ADDRESS: 'unix:path=/run/user/1000/bus',
    XDG_RUNTIME_DIR: '/run/user/1000',
    XAUTHORITY: '/run/user/1000/gdm/Xauthority',
    XDG_CONFIG_DIRS: '/etc/xdg/xdg-ubuntu:/etc/xdg',
    PATH: '/home/ray/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin',
    GJS_DEBUG_TOPICS: 'JS ERROR;JS LOG',
    SESSION_MANAGER: 'local/ubuntu:@/tmp/.ICE-unix/1811,unix/ubuntu:/tmp/.ICE-unix/1811',
    LESSOPEN: '| /usr/bin/lesspipe %s',
    GTK_IM_MODULE: 'ibus',
    OLDPWD: '/home/ray',
    _: '/usr/bin/node'
    }

# postman is a tool that can send post request. Good for testing

sudo snap postman
# this is useful tool. Isigned on with user name: raymondwei, pwd:spotty2801,
using my email RW@OK. Team name: iamray, team url: iamray.postman.co

Using postman, I can send web-request from there to the server. Like
  http://localhost:5000/api/items/     ## for get all items


I downoaded some new MongoDB and Mongoose ebooks and read them a bit.
I changed my opinion about Mongoose a bit: I thought that since mongodb is a
no-schema DB, why put a layer over it with Mongoose, and make it Schema DB?
But thru this tutorial, I realized that there will always be a layer of
object-model, or schema, needed to organize the model. And although Mongoose
defines a layer of schema, but it does not limit the db with it. For the part
where schema is needed, it offers benefits of a ORM. But it doesn't limit it,
so that I can still add field names that was not there.
So now I decided to use Mongoose layer.

2020-07-13
enter MERN stack tutorial[2]
 cd client
 sudo npm i -g create-react-app

 create-react-app .

This generates a package.json under client folder.
Added here, under "scripts: {},
  "proxy": "http://localhost:5000",

in server package.json, added:
  "npm run client" besides the existing "npm run server" or "npm run dev" to
  run both. Added comments:
    "npm start --prefix client":  "will run the 'npm start' in client folder",
    "dev": "runs the two quoted cmds concurrently, using 'concurrently' module"

Now, in mern folder location, I can do
  npm run dev
And I see both server and client start running.

Thought: When I see that React icon spinning in the browser screen, I would
like to do a i4.0 gear-wheel spinning -- learn to use svg animation?

  cd client
  npm i bootstrap reactstrap uuid react-transition-group

2020-07-14
----------
"Learn the MERN statck[4]"
Have problem with
  import uuid from 'uuid';
npm installed:
  npm i react-uuid
Changed that import line to
  import uuid from 'react-uuid';
Then it seems to be ok.

&times; in html means a X sign for multiplication sign

In ShoppingList.js:36
 items.map(({id, name}) => ())
  ==> docs/react-knowledge.txt
In ShoppingList.js:42 - 46
  ==> docs/react-knowledge.txt

The className for <TransitionGroup: "shopping-list" is NOT a
bootstrap prev-defined name. It is defined in this app, can be
any other name.

2020-07-17
-----------
build for deployment
  cd client
  npm run build
This will create a build directory under client.
Under this build, there is a index.html, this is the static file I want to
deploy.


Changed server.js:
1. const path = require('path');
2. if not "/api/items" route is given, and if / or index.html, do
    app.use(express.static('client/build'));
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));


