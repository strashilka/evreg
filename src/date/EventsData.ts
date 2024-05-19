import {EventReg} from "./EventReg";

const events_json = [
  {
    "id": "6647191aa5b5f0a94c210932",
    "title": "First conference",
    "description": "Do magna excepteur anim magna non. Id fugiat amet nulla pariatur nisi nostrud anim mollit enim. Esse occaecat ex reprehenderit aute excepteur anim ex eiusmod reprehenderit consequat eiusmod ad enim sit. Amet ea ea incididunt ad minim aliquip excepteur sint officia minim mollit. Deserunt qui non do exercitation reprehenderit dolor ipsum nostrud Lorem ad.\r\n",
    "date": "2020-02-10T07:53:30",
    "organizer": "Zillacon"
  },
  {
    "id": "6647191a3c5735de10b7dfdf",
    "title": "Meetup qui ad",
    "description": "Excepteur qui minim magna magna eiusmod anim veniam minim aliquip cupidatat. Aliquip non laboris qui cillum deserunt elit reprehenderit esse occaecat. Quis occaecat Lorem proident nostrud sit incididunt ullamco esse tempor commodo in anim.\r\n",
    "date": "2023-12-24T01:23:43",
    "organizer": "Infotrips"
  },
  {
    "id": "6647191a407c447e597cbd33",
    "title": "Conference labore Lorem",
    "description": "Mollit cupidatat minim consequat voluptate pariatur nulla minim ad deserunt. Duis Lorem duis consectetur tempor pariatur. Enim cillum anim commodo proident consequat duis sit irure est dolor officia id pariatur. Do fugiat eiusmod sint aliquip quis do quis tempor culpa sunt consequat. Dolor et eu aute elit consequat. Nisi ullamco aliquip labore ipsum enim cillum ex ipsum sit sint dolore.\r\n",
    "date": "2017-03-20T01:11:51",
    "organizer": "Acusage"
  },
  {
    "id": "6647191af28e7a141c2c53d7",
    "title": "Conference ipsum veniam",
    "description": "Id Lorem incididunt velit fugiat ullamco anim fugiat ea velit anim. Nulla consectetur ullamco minim quis. Lorem ex fugiat duis id do consectetur ullamco.\r\n",
    "date": "2019-03-15T01:26:17",
    "organizer": "Orbean"
  },
  {
    "id": "6647191a3135b5fd30198061",
    "title": "Workshop excepteur nisi",
    "description": "Sint exercitation in nisi ullamco. Ea deserunt irure non non eiusmod ea ullamco velit ullamco fugiat velit. Adipisicing nisi ad ea dolore minim dolore esse mollit officia est. Reprehenderit aute labore eiusmod excepteur aliquip id officia qui eu aliqua aliquip pariatur officia cillum.\r\n",
    "date": "2018-12-15T09:38:12",
    "organizer": "Insuresys"
  },
  {
    "id": "6647191a7aa25bc99a55163a",
    "title": "Workshop sunt consequat",
    "description": "Sint aliqua laboris consectetur sint ad excepteur culpa ex pariatur. Ipsum non dolor cupidatat excepteur occaecat excepteur irure laboris cillum dolore tempor minim. Tempor officia culpa eu exercitation pariatur nisi enim consequat in officia. Aliqua eiusmod sint dolor est excepteur sunt cillum duis eu nulla eiusmod ea aute adipisicing.\r\n",
    "date": "2021-06-21T07:42:30",
    "organizer": "Kyaguru"
  },
  {
    "id": "6647191a4def10d7f12df137",
    "title": "Workshop ex cillum",
    "description": "Exercitation consequat pariatur voluptate consectetur consectetur anim laboris nulla culpa culpa occaecat magna. Sit velit aute dolore elit et dolor voluptate anim esse. Proident sint aute nulla anim ullamco velit.\r\n",
    "date": "2021-08-02T10:45:30",
    "organizer": "Apexia"
  },
  {
    "id": "6647191a8515ad10b9c4a672",
    "title": "Workshop ut et",
    "description": "Dolor eiusmod culpa Lorem deserunt laborum nulla nostrud irure laborum sit quis. Fugiat laborum ad voluptate tempor do magna exercitation laboris incididunt veniam. Aliquip aute sint eiusmod eiusmod ullamco.\r\n",
    "date": "2017-02-24T11:44:44",
    "organizer": "Earthpure"
  },
  {
    "id": "6647191a00894ab98e757013",
    "title": "Meetup amet incididunt",
    "description": "Proident ea deserunt do ullamco eiusmod Lorem ipsum proident. Lorem ex culpa velit dolor cupidatat. Labore et nostrud occaecat proident sint consequat proident mollit mollit minim qui tempor proident cillum. Eu labore est occaecat velit dolor culpa adipisicing. Ipsum quis proident non velit consectetur id cillum et fugiat aliquip aute velit fugiat. Ullamco ut proident magna laboris aliquip incididunt elit eu do ex eiusmod. Tempor consectetur ullamco fugiat excepteur.\r\n",
    "date": "2020-06-14T03:20:30",
    "organizer": "Krog"
  },
  {
    "id": "6647191a4fd954446f275f4c",
    "title": "Conference ut aute",
    "description": "Et laborum esse anim consequat ad irure veniam sunt est. Exercitation dolor ex et laboris occaecat et reprehenderit culpa officia ipsum enim sunt. Ea adipisicing nulla ea in nisi culpa ex magna consequat Lorem.\r\n",
    "date": "2018-08-30T10:50:37",
    "organizer": "Centrexin"
  },
  {
    "id": "6647191a326746ec459e9f1a",
    "title": "Workshop commodo eu",
    "description": "In sunt aliquip esse sit ut non ex duis cillum. Commodo fugiat adipisicing officia in nulla ea sit labore Lorem occaecat irure ea irure. Culpa sunt reprehenderit nulla adipisicing nulla voluptate esse. Ea labore proident tempor et cillum officia deserunt ea ex deserunt elit sint aliqua.\r\n",
    "date": "2022-10-15T08:15:00",
    "organizer": "Mantrix"
  },
  {
    "id": "6647191acc39c77876b24f7d",
    "title": "Conference reprehenderit incididunt",
    "description": "Ea nulla est aliqua qui incididunt sit incididunt. Est nostrud laborum aliquip ad incididunt qui amet amet commodo sint eu consequat labore ut. Commodo in cupidatat deserunt aliqua culpa aute elit nostrud.\r\n",
    "date": "2018-05-30T08:20:26",
    "organizer": "Comverges"
  },
  {
    "id": "6647191aa472d6860b669889",
    "title": "Meetup aliqua occaecat",
    "description": "Ullamco sit ex deserunt quis nostrud magna cupidatat consequat commodo in duis occaecat eu. Tempor et laborum qui ullamco ullamco in. Reprehenderit culpa ad veniam voluptate tempor dolore ad culpa cupidatat aliquip et ad sunt occaecat.\r\n",
    "date": "2016-07-05T05:25:01",
    "organizer": "Zomboid"
  },
  {
    "id": "6647191ab32cf5ad09ae00e2",
    "title": "Workshop dolore ullamco",
    "description": "Excepteur dolore occaecat Lorem anim non labore sint. Non ullamco commodo consectetur mollit ipsum eu et Lorem culpa ipsum Lorem. Nostrud exercitation cillum reprehenderit in Lorem do. Nostrud ad ea nulla aliquip. Ut sint consectetur nostrud ad laborum irure incididunt est exercitation occaecat aliquip ullamco. Veniam magna ut nostrud Lorem pariatur. Ex ex cupidatat nostrud id tempor amet enim irure veniam eu adipisicing eu.\r\n",
    "date": "2018-12-27T11:30:05",
    "organizer": "Rodemco"
  },
  {
    "id": "6647191a55bea0f03a220ff9",
    "title": "Conference adipisicing incididunt",
    "description": "Elit ex dolore non pariatur. Reprehenderit ipsum aliqua minim dolor qui fugiat et commodo. Enim do enim adipisicing voluptate exercitation nulla qui dolore amet laborum nostrud excepteur. Ipsum magna labore aute aliqua ex qui fugiat est labore cillum in elit. Dolore aliquip est magna fugiat quis fugiat elit sint in.\r\n",
    "date": "2015-09-09T04:42:11",
    "organizer": "Vinch"
  },
  {
    "id": "6647191a0acef47fa12c9a6f",
    "title": "Meetup do nisi",
    "description": "Est reprehenderit deserunt duis aute sit tempor fugiat. Quis reprehenderit cupidatat ut culpa. Velit incididunt ad consequat magna veniam tempor do magna duis dolore ut voluptate. Fugiat et sunt reprehenderit exercitation aute laboris fugiat enim culpa.\r\n",
    "date": "2015-02-27T10:28:27",
    "organizer": "Assistix"
  },
  {
    "id": "6647191adc6f4dc2caebaa1c",
    "title": "Conference culpa enim",
    "description": "Eiusmod dolor in pariatur laboris mollit. Anim fugiat elit laboris eu ad pariatur Lorem sit amet qui ex. Ullamco excepteur est do eiusmod aliqua cupidatat aliquip adipisicing aliquip. Ea irure voluptate est quis dolor deserunt. Proident nostrud deserunt ea mollit adipisicing. Aliquip ad excepteur dolore veniam nostrud fugiat ex enim ullamco id.\r\n",
    "date": "2024-01-26T10:55:39",
    "organizer": "Telequiet"
  },
  {
    "id": "664a0567eecb71563d926a3a",
    "title": "Meetup ullamco nisi",
    "description": "Ullamco mollit occaecat excepteur ullamco. Aliqua laboris est et eu est consectetur. Ex cillum id aliqua reprehenderit culpa nisi aliquip Lorem ut incididunt. Cillum aliqua Lorem ex magna dolore tempor laboris est ea eu esse incididunt. Ad nostrud incididunt deserunt cupidatat voluptate id ut.\r\n",
    "date": "2019-04-02T05:47:00",
    "organizer": "Musaphics"
  },
  {
    "id": "664a0567deebd9a6a6f10901",
    "title": "Meetup minim duis",
    "description": "Amet ut ad ipsum aliquip deserunt. Sunt sit in aute laborum amet dolor dolore occaecat. Id sint dolore sunt amet veniam non velit do enim exercitation cupidatat pariatur consequat magna. Aute pariatur officia enim irure minim aute eiusmod sit magna cillum irure. Esse elit cillum veniam aute fugiat eu id sint culpa quis ipsum. In incididunt in cillum esse cillum dolor excepteur non dolore velit. Cupidatat excepteur laborum do consectetur eiusmod do laborum aliquip.\r\n",
    "date": "2016-01-13T08:09:56",
    "organizer": "Andryx"
  },
  {
    "id": "664a05678336a0e5db74f93b",
    "title": "Conference fugiat elit",
    "description": "Aliqua incididunt sint culpa ad proident. Esse minim adipisicing nostrud excepteur ea nostrud consequat magna proident labore magna esse velit sint. Ut adipisicing nisi fugiat commodo. Laborum proident culpa tempor irure ex commodo ullamco anim anim.\r\n",
    "date": "2023-12-01T08:25:55",
    "organizer": "Eyeris"
  },
  {
    "id": "664a0567b5bdc6fba1530873",
    "title": "Workshop eu sint",
    "description": "Veniam esse proident eu fugiat reprehenderit ipsum ullamco do incididunt in. Consequat excepteur labore amet magna ipsum duis in cupidatat dolore. Enim et anim quis deserunt. Aliqua sunt ut aliqua adipisicing. Quis cupidatat duis mollit velit anim. Et aute incididunt incididunt pariatur aliquip deserunt. Ex ad amet laboris esse labore id nisi Lorem eiusmod nostrud.\r\n",
    "date": "2015-05-09T06:15:34",
    "organizer": "Idego"
  },
  {
    "id": "664a0567eaa56c69bf2e1601",
    "title": "Conference culpa do",
    "description": "Aliquip exercitation pariatur enim sunt duis minim esse est aliquip cillum laboris Lorem ea pariatur. Velit consectetur est consectetur culpa elit consectetur ullamco eiusmod do. Cupidatat do laboris ipsum duis anim dolor nisi magna irure Lorem.\r\n",
    "date": "2022-02-14T12:08:21",
    "organizer": "Venoflex"
  },
  {
    "id": "664a05672fcc4a32dfc46fc3",
    "title": "Conference eu deserunt",
    "description": "In deserunt eu fugiat dolore elit excepteur. Dolore ea occaecat deserunt amet reprehenderit ea nulla esse est labore aute non. Laboris tempor culpa excepteur ut cillum eu deserunt elit aliqua. Sit elit amet enim consectetur magna nostrud ut. Elit anim anim proident enim occaecat enim sunt veniam aliqua veniam commodo nostrud amet. Ex duis exercitation cillum cupidatat in Lorem.\r\n",
    "date": "2020-10-23T09:25:30",
    "organizer": "Cipromox"
  },
  {
    "id": "664a056707cc8c43804e816e",
    "title": "Workshop dolore commodo",
    "description": "Ipsum laboris sunt culpa commodo ex aute enim veniam magna culpa reprehenderit cupidatat aliquip. Dolore ut eu dolore officia ea aute non ex exercitation ea irure qui. Cupidatat proident Lorem ex duis ad non ea proident fugiat aliquip cupidatat veniam ipsum. Culpa quis cupidatat minim cillum incididunt incididunt.\r\n",
    "date": "2020-12-09T10:16:11",
    "organizer": "Marketoid"
  },
  {
    "id": "664a0567f9d8de4315961949",
    "title": "Meetup ullamco aliqua",
    "description": "Elit non laboris esse Lorem minim ipsum incididunt sit consectetur ullamco ea. Ipsum labore incididunt minim et aliqua culpa ex qui adipisicing. Tempor occaecat sint cupidatat est laborum. Irure elit ut dolor nisi adipisicing pariatur commodo duis eu duis tempor.\r\n",
    "date": "2019-06-18T02:02:23",
    "organizer": "Steelfab"
  },
  {
    "id": "664a05678e58481c5df98c47",
    "title": "Workshop exercitation voluptate",
    "description": "Anim ad pariatur esse magna aute veniam irure esse nostrud pariatur reprehenderit. Laborum enim reprehenderit irure culpa. Nostrud exercitation officia aliqua sint est dolore veniam enim elit officia nulla. Irure quis enim incididunt cillum fugiat mollit duis. Et commodo aliquip ullamco aliqua mollit. Voluptate Lorem duis laborum sit.\r\n",
    "date": "2014-05-29T10:10:51",
    "organizer": "Dognost"
  },
  {
    "id": "664a0567191437689fd8cc67",
    "title": "Workshop esse consequat",
    "description": "Minim ea do qui laboris ullamco eiusmod do est nisi elit velit. Officia do sint non veniam aliquip elit anim cupidatat et aliquip eiusmod sit reprehenderit esse. Sunt aute deserunt labore dolore nulla veniam cillum enim nulla. Occaecat est esse occaecat fugiat ea excepteur magna labore eu sunt.\r\n",
    "date": "2021-10-23T10:15:30",
    "organizer": "Duoflex"
  },
  {
    "id": "664a05677098f52e23b15ce3",
    "title": "Meetup nulla non",
    "description": "Nulla sint officia esse amet sit quis reprehenderit in adipisicing. Adipisicing est est enim cillum aliquip aliqua adipisicing veniam ea. Lorem tempor est veniam aliquip officia mollit ipsum consectetur culpa sunt dolor commodo consectetur.\r\n",
    "date": "2018-05-01T01:21:16",
    "organizer": "Volax"
  },
  {
    "id": "664a05678386787449aef496",
    "title": "Workshop eiusmod enim",
    "description": "Anim velit in exercitation do officia eiusmod ut incididunt. Ex commodo occaecat proident eu aliquip aute do eu officia ex aliquip. Aliqua cupidatat in magna velit eiusmod consequat tempor labore ea laborum minim velit est aliqua.\r\n",
    "date": "2018-01-28T08:43:58",
    "organizer": "Assistia"
  },
  {
    "id": "664a0567fdda5ee6bb8ebe66",
    "title": "Conference est amet",
    "description": "Sint est ad non cupidatat sunt sit pariatur nulla elit consequat. Exercitation officia culpa proident id fugiat ex eiusmod incididunt consequat. Irure nisi irure enim nulla laborum. Duis ut non ea nostrud minim amet deserunt qui adipisicing. Pariatur fugiat deserunt enim fugiat cillum Lorem non eu proident enim esse consequat velit exercitation. Non duis dolor duis aliquip excepteur. Fugiat magna ad quis velit in.\r\n",
    "date": "2024-01-14T09:17:56",
    "organizer": "Enthaze"
  },
  {
    "id": "664a0567591099ad0fe26613",
    "title": "Workshop do tempor",
    "description": "Irure laborum minim dolore mollit exercitation esse sint aute reprehenderit magna duis magna. Duis ipsum est proident veniam non. Minim velit excepteur nisi labore veniam.\r\n",
    "date": "2020-06-24T09:36:51",
    "organizer": "Elita"
  }
]

const EventsData: EventReg[] = events_json.map(event => ({
  ...event,
  date: new Date(event.date)
}));

export default EventsData;