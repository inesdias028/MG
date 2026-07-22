// ============================================================
// All site content lives here, in two languages (pt / en).
// The active language is provided through src/i18n.jsx.
// ============================================================

// ---- Shared config (not translated) ------------------------

// RSVP form delivery — Google Forms (responses land in a Google Sheet).
export const googleForm = {
  action: 'https://docs.google.com/forms/d/e/1FAIpQLScCtlO9xjj4syshWYnl6maI7mDk4TgCqz2rWfs7RGoEz6N1dQ/formResponse',
  fields: {
    name: 'entry.1253602870',
    guests: 'entry.1269065760',
    diet: 'entry.1828144813',
    message: 'entry.20879956',
  },
}
// Fallback e-mail endpoint (Formspree/Getform) if googleForm.action is empty.
export const rsvpEndpoint = ''

const CEREMONY_MAP = 'https://maps.google.com/?q=Igreja+de+Nossa+Senhora+do+Carmo+Tavira'
const QUINTA_MAP = 'https://maps.google.com/?q=Quinta+Vale+Caranguejo+Tavira'
const CENTRO_MAP = 'https://maps.google.com/?q=Centro+historico+de+Tavira'
const PARKING_MAP = 'https://maps.google.com/?q=Estacionamento+Tavira'
const IBAN = 'PT50 0000 0000 0000 0000 0000 0'
const MARCO_URL = 'https://www.hotelquintadomarco.com/pt/'
const MARIANOVA_URL = 'https://ap-hotelsresorts.com/pt-pt/maria-nova/'

