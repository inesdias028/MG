// ============================================================
// All site content lives here — edit text, dates and links
// in one place without touching the components.
// ============================================================

// RSVP form delivery.
// Leave empty ('') to just show the local "thank you" confirmation.
// To actually RECEIVE responses, create a free form at https://formspree.io
// (or https://getform.io) and paste its endpoint URL here, e.g.:
//   rsvpEndpoint: 'https://formspree.io/f/abcdwxyz'
// Submissions then arrive by email — no server needed.
export const rsvpEndpoint = ''

export const couple = {
  bride: 'Maria',
  groom: 'Gonçalo',
  date: '22 de Maio de 2027',
  dateShort: '22.05.2027',
  place: 'Tavira',
  region: 'Tavira, Algarve · Portugal',
}

// Top navigation — id must match each section's id
export const nav = [
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
]

export const story = [
  { year: '2013', icon: 'anchor', text: 'Conhecemo-nos no mundo da vela.' },
  { year: '2024', icon: 'compass', text: 'Depois de 11 anos, começámos finalmente a navegar lado a lado.' },
  { year: '22.05.2026', icon: 'ring', text: 'E foi neste dia que nos pedimos para sempre.' },
  { year: '22.05.2027', icon: 'heart', text: 'O dia em que queremos que façam parte da nossa maior aventura.' },
]

export const ceremony = {
  title: 'Cerimónia',
  time: '16h30',
  place: 'Igreja de Nossa Senhora do Carmo',
  address: 'Largo do Carmo, 8800-314 Tavira',
  mapUrl: 'https://maps.google.com/?q=Igreja+de+Nossa+Senhora+do+Carmo+Tavira',
}

export const celebration = {
  title: 'Celebração',
  time: '17h30',
  place: 'Quinta Vale Caranguejo',
  address: '8800-062 Tavira',
  mapUrl: 'https://maps.google.com/?q=Quinta+Vale+Caranguejo+Tavira',
}

export const program = [
  { time: '16h00', icon: 'guests', label: 'Chegada dos convidados' },
  { time: '16h30', icon: 'church', label: 'Cerimónia' },
  { time: '17h30', icon: 'cocktail', label: 'Cocktail' },
  { time: '19h30', icon: 'dinner', label: 'Jantar' },
  { time: '22h00', icon: 'music', label: 'Abertura do baile' },
  { time: '23h30', icon: 'party', label: 'Festa' },
  { time: '03h00', icon: 'heart', label: 'Última dança' },
]

export const dressCode = {
  title: 'Formal Chic',
  subtitle: 'Elegância descontraída.',
  notes: [
    'Vestidos compridos ou midi.',
    'Fato escuro ou fato claro.',
    'Evitar jeans, sapatilhas e roupa demasiado informal.',
  ],
}

export const directions = [
  { n: 1, place: 'Igreja de Nossa Senhora do Carmo', address: 'Largo do Carmo, 8800-314 Tavira', mapUrl: 'https://maps.google.com/?q=Igreja+de+Nossa+Senhora+do+Carmo+Tavira' },
  { n: 2, place: 'Quinta Vale Caranguejo', address: '8800-062 Tavira', mapUrl: 'https://maps.google.com/?q=Quinta+Vale+Caranguejo+Tavira' },
  { n: 3, place: 'Centro histórico de Tavira', address: '8800-314 Tavira', mapUrl: 'https://maps.google.com/?q=Centro+historico+de+Tavira' },
  { n: 4, place: 'Parques de estacionamento', address: 'Áreas disponíveis perto da quinta', mapUrl: 'https://maps.google.com/?q=Estacionamento+Tavira' },
]

export const hotels = [
  { name: 'Hotel Rural Quinta do Marquês', stars: 4, dist: '8 km da quinta', drive: '12 min de carro', url: '#' },
  { name: 'Hotel Maria Nova Lounge Hotel', stars: 4, dist: '5 km da quinta', drive: '8 min de carro', url: '#' },
  { name: 'Pousada de Tavira', stars: 4, dist: '6 km da quinta', drive: '10 min de carro', url: '#' },
  { name: 'Alojamentos locais Tavira', stars: 5, dist: 'Várias opções na zona', drive: '', url: '#' },
]

export const honeymoon = {
  eyebrow: 'O nosso próximo destino',
  title: 'Japão',
  text: 'Depois de dizermos "sim", partiremos para o Japão, um destino que sempre sonhámos conhecer juntos.',
}

export const gifts = {
  title: 'Presentes',
  lead: 'A vossa presença é o nosso maior presente.',
  text: 'Se desejarem contribuir para a nossa lua de mel no Japão, deixamos abaixo essa possibilidade.',
  iban: 'PT50 0000 0000 0000 0000 0000 0',
}

export const faqs = [
  { q: 'Posso levar crianças?', a: 'Adoramos os mais pequenos! Para que possam relaxar e aproveitar a festa, a celebração é preferencialmente só para adultos. Se precisar de apoio, fale connosco.' },
  { q: 'Existe estacionamento?', a: 'Sim. Há áreas de estacionamento gratuitas junto à quinta e no centro histórico de Tavira.' },
  { q: 'O casamento será no exterior?', a: 'A cerimónia é na Igreja de Nossa Senhora do Carmo e a celebração decorre entre espaços interiores e jardins da quinta. Traga um casaco leve para a noite.' },
  { q: 'Há opções vegetarianas?', a: 'Claro. Indique as suas restrições alimentares no formulário de RSVP e trataremos de tudo.' },
  { q: 'Posso confirmar mais tarde?', a: 'Agradecemos a confirmação até 22 de Março de 2027 para conseguirmos organizar tudo com carinho.' },
  { q: 'Existe alojamento perto?', a: 'Sim — reunimos algumas sugestões na secção "Onde Ficar", todas a poucos minutos da quinta.' },
]
