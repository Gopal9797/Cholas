import type { King } from './types'
import { bookSources } from './sources'

export const kingsEarly: King[] = [
  {
    id: 'vijayalaya',
    name: 'Vijayalaya',
    nameTamil: 'விஜயாலய சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 1,
    coronationYear: 848,
    coronationLabel: 'c. 848',
    coronationDebated: true,
    reignEndLabel: 'c. 871',
    debate:
      'His accession is placed anywhere from about 846 to 850. This list uses c. 848 so the later kings stay in one order.',
    sons: [{ name: 'Aditya I', nameTamil: 'முதலாம் ஆதித்தன்', kingId: 'aditya-i' }],
    spouses: [],
    daughters: [],
    familyNote: 'No queen is named in this first version.',
    summary:
      'Vijayalaya is the founder of the later Chola line. He began as a chief in the Kaveri country while the Pallavas were still the greater power, and he took Thanjavur from the Muttaraiyar. That capture gave his family a capital. He is also remembered for a temple to the goddess Nisumbasudani in the city. The wide Chola realm of the eleventh century is not his. His kingdom was the river country around Thanjavur.',
    meikeerthiNote:
      'No inscriptional meikeerthi of his own is quoted here. The long Tamil prasasti becomes a Chola habit only later, under Rajaraja I.',
    battles: [
      {
        name: 'Capture of Thanjavur',
        yearLabel: 'c. 850',
        outcome: 'win',
        summary:
          'He took Thanjavur from the Muttaraiyar chiefs. The city became the Chola capital and the base for his son’s war against the Pallavas.',
      },
    ],
    territoryId: 'cauvery',
    territoryCaption:
      'Schematic Kaveri core around Thanjavur. This is a sketch of the early realm, not a surveyed boundary.',
    sources: bookSources('Vijayalaya Chola'),
  },
  {
    id: 'aditya-i',
    name: 'Aditya I',
    nameTamil: 'முதலாம் ஆதித்த சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 2,
    coronationYear: 871,
    coronationLabel: 'c. 871',
    reignEndLabel: 'c. 907',
    fatherId: 'vijayalaya',
    sons: [{ name: 'Parantaka I', nameTamil: 'முதலாம் பராந்தகன்', kingId: 'parantaka-i' }],
    spouses: [
      {
        name: 'Ilangon Pichchi',
        note: 'Named among his queens in the inscriptional lists of the reign.',
      },
      {
        name: 'Vayiri Akkan, Tribhuvana Madeviyar',
        nameTamil: 'வயிரி அக்கன்',
        note: 'Named as a queen in South Indian Inscriptions vol. 13. The mother of Parantaka I is not fixed to her by one stone.',
      },
    ],
    daughters: [],
    familyNote:
      'His mother is named Anaghavati in the standard accounts. The queens above are the names in the inscriptional lists. A mistress, Nangai Sattaperumanar, is also named in one of those records.',
    summary:
      'Aditya I turned his father’s river chiefdom into a kingdom that included Tondaimandalam, the northern Tamil country of the Pallavas. The decisive fight was at Tiruppurambiyam, where he defeated the Pallava king Aparajita. A Ganga ally, Prithvipati I, died on that field. After the Pallava collapse, Aditya’s records are also the records of a builder: small stone temples begin to line the Kaveri in his reign and his son’s.',
    meikeerthiNote:
      'Temple records survive from this reign. A long conquest meikeerthi of the later type is not quoted here.',
    battles: [
      {
        name: 'Battle of Tiruppurambiyam',
        yearLabel: 'c. 885',
        outcome: 'win',
        summary:
          'Aditya defeated the Pallava Aparajita. The battle ended effective Pallava rule in Tondai and opened that country to the Cholas. Prithvipati I of the Gangas, fighting with Aditya, was killed.',
      },
    ],
    territoryId: 'expansion',
    territoryCaption:
      'Schematic extent after the Pallava collapse: Tondai in the north and the Tamil country down through the Pandya south. The Sri Lanka campaigns belong to his son. This is not a surveyed boundary.',
    sources: bookSources('Aditya I'),
  },
  {
    id: 'parantaka-i',
    name: 'Parantaka I',
    nameTamil: 'முதலாம் பராந்தக சோழன்',
    epithet: 'Madurai-konda',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 3,
    coronationYear: 907,
    coronationLabel: 'c. 907',
    reignEndLabel: 'c. 955',
    fatherId: 'aditya-i',
    sons: [
      {
        name: 'Rajaditya',
        note: 'Eldest son, also called Kodandarama. Killed at Takkolam. He did not reign. An inscription of the 28th year calls Kokkilanadigal his mother.',
      },
      { name: 'Gandaraditya', nameTamil: 'கண்டராதித்தன்', kingId: 'gandaraditya' },
      { name: 'Arinjaya', nameTamil: 'அரிஞ்சயன்', kingId: 'arinjaya' },
    ],
    spouses: [
      {
        name: 'Kokkilanadigal',
        nameTamil: 'கோக்கிழானடிகள்',
        note: 'A Chera princess. An inscription of his 28th year names her as queen and as the mother of Rajaditya.',
      },
    ],
    daughters: [],
    familyNote:
      'Other queens are named in the records and in later lists, among them Kizhan Adikal Ravi Neeli, Tennavan Mahadevi, and Villavan Mahadevi. The mother-to-son link is secure for Rajaditya. It is not secure for every child. Uttamasili is also named among the sons. He did not reign.',
    summary:
      'Parantaka I took the title of the king who conquered Madurai. He drove the Pandya king Rajasimha II from Madurai and carried the war into northern Sri Lanka. For a generation the Chola realm looked larger than anything Vijayalaya had ruled. In 949 that expansion broke. At Takkolam the Rashtrakuta king Krishna III defeated the Chola army and killed the crown prince Rajaditya. Tondaimandalam passed out of Chola hands. The next few reigns live in the shadow of that defeat.',
    meikeerthiNote:
      'The titles above are the names on his inscriptions. The long verse meikeerthi of a later reign is not quoted here.',
    battles: [
      {
        name: 'Conquest of Madurai',
        yearLabel: 'early reign',
        outcome: 'win',
        summary: 'He defeated Pandya Rajasimha II and took Madurai. The title Madurai-konda comes from this war.',
      },
      {
        name: 'Campaign in northern Sri Lanka',
        outcome: 'win',
        summary:
          'He followed the Pandya alliance into Ilam and claimed the north of the island. The hold was real enough to enter his title, and it was not yet the settled province of Rajaraja’s reign.',
      },
      {
        name: 'Battle of Takkolam',
        yearLabel: '949',
        outcome: 'loss',
        summary:
          'Krishna III of the Rashtrakutas defeated Parantaka’s army. Crown prince Rajaditya was killed. The Rashtrakutas occupied Tondaimandalam, and the Chola realm shrank back toward the Kaveri.',
      },
    ],
    territoryId: 'expansion-ilam',
    territoryCaption:
      'Drawn at the high point, before Takkolam: the Tamil country and a foothold in northern Sri Lanka. After 949 the northern part of this shape was lost. Schematic, not a surveyed boundary.',
    sources: bookSources('Parantaka I'),
  },
  {
    id: 'gandaraditya',
    name: 'Gandaraditya',
    nameTamil: 'கண்டராதித்த சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 4,
    coronationYear: 955,
    coronationLabel: 'c. 955',
    coronationDebated: true,
    reignEndLabel: 'c. 956',
    debate: 'This reign is a short slot in the chronology, about 955–956. The year is conventional.',
    fatherId: 'parantaka-i',
    spouses: [
      {
        name: 'Sembiyan Mahadevi',
        nameTamil: 'சேம்பியன் மாதேவி',
        note: 'Mother of Uttama. After Gandaraditya’s death she became one of the great temple patrons of the Kaveri country.',
      },
    ],
    sons: [{ name: 'Uttama', nameTamil: 'உத்தமன்', kingId: 'uttama', note: 'Also called Madurantaka.' }],
    daughters: [],
    summary:
      'Gandaraditya ruled briefly while the Rashtrakuta occupation of the north still stood. He is remembered less as a conqueror than as a devotee of Shiva. A hymn of his is preserved in the Thiruvisaippa. His queen, Sembiyan Mahadevi, outlived him and spent a long life building and rebuilding temples in stone. Their son Uttama later became king, ahead of the senior line of Arinjaya.',
    meikeerthiNote:
      'He is remembered for a Shaiva hymn in the Thiruvisaippa, not for a conquest meikeerthi. No verse is composed for him here.',
    battles: [],
    territoryId: 'after-takkolam',
    territoryCaption:
      'Schematic realm after Takkolam: the Kaveri core. Tondai was still under Rashtrakuta pressure. Not a surveyed boundary.',
    sources: bookSources('Gandaraditya'),
  },
  {
    id: 'arinjaya',
    name: 'Arinjaya',
    nameTamil: 'அரிஞ்சய சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 5,
    coronationYear: 956,
    coronationLabel: 'c. 956',
    coronationDebated: true,
    reignEndLabel: 'c. 957',
    debate: 'A reign of about a year. The dates 956–957 are a conventional slot between his brother and his son.',
    fatherId: 'parantaka-i',
    sons: [{ name: 'Parantaka II, Sundara Chola', nameTamil: 'சுந்தர சோழன்', kingId: 'sundara' }],
    spouses: [
      {
        name: 'Kalyani',
        nameTamil: 'கல்யாணி',
        note: 'A Vaidumba princess. Named as the mother of Parantaka II, Sundara Chola.',
      },
    ],
    daughters: [],
    familyNote: 'Kalyani is the queen the standard accounts name as Sundara’s mother.',
    summary:
      'Arinjaya was a younger son of Parantaka I and the brother of Gandaraditya. He ruled for about a year. Almost nothing of a public career is securely told of him. His place in the story is genealogical: he is the father of Sundara Chola, and through Sundara the grandfather of Rajaraja I.',
    meikeerthiNote: 'No stable meikeerthi is tied to this very short reign. Nothing is invented to fill the gap.',
    battles: [],
    territoryId: 'after-takkolam',
    territoryCaption: 'The same reduced Kaveri realm as his brother’s short reign. Schematic, not a surveyed boundary.',
    sources: bookSources('Arinjaya Chola'),
  },
  {
    id: 'sundara',
    name: 'Parantaka II',
    nameTamil: 'இரண்டாம் பராந்தக சோழன்',
    epithet: 'Sundara Chola',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 6,
    coronationYear: 957,
    coronationLabel: 'c. 957',
    coronationDebated: true,
    reignEndLabel: 'c. 970',
    debate:
      'Some chronologies end the reign about 970, when Uttama’s rule is counted as beginning. Others carry Sundara’s last years nearer 973. This list uses c. 957 for the coronation and c. 970 for the handoff.',
    fatherId: 'arinjaya',
    spouses: [
      {
        name: 'Vanavan Mahadevi',
        nameTamil: 'வானவன் மாதேவி',
        note: 'Named as the mother of Rajaraja I. Later lists also call her the mother of Aditya II. Inscriptions are explicit for Rajaraja.',
      },
    ],
    sons: [
      {
        name: 'Aditya II Karikala',
        nameTamil: 'இரண்டாம் ஆதித்த கரிகாலன்',
        kingId: 'aditya-ii',
        note: 'Elder heir. Assassinated. Not crowned as sole king.',
      },
      { name: 'Rajaraja I', nameTamil: 'முதலாம் இராஜராஜன்', kingId: 'rajaraja-i', note: 'Born Arulmozhivarman.' },
    ],
    daughters: [
      {
        name: 'Kundavai',
        nameTamil: 'குந்தவை பிராட்டியார்',
        note: 'Elder sister of Rajaraja. Patron at Thanjavur and Palaiyarai, and a force in his early reign.',
      },
    ],
    summary:
      'Sundara Chola, Parantaka II, began to lift the kingdom out of the years after Takkolam. He took Madurai back, recovered Tondaimandalam from the Rashtrakutas, and led an expedition to Sri Lanka that ended in a treaty rather than a conquest. The famous victory over Vira Pandya belongs to his son Aditya II. Sundara’s own reign is also the family crisis that follows. Aditya II was murdered. An inscription at the Anantheeswarar temple in Udayarkudi names the men punished for that killing. The throne did not pass at once to the boy Rajaraja. It passed to Uttama, son of Gandaraditya. Rajaraja waited.',
    meikeerthiNote:
      'Inscriptions of the reign exist. A single short meikeerthi opening is not quoted here. The famous head-taking title belongs to his son Aditya II.',
    battles: [
      {
        name: 'Recovery in the Pandya country',
        outcome: 'win',
        summary:
          'His house pushed back into Pandya territory and started to recover ground lost after Takkolam. The title for taking Vira Pandya’s head is Aditya II’s, and it is told on that page.',
      },
    ],
    territoryId: 'after-takkolam',
    territoryCaption:
      'Still the reduced core, with Pandya campaigns beginning to push the frontier south again. Schematic, not a surveyed boundary.',
    sources: bookSources('Parantaka II'),
  },
  {
    id: 'aditya-ii',
    name: 'Aditya II Karikala',
    nameTamil: 'இரண்டாம் ஆதித்த கரிகாலன்',
    inCoronationList: false,
    role: 'heir',
    sortIndex: 100,
    coronationYear: 966,
    coronationLabel: 'c. 966',
    reignEndLabel: 'c. 971',
    coRulerLabel: 'Co-regent, not sole king',
    fatherId: 'sundara',
    spouses: [
      {
        name: 'Ilaada Madeviyar',
        nameTamil: 'இளாட மாதேவியார்',
        note: 'Named as his wife in later accounts. The published inscriptions of his own reign do not name her. She is not the Ilada Mahadevi of Rajaraja I.',
      },
    ],
    sons: [
      {
        name: 'Karikala Kannan',
        nameTamil: 'கரிகால கண்ணன்',
        note: 'Also called Karikala Karnan. Named as Aditya’s son in later accounts. The Udayarkudi inscription does not name him. He did not rule.',
      },
    ],
    daughters: [],
    debate:
      'The Udayarkudi inscription names the men it calls traitors for the killing. It does not name the person who ordered it. Uttama, who took the throne after Sundara, is not named in that record. Later writers have argued about him, and about others. Those arguments are not the inscription. His own records run to a fifth year. This list counts the co-regency from about 966 to about 971. Uttama’s coronation is still counted from about 970, so the last year overlaps that handoff.',
    familyNote:
      'The son and the wife are names given in later accounts. They are not in the Udayarkudi inscription that names his killers. A birth year of 942 has no inscription behind it. He died before a sole reign. He is on the dynasty diagram and not in the coronation list.',
    meikeerthiNote:
      'The titles above are the names on his records. They are a prince’s titles, not a sole coronation.',
    summary:
      'Aditya II was the elder son of Sundara Chola and the heir of the main line. As a prince he defeated Vira Pandya, and his records give him the hard title of the king who took that Pandya’s head. He was then assassinated, before a sole coronation that this list can date. The account of the killing is an inscription at the Anantheeswarar temple in Udayarkudi, near Kattumannarkoil. In the second year of Rajakesarivarman, identified as Rajaraja I, about 988, the sabha of Viranarayana-chaturvedimangalam copied a royal letter. The letter says three brothers were guilty of treason for killing Karikala Chola, the prince who took the Pandya’s head. They are Soman, whose other name is broken on the inscription; his younger brother Ravidasan, titled Panchavan Brahmadirajan; and the next brother, Parameswaran, titled Irumudichola Brahmadirajan. Their property was taken, and so was property of named relatives, including a brother called Malaiyanuran. The record is of confiscation and sale. It does not record an execution. Because a sole coronation is not established, he is kept off the coronation list.',
    battles: [
      {
        name: 'Defeat of Vira Pandya',
        outcome: 'win',
        summary:
          'He broke Vira Pandya in the south and took the title that claims the Pandya’s head. The war restored Chola pressure in the Pandya country while his father was still king.',
      },
    ],
    territoryId: 'after-takkolam',
    territoryCaption:
      'He fought in the Pandya country under his father. The map shows the reduced Chola core of those years, not a realm of his own. Schematic.',
    sources: [
      ...bookSources('Aditha Karikalan'),
      'Epigraphia Indica, vol. 21, the Udaiyargudi inscription of Rajakesarivarman, at the Anantheeswarar temple',
    ],
  },
  {
    id: 'uttama',
    name: 'Uttama',
    nameTamil: 'உத்தம சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 7,
    coronationYear: 970,
    coronationLabel: 'c. 970',
    coronationDebated: true,
    reignEndLabel: 'c. 985',
    debate:
      'His coronation is tied to the end of Sundara Chola’s reign, and those last years are counted differently. This list crowns him about 970.',
    fatherId: 'gandaraditya',
    spouses: [
      {
        name: 'Sorabbaiyar Tribhuvana Mahadevi',
        nameTamil: 'சோரப்பையார் திருபுவன மாதேவி',
        note: 'Named as his chief queen. Also written Orattanan Sorabbaiyar.',
      },
      {
        name: 'Kaduvettigal Nandippottairaiyar',
        note: 'Named among his queens, and often taken to be a Pallava princess.',
      },
      {
        name: 'Siddhavadavan Suttiyar',
        note: 'Named among his queens. Connected in the records with the Miladu chiefs.',
      },
    ],
    sons: [
      {
        name: 'Madhurantaka Gandaradityan',
        note: 'Named in later lists. He did not take the throne.',
      },
    ],
    daughters: [],
    familyNote:
      'His mother was Sembiyan Mahadevi. The queens above are the ones the inscriptions and the standard accounts name. No son of his took the throne. It passed to his cousin Rajaraja I.',
    summary:
      'Uttama was the son of Gandaraditya and Sembiyan Mahadevi. He became king after Sundara Chola even though Sundara’s younger son, Rajaraja, was alive. The arrangement kept the throne in Gandaraditya’s branch for one reign. Uttama’s years are quiet beside the reigns on either side of him: no new conquest title, and a court still marked by his mother’s temple building. The Udayarkudi inscription, set up in Rajaraja’s second year, names Soman, Ravidasan, and Parameswaran for the murder of Aditya II. It does not name Uttama. Later historians have still asked whether he benefited from the killing, or whether he ordered it. The inscription does not answer that.',
    meikeerthiNote:
      'His inscriptions do not carry a conquest meikeerthi of the kind quoted for Parantaka I or Rajaraja I. None is invented here.',
    battles: [],
    territoryId: 'after-takkolam',
    territoryCaption:
      'The Kaveri core at the end of the post-Takkolam years. The next king is the one who draws a much larger shape. Schematic.',
    sources: bookSources('Uttama Chola'),
  },
  {
    id: 'rajaraja-i',
    name: 'Rajaraja I',
    nameTamil: 'முதலாம் இராஜராஜ சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 8,
    coronationYear: 985,
    coronationLabel: 'c. 985',
    reignEndLabel: 'c. 1014',
    fatherId: 'sundara',
    spouses: [
      {
        name: 'Loka Mahadevi',
        nameTamil: 'லோகமாதேவி',
        note: 'Chief queen. The Thanjavur record also calls her Dantisakti Vitanki. She built the Lokamahadevisvara shrine at Tiruvaiyaru.',
      },
      {
        name: 'Vanavan Mahadevi',
        nameTamil: 'வானவன் மாதேவி',
        note: 'Also titled Tribhuvana Mahadevi. A record of his fourth year names her as the mother of Rajendra I. Other lists give that place to Panchavan Mahadevi. Both names are on stone. Which woman was the mother is not settled by one inscription.',
      },
      {
        name: 'Chola Mahadevi',
        nameTamil: 'சோழமாதேவி',
        note: 'Named among the queens who gave to the great temple. One early record treats this as another name of Panchavan Mahadevi. The temple list also enters them separately.',
      },
      {
        name: 'Trailokya Mahadevi',
        nameTamil: 'திரைலோக்கிய மாதேவி',
        note: 'Named in the Thanjavur gifts.',
      },
      {
        name: 'Panchavan Mahadevi',
        nameTamil: 'பஞ்சவன் மாதேவி',
        note: 'Named in the Thanjavur gifts. Sometimes the same person as Chola Mahadevi, sometimes listed apart from her.',
      },
      {
        name: 'Abhimanavalli',
        nameTamil: 'அபிமானவல்லி',
        note: 'Named in the Thanjavur inscriptions.',
      },
      {
        name: 'Ilada Mahadevi',
        nameTamil: 'இளட மாதேவி',
        note: 'Also called Lata Mahadevi, a queen from Lata. Named in the temple record.',
      },
      {
        name: 'Prithivi Mahadevi',
        nameTamil: 'பிருதிவி மாதேவி',
        note: 'Also called Nakkan Arumoli in the same records.',
      },
      {
        name: 'Minavan Mahadevi',
        nameTamil: 'மீனவன் மாதேவி',
        note: 'Also called Vemban Sirudaiyar. Named in inscriptions of the reign outside the main Thanjavur gift list.',
      },
      {
        name: 'Villavan Mahadevi',
        nameTamil: 'வில்லவன் மாதேவி',
        note: 'Named in inscriptions of the reign.',
      },
      {
        name: 'Viranarayani',
        nameTamil: 'வீரநாராயணி',
        note: 'A title that stands beside the queens of this reign. It may be a name or a style. The inscriptions do not say which.',
      },
    ],
    sons: [{ name: 'Rajendra I', nameTamil: 'முதலாம் இராஜேந்திரன்', kingId: 'rajendra-i' }],
    daughters: [
      {
        name: 'Kundavai, the younger',
        nameTamil: 'குந்தவை',
        note: 'Married the Eastern Chalukya king Vimaladitya. She is not the elder Kundavai, Rajaraja’s sister.',
      },
    ],
    familyNote:
      'These are names the inscriptions use, chiefly the queens’ gifts in the Thanjavur temple and a few records outside it. A title can be a separate queen or a second name of someone already listed. The elder Kundavai, his sister, was a patron and adviser. She is not a wife. The novel Ponniyin Selvan is not a source for this list.',
    summary:
      'Rajaraja I, born Arulmozhivarman, is the king who made the later Cholas an empire. Crowned about 985, he spent the reign taking apart the limits his grandfather had lost. The meikeerthi credits him with Kandalur Salai, with Vengi and the Karnataka districts, with Kollam and Kalinga, with northern Sri Lanka, with the Chalukya country of Irattapadi, and with islands in the western sea. Some of those lines record rule. Some record a raid or a claim. He also built the great temple at Thanjavur, Rajarajeshvaram, and left a government that wrote its business on stone. His son Rajendra was anointed beside him before the reign ended.',
    meikeerthi: {
      tamil:
        'திருமகள் போலப் பெருநிலச் செல்வியும்\nதனக்கே யுரிமை பூண்டமை மனக்கொளக்\nகாந்தளூர்ச் சாலைக் கலமறுத் தருளி\nவேங்கை நாடுங் கங்க பாடியும்\nதடிகை பாடியும் நுளம்ப பாடியும்\nகுடமலை நாடுங் கொல்லமுங் கலிங்கமும்\nமுரட்டெழிற் சிங்கள ரீழ மண்டலமும்\nஇரட்ட பாடி யேழரை யிலக்கமும்\nமுந்நீர்ப் பழந்தீவு பன்னீராயிரமுந்\nதிண்டிறல் வென்றித் தண்டாற் கொண்டதன்\nனெழில்வள ரூழியு ளெல்லா யாண்டுந்\nதொழுதக விளங்கும் யாண்டே செழியரைத்\nதேசுகொள் கோராசகேசரி வர்மரான\nஉடையார் ஸ்ரீராசராச தேவர்க்கு யாண்டு',
      englishSense:
        'The prasasti says the goddess of the great earth took him as her own, as fortune had, and that he then cut down the fleet, or the establishment, at Kandalur Salai. The lines after that are a list of countries: Vengi, Gangapadi, Tadigaipadi, Nulambapadi, the hill country of Kudamalai, Kollam, Kalinga, the Sinhala realm of Ilam, the seven-and-a-half-lakh country of Irattapadi, and twelve thousand old islands in the sea. The close says the beauty of the reign grew by what his victorious army took, that every year of it shone as a year when the Pandyas bowed, and that this is Rajakesarivarman, Udaiyar Sri Rajaraja Devar. The word yandu introduces the regnal year, which is different on each stone. The list is a royal claim. It is not a map of land he governed in one block, and the meaning of “cutting the kalam” at Kandalur is still argued.',
      note: 'The prasasti as it stands once the conquest list is in place, from about the later years of the reign. The number after யாண்டு belongs to the individual stone and is not printed here. Earlier records of the same reign carry a shorter list. திண்டிறல் and எல்லா are read differently from copy to copy.',
    },
    battles: [
      {
        name: 'Kandalur Salai',
        yearLabel: 'early reign',
        outcome: 'win',
        debated: true,
        summary:
          'The meikeerthi puts this first. He destroyed the Chera naval power at Kandalur, on the Kerala coast. Whether “kalam” means ships or a feeding institution is debated. The political result is a Chola blow against the Cheras.',
      },
      {
        name: 'Pandya country and northern Sri Lanka',
        outcome: 'win',
        summary:
          'He brought the Pandya country under Chola administration and took the north of Sri Lanka. The island became a province in a way Parantaka’s raid had not.',
      },
      {
        name: 'The twelve thousand islands',
        outcome: 'win',
        summary:
          'The prasasti claims islands in the western sea, usually read as a Maldives foothold. They are named in the meikeerthi and are not drawn as a filled province on the map.',
      },
      {
        name: 'War with Satyasraya',
        outcome: 'contested',
        summary:
          'He fought the Western Chalukya Satyasraya over Irattapadi. The meikeerthi claims the country. The Chalukya kingdom continued, and the hold was not permanent.',
      },
    ],
    territoryId: 'rajaraja',
    territoryCaption:
      'Schematic settled realm: the Tamil country and northern Sri Lanka. The Maldives foothold sits west of this frame and is not drawn. Chalukya and Vengi claims in the meikeerthi are not filled in as annexed land.',
    sources: [
      ...bookSources('Rajaraja I'),
      'South Indian Inscriptions, vol. 2, the Thanjavur temple inscriptions, for the queens’ names',
    ],
  },
  {
    id: 'rajendra-i',
    name: 'Rajendra I',
    nameTamil: 'முதலாம் இராஜேந்திர சோழன்',
    epithet: 'Gangaikonda Chola',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 9,
    coronationYear: 1014,
    coronationLabel: 'c. 1014',
    coronationDebated: true,
    reignEndLabel: 'c. 1044',
    coRulerLabel: 'Co-ruler from c. 1012',
    debate:
      'He was anointed co-ruler about 1012, in his father’s lifetime. Sole rule begins about 1014. Some counts start the reign at the earlier date. This list uses the sole coronation.',
    fatherId: 'rajaraja-i',
    spouses: [
      {
        name: 'Tribhuvana Mahadevi',
        nameTamil: 'திருபுவன மாதேவி',
        note: 'Named as a queen, and in some Tamil accounts identified with a Vanavan Mahadevi. The same titles are used for a queen of his father. The records reuse royal styles. Whether the mother and the wife are one woman is left open.',
      },
      {
        name: 'Mukkokilan',
        nameTamil: 'முக்கோக்கிழான்',
        note: 'Named among his queens. Also written Mukkokilanadigal.',
      },
      {
        name: 'Panchavan Mahadevi',
        nameTamil: 'பஞ்சவன் மாதேவி',
        note: 'A queen’s title in his records. His father also had a queen of this title. They are not the same woman.',
      },
      {
        name: 'Viramahadevi',
        nameTamil: 'வீரமாதேவி',
        note: 'Named among his queens. Some accounts say she died on his funeral pyre. That story is not treated here as settled fact.',
      },
    ],
    sons: [
      { name: 'Rajadhiraja I', nameTamil: 'முதலாம் இராஜாதிராஜன்', kingId: 'rajadhiraja-i' },
      { name: 'Rajendra II', nameTamil: 'இரண்டாம் இராஜேந்திரன்', kingId: 'rajendra-ii' },
      { name: 'Virarajendra', nameTamil: 'வீரராஜேந்திரன்', kingId: 'virarajendra' },
    ],
    daughters: [
      {
        name: 'Ammangadevi',
        nameTamil: 'அம்மங்கதேவி',
        note: 'Married the Eastern Chalukya king Rajaraja Narendra. Mother of Kulottunga I.',
      },
      { name: 'Arulmoli Nangaiyar', note: 'Married a Kodumbalur chief.' },
    ],
    familyNote:
      'Compiled genealogies name seven sons. The three who later took the throne are listed. An elder son also called Rajaraja died young.',
    summary:
      'Rajendra I carried his father’s realm to its furthest military reach and gave it a new capital. Gangaikonda Cholapuram, on the Kaveri, was named for the Ganges campaign: an army marched up the east coast, defeated a string of kings including the Pala Mahipala, and brought Ganga water back for the tank of the new city. That was a raid, not a northern province. In about 1025 a fleet struck the ports of Srivijaya and the king of Kadaram. In the south he tightened the hold on the Pandyas, Kerala, and Sri Lanka. He left three sons who would rule in turn, and a daughter whose son would found the next line of the dynasty.',
    meikeerthi: {
      tamil: 'கங்கைகொண்ட சோழன்',
      englishSense:
        'This is his great title: the Chola who took the Ganges. The longer prasasti, which grows out of his father’s, also claims the expedition against Kadaram. The Ganges march brought water home for the new capital. It did not leave a Chola government on the Bengal delta. Kadaram was a naval strike, not a country ruled from the Kaveri.',
      note: 'The title is what his inscriptions make famous. The full meikeerthi is much longer and is not reconstructed here.',
    },
    battles: [
      {
        name: 'South Indian consolidation',
        outcome: 'win',
        summary: 'He finished the work of breaking Pandya and Kerala resistance and kept a firmer Chola administration in Sri Lanka.',
      },
      {
        name: 'Ganges campaign',
        yearLabel: 'c. 1022–1025',
        outcome: 'win',
        summary:
          'His army marched through Kalinga and Odisha to the Ganges, defeated rulers along the way, and brought back water. The win is the raid. On the realm map that coast is grey influence, not brown territory.',
      },
      {
        name: 'Kadaram expedition',
        yearLabel: 'c. 1025',
        outcome: 'win',
        summary:
          'A fleet crossed the Bay of Bengal and struck Srivijaya’s ports, including Kadaram. The prasasti lists the places. On the realm map those ports are grey influence, not brown territory.',
      },
      {
        name: 'War with Jayasimha II',
        outcome: 'contested',
        summary:
          'He fought the Western Chalukya Jayasimha II and raided deep into the Chalukya country. The Chalukya kingdom survived. Irattapadi was not added to the settled realm.',
      },
    ],
    territoryId: 'rajendra',
    territoryCaption:
      'The realm map shades territory in brown and influence in grey. The Ganges campaign and the Kadaram ports are the grey, not annexed provinces.',
    sources: bookSources('Rajendra I'),
  },
]
