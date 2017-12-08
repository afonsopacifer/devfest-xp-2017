const slides = [
  {
    type: '',
    heading1: '',
    heading2: '',
    img: 'assets/imgs/chrome.png',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Google Chrome',
    heading2: 'As a platform',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Conversa <br> Sobre Browsers',
    heading2: '',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Diferentes versões <br> disponíveis',
    heading2: '',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: 'left',
    heading1: 'Chromium',
    heading2: 'Open Source',
    img: 'assets/imgs/chromium.png',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'O que muda?',
    heading2: 'Além do número',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Blink',
    heading2: 'Motor de renderização',
    gif: '',
    imgRight: 'assets/imgs/css3.png',
    imgLeft: 'assets/imgs/html5.png',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'V8',
    heading2: 'Interpretador',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Porque é importate?',
    heading2: '',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: 'left',
    heading1: 'Market Share',
    heading2: 'Desktop',
    img: 'assets/imgs/market-share.png',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Sistema Operacional',
    heading2: 'Mais usado no mundo?',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Plataforma',
    heading2: 'Para Desenvolvedores',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Front-End Developer',
    heading2: 'ou.. Dev Descolado',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'DevTools',
    heading2: 'Debugging',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Plataforma',
    heading2: 'Para Aplicações',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Nativo X Híbrido',
    heading2: '',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Nativo',
    heading2: '',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['Programa em 3 linguagens', 'O usuário vai na loja e baixa', 'Espera instalar', 'Não usa no Desktop', 'E… desinstala']
  },
  {
    type: 'list',
    heading1: 'Híbrido',
    heading2: '',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['Programa no estilo Front-End', 'O usuário vai na loja e baixa', 'Espera instalar', 'Abre uma WebView', 'APPs diferentes p Desktop e mobile', 'E… desinstala']
  },
  {
    type: '',
    heading1: 'Web APP',
    heading2: '',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['Programa no estilo Front-End', '', '']
  },
  {
    type: '',
    heading1: 'Offline First',
    heading2: 'Com Service Workers',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Web APP',
    heading2: '',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['Programa no estilo Front-End', 'Já é offline', '']
  },
  {
    type: '',
    heading1: 'Instalável',
    heading2: 'Com Web App Manifest',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Web APP',
    heading2: '',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['Programa no estilo Front-End', 'Já é offline', 'O usuário Installa se quiser']
  },
  {
    type: '',
    heading1: 'Plataforma',
    heading2: 'Desktop + Mobile',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Web APP',
    heading2: '',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['Programa no estilo Front-End', 'Já é offline', 'O usuário Installa se quiser', 'Onde quiser']
  },
  {
    type: '',
    heading1: 'O que dá para fazer?',
    heading2: 'Com apenas* HTML, CSS e JS',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Web APIs',
    heading2: 'Hora da maldade',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'GetUserMedia',
    heading2: 'Acesso a câmera',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Ambient Light',
    heading2: 'Bruxaria',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Web GL',
    heading2: 'Modelagem 3D',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Web VR',
    heading2: 'Realidade Virtual',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Mais…',
    heading2: 'Muito mais',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Onde estudar?',
    heading2: 'Chrome Developers',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Front-End Brasil',
    heading2: 'Fórum, Vagas e mais :)',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  },
  {
    type: '',
    heading1: 'Esquece o chrome',
    heading2: 'Vá além com a WEB',
    gif: '',
    imgRight: '',
    imgLeft: '',
    list: ['', '', '']
  }
];

export default slides;