// ---- Portuguese --------------------------------------------
const pt = {
  couple: {
    bride: 'Maria',
    groom: 'Gonçalo',
    date: '22 de Maio de 2027',
    dateShort: '22.05.2027',
    place: 'Tavira',
    region: 'Tavira, Algarve · Portugal',
  },
  nav: [
    { id: 'inicio', label: 'Início' },
    { id: 'historia', label: 'História' },
    { id: 'cerimonia', label: 'Cerimónia' },
    { id: 'celebracao', label: 'Celebração' },
    { id: 'programa', label: 'Programa' },
    { id: 'dress-code', label: 'Dress Code' },
    { id: 'como-chegar', label: 'Como Chegar' },
    { id: 'onde-ficar', label: 'Onde Ficar' },
    { id: 'japao', label: 'Japão' },
    { id: 'presentes', label: 'Presentes' },
    { id: 'rsvp', label: 'RSVP' },
  ],
  ui: {
    heroPre: 'Vamos casar',
    storyEyebrow: 'O início de tudo',
    storyTitle: 'A nossa história',
    weddingEyebrow: 'O grande dia',
    weddingTitle: 'O casamento',
    seeLocation: 'Ver localização',
    programEyebrow: 'Programa do dia',
    dressEyebrow: 'Dress Code',
    dressAlt: 'Sugestões de traje — fato e vestidos',
    arriveEyebrow: 'Localização',
    arriveTitle: 'Como chegar',
    openMaps: 'Abrir no Google Maps',
    stayEyebrow: 'Sugestões',
    stayTitle: 'Onde ficar',
    stayLead: 'Algumas opções a poucos minutos da quinta, para descansar depois da festa.',
    seeMore: 'Ver mais',
    japanAlt: 'Monte Fuji, pagode e cerejeiras em flor',
    ibanLabel: 'IBAN',
    copy: 'Copiar',
    copied: 'Copiado ✓',
    faqEyebrow: 'Antes de partir',
    faqTitle: 'Perguntas frequentes',
    footerTagline: 'Obrigado por fazer parte da nossa viagem.',
  },
  story: [
    { year: '2013', icon: 'anchor', text: 'Conhecemo-nos no mundo da vela.' },
    { year: '2024', icon: 'compass', text: 'Depois de 11 anos, começámos finalmente a namorar.' },
    { year: '22.05.2026', icon: 'ring', text: 'E foi neste dia que o Gonçalo se chegou à frente.' },
    { year: '22.05.2027', icon: 'sailboat', text: 'O dia em que queremos que façam parte da nossa maior aventura.' },
  ],
  ceremony: { title: 'Cerimónia', time: '16h30', place: 'Igreja de Nossa Senhora do Carmo', address: 'Largo do Carmo, 8800-314 Tavira', mapUrl: CEREMONY_MAP },
  celebration: { title: 'Celebração', time: '17h30', place: 'Quinta Vale Caranguejo', address: '8800-062 Tavira', mapUrl: QUINTA_MAP },
  program: [
    { time: '16h00', icon: 'guests', label: 'Chegada dos convidados' },
    { time: '16h30', icon: 'church', label: 'Cerimónia' },
    { time: '17h30', icon: 'cocktail', label: 'Cocktail' },
    { time: '19h30', icon: 'dinner', label: 'Jantar' },
    { time: '22h00', icon: 'music', label: 'Abertura do baile' },
    { time: '23h30', icon: 'party', label: 'Festa' },
    { time: '03h00', icon: 'music', label: 'Última dança' },
  ],
  dressCode: { title: 'Formal', notes: ['Evitar branco', 'Evitar cores das madrinhas', 'Evitar cor da gravata dos padrinhos'] },
  directions: [
    { n: 1, place: 'Igreja de Nossa Senhora do Carmo', address: 'Largo do Carmo, 8800-314 Tavira', mapUrl: CEREMONY_MAP },
    { n: 2, place: 'Quinta Vale Caranguejo', address: '8800-062 Tavira', mapUrl: QUINTA_MAP },
    { n: 3, place: 'Centro histórico de Tavira', address: '8800-314 Tavira', mapUrl: CENTRO_MAP },
    { n: 4, place: 'Parques de estacionamento', address: 'Áreas disponíveis perto da quinta', mapUrl: PARKING_MAP },
  ],
  hotels: [
    { name: 'Hotel Rural Quinta do Marco', stars: 4, dist: '8 km da quinta', drive: '12 min de carro', url: MARCO_URL, img: 'hotel-marco.jpg' },
    { name: 'AP Maria Nova Lounge Hotel', stars: 4, dist: '5 km da quinta', drive: '8 min de carro', url: MARIANOVA_URL, img: 'hotel-maria-nova.jpg' },
    { name: 'Pousada de Tavira', stars: 4, dist: '6 km da quinta', drive: '10 min de carro', url: '#' },
    { name: 'Alojamentos locais Tavira', stars: 5, dist: 'Várias opções na zona', drive: '', url: '#' },
  ],
  honeymoon: {
    eyebrow: 'O nosso próximo destino',
    title: 'Japão',
    text: 'Depois de dizermos "sim", partiremos para o Japão, um destino que sempre sonhámos conhecer juntos.',
  },
  gifts: {
    title: 'Presentes',
    lead: 'A vossa presença é o nosso maior presente.',
    text: 'Se desejarem contribuir para a nossa lua de mel no Japão, deixamos abaixo essa possibilidade.',
    iban: IBAN,
  },
  rsvp: {
    eyebrow: 'RSVP',
    title: 'Confirma a tua presença',
    name: 'Nome completo',
    guests: 'Nº de convidados',
    diet: 'Restrições alimentares',
    dietPlaceholder: 'Restrições alimentares (opcional)',
    message: 'Mensagem para os noivos',
    messagePlaceholder: 'Mensagem (opcional)',
    submit: 'Confirmar presença',
    sending: 'A enviar…',
    errorName: 'Por favor, indique o seu nome.',
    errorSend: 'Não foi possível enviar. Tente novamente ou contacte-nos diretamente.',
    thanks: (name) => `Obrigado, ${name}!`,
    thanksText: 'Recebemos a tua confirmação. Mal podemos esperar por celebrar contigo.',
  },
  faqs: [
    { q: 'Posso levar crianças?', a: 'Adoramos os mais pequenos! Para que possam relaxar e aproveitar a festa, a celebração é preferencialmente só para adultos. Se precisar de apoio, fale connosco.' },
    { q: 'Existe estacionamento?', a: 'Sim. Há áreas de estacionamento gratuitas junto à quinta e no centro histórico de Tavira.' },
    { q: 'O casamento será no exterior?', a: 'A cerimónia é na Igreja de Nossa Senhora do Carmo e a celebração decorre entre espaços interiores e jardins da quinta. Traga um casaco leve para a noite.' },
    { q: 'Há opções vegetarianas?', a: 'Claro. Indique as suas restrições alimentares no formulário de RSVP e trataremos de tudo.' },
    { q: 'Posso confirmar mais tarde?', a: 'Agradecemos a confirmação até 22 de Março de 2027 para conseguirmos organizar tudo com carinho.' },
    { q: 'Existe alojamento perto?', a: 'Sim — reunimos algumas sugestões na secção "Onde Ficar", todas a poucos minutos da quinta.' },
  ],
}

// ---- English -----------------------------------------------
const en = {
  couple: {
    bride: 'Maria',
    groom: 'Gonçalo',
    date: '22 May 2027',
    dateShort: '22.05.2027',
    place: 'Tavira',
    region: 'Tavira, Algarve · Portugal',
  },
  nav: [
    { id: 'inicio', label: 'Home' },
    { id: 'historia', label: 'Story' },
    { id: 'cerimonia', label: 'Ceremony' },
    { id: 'celebracao', label: 'Celebration' },
    { id: 'programa', label: 'Schedule' },
    { id: 'dress-code', label: 'Dress Code' },
    { id: 'como-chegar', label: 'Getting There' },
    { id: 'onde-ficar', label: 'Where to Stay' },
    { id: 'japao', label: 'Japan' },
    { id: 'presentes', label: 'Gifts' },
    { id: 'rsvp', label: 'RSVP' },
  ],
  ui: {
    heroPre: 'We are getting married',
    storyEyebrow: 'How it all began',
    storyTitle: 'Our story',
    weddingEyebrow: 'The big day',
    weddingTitle: 'The wedding',
    seeLocation: 'See location',
    programEyebrow: 'The day',
    dressEyebrow: 'Dress Code',
    dressAlt: 'Outfit suggestions — suit and dresses',
    arriveEyebrow: 'Location',
    arriveTitle: 'Getting there',
    openMaps: 'Open in Google Maps',
    stayEyebrow: 'Suggestions',
    stayTitle: 'Where to stay',
    stayLead: 'A few options just minutes from the estate, to rest after the party.',
    seeMore: 'See more',
    japanAlt: 'Mount Fuji, a pagoda and cherry blossoms',
    ibanLabel: 'IBAN',
    copy: 'Copy',
    copied: 'Copied ✓',
    faqEyebrow: 'Before you go',
    faqTitle: 'Frequently asked questions',
    footerTagline: 'Thank you for being part of our journey.',
  },
  story: [
    { year: '2013', icon: 'anchor', text: 'We met in the world of sailing.' },
    { year: '2024', icon: 'compass', text: 'After 11 years, we finally started dating.' },
    { year: '22.05.2026', icon: 'ring', text: 'And this was the day Gonçalo finally made his move.' },
    { year: '22.05.2027', icon: 'sailboat', text: 'The day we want you to be part of our greatest adventure.' },
  ],
  ceremony: { title: 'Ceremony', time: '16h30', place: 'Igreja de Nossa Senhora do Carmo', address: 'Largo do Carmo, 8800-314 Tavira', mapUrl: CEREMONY_MAP },
  celebration: { title: 'Celebration', time: '17h30', place: 'Quinta Vale Caranguejo', address: '8800-062 Tavira', mapUrl: QUINTA_MAP },
  program: [
    { time: '16h00', icon: 'guests', label: 'Guests arrive' },
    { time: '16h30', icon: 'church', label: 'Ceremony' },
    { time: '17h30', icon: 'cocktail', label: 'Cocktail' },
    { time: '19h30', icon: 'dinner', label: 'Dinner' },
    { time: '22h00', icon: 'music', label: 'First dance' },
    { time: '23h30', icon: 'party', label: 'Party' },
    { time: '03h00', icon: 'music', label: 'Last dance' },
  ],
  dressCode: { title: 'Formal', notes: ['Avoid white', "Avoid the bridesmaids' colours", "Avoid the groomsmen's tie colour"] },
  directions: [
    { n: 1, place: 'Igreja de Nossa Senhora do Carmo', address: 'Largo do Carmo, 8800-314 Tavira', mapUrl: CEREMONY_MAP },
    { n: 2, place: 'Quinta Vale Caranguejo', address: '8800-062 Tavira', mapUrl: QUINTA_MAP },
    { n: 3, place: 'Tavira old town', address: '8800-314 Tavira', mapUrl: CENTRO_MAP },
    { n: 4, place: 'Parking', address: 'Areas available near the estate', mapUrl: PARKING_MAP },
  ],
  hotels: [
    { name: 'Hotel Rural Quinta do Marco', stars: 4, dist: '8 km from the estate', drive: '12 min drive', url: MARCO_URL, img: 'hotel-marco.jpg' },
    { name: 'AP Maria Nova Lounge Hotel', stars: 4, dist: '5 km from the estate', drive: '8 min drive', url: MARIANOVA_URL, img: 'hotel-maria-nova.jpg' },
    { name: 'Pousada de Tavira', stars: 4, dist: '6 km from the estate', drive: '10 min drive', url: '#' },
    { name: 'Local stays in Tavira', stars: 5, dist: 'Several options in the area', drive: '', url: '#' },
  ],
  honeymoon: {
    eyebrow: 'Our next destination',
    title: 'Japan',
    text: 'After we say "I do", we\'ll set off for Japan — a place we have always dreamed of discovering together.',
  },
  gifts: {
    title: 'Gifts',
    lead: 'Your presence is our greatest gift.',
    text: 'If you would like to contribute to our honeymoon in Japan, you can do so below.',
    iban: IBAN,
  },
  rsvp: {
    eyebrow: 'RSVP',
    title: 'Confirm your attendance',
    name: 'Full name',
    guests: 'No. of guests',
    diet: 'Dietary restrictions',
    dietPlaceholder: 'Dietary restrictions (optional)',
    message: 'Message to the couple',
    messagePlaceholder: 'Message (optional)',
    submit: 'Confirm',
    sending: 'Sending…',
    errorName: 'Please enter your name.',
    errorSend: 'Could not send. Please try again or contact us directly.',
    thanks: (name) => `Thank you, ${name}!`,
    thanksText: "We've received your RSVP. We can't wait to celebrate with you!",
  },
  faqs: [
    { q: 'Can I bring children?', a: 'We love little ones! So everyone can relax and enjoy the party, the celebration is preferably adults only. If you need support, just let us know.' },
    { q: 'Is there parking?', a: 'Yes. There are free parking areas next to the estate and in the old town of Tavira.' },
    { q: 'Will the wedding be outdoors?', a: 'The ceremony is at the Igreja de Nossa Senhora do Carmo and the celebration moves between indoor spaces and the estate gardens. Bring a light jacket for the evening.' },
    { q: 'Are there vegetarian options?', a: 'Of course. Note your dietary restrictions in the RSVP form and we will take care of everything.' },
    { q: 'Can I RSVP later?', a: 'We kindly ask you to confirm by 22 March 2027 so we can organise everything with care.' },
    { q: 'Is there accommodation nearby?', a: 'Yes — we gathered a few suggestions in the "Where to stay" section, all just minutes from the estate.' },
  ],
}

export const translations = { pt, en }
