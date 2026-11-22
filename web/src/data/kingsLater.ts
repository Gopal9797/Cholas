import type { King } from './types'
import { bookSources } from './sources'

export const kingsLater: King[] = [
  {
    id: 'rajadhiraja-i',
    name: 'Rajadhiraja I',
    nameTamil: 'முதலாம் இராஜாதிராஜ சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 10,
    coronationYear: 1044,
    coronationLabel: 'c. 1044',
    reignEndLabel: '1054',
    coRulerLabel: 'Co-ruler from c. 1018',
    fatherId: 'rajendra-i',
    spouses: [],
    sons: [],
    daughters: [],
    familyNote: 'No queen or child is named in this first version. His brothers succeeded him.',
    summary:
      'Rajadhiraja I was anointed heir long before he ruled alone, about 1018, and he became sole king when Rajendra I died. He took the war into the Western Chalukya country and claimed a victor’s ceremony after entering the region of their capital, Kalyani. In 1054, at Koppam, he was killed in battle against Someshvara I. His brother Rajendra II took command on the same field and kept the army from breaking. The king died. The kingdom did not fall with him.',
    meikeerthiNote:
      'His inscriptions continue the imperial prasasti and add the Chalukya war. A separate short Tamil opening is not quoted here, so that a reconstructed poem is not passed off as the inscription.',
    battles: [
      {
        name: 'Campaign to Kalyani',
        outcome: 'win',
        summary:
          'He carried a Chola army into the Western Chalukya country and sacked the capital region of Kalyani. The raid was deep. It did not remove the Chalukya dynasty.',
      },
      {
        name: 'Battle of Koppam',
        yearLabel: '1054',
        outcome: 'loss',
        summary:
          'Someshvara I’s army killed Rajadhiraja on the field. Rajendra II rallied the Cholas and held the day. The loss is the king’s death, not the end of the war.',
      },
    ],
    territoryId: 'imperial',
    territoryCaption:
      'The settled imperial core still runs through the Tamil country and northern Sri Lanka. Chalukya raids are not filled in. Schematic.',
    sources: bookSources('Rajadhiraja I'),
  },
  {
    id: 'rajendra-ii',
    name: 'Rajendra II',
    nameTamil: 'இரண்டாம் இராஜேந்திர சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 11,
    coronationYear: 1054,
    coronationLabel: 'c. 1054',
    reignEndLabel: 'c. 1063',
    fatherId: 'rajendra-i',
    spouses: [],
    sons: [],
    daughters: [],
    familyNote:
      'The Chellur plates later name his daughter Madhurantaki as a queen of Kulottunga I. She is listed on Kulottunga’s page. No son of Rajendra II took the throne.',
    summary:
      'Rajendra II became king on the battlefield of Koppam, in the hour his elder brother was killed. He held that field against Someshvara I, and later he beat the same Chalukya king at Kudal-Sangamam. A victory pillar at Kolhapur was the monument of that second war. His reign is short and almost entirely the Chalukya struggle. When he died, another brother, Virarajendra, succeeded.',
    meikeerthiNote: 'His prasasti claims Kudal-Sangamam. The Tamil opening is not quoted separately here.',
    battles: [
      {
        name: 'Battle of Koppam',
        yearLabel: '1054',
        outcome: 'win',
        summary: 'After Rajadhiraja fell, Rajendra II took command and kept the Chola army on the field. He left Koppam as king.',
      },
      {
        name: 'Battle of Kudal-Sangamam',
        outcome: 'win',
        summary:
          'He defeated Someshvara I again at the junction of the rivers and set up a victory pillar at Kolhapur. The Chalukya state remained in place.',
      },
    ],
    territoryId: 'imperial',
    territoryCaption:
      'Same settled core as his brother’s: Tamil country and northern Sri Lanka. The Chalukya victories are campaigns, not a new filled province. Schematic.',
    sources: bookSources('Rajendra II'),
  },
  {
    id: 'virarajendra',
    name: 'Virarajendra',
    nameTamil: 'வீரராஜேந்திர சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 12,
    coronationYear: 1063,
    coronationLabel: 'c. 1063',
    reignEndLabel: 'c. 1070',
    fatherId: 'rajendra-i',
    spouses: [
      {
        name: 'Arulmolinangai',
        nameTamil: 'அருள்மொழிநங்கை',
        note: 'Named as his queen in a Thanjavur record of Kulottunga I’s reign.',
      },
    ],
    sons: [{ name: 'Adhirajendra', nameTamil: 'அதிராஜேந்திரன்', kingId: 'adhirajendra' }],
    daughters: [
      {
        name: 'A daughter',
        note: 'His own records say he gave a daughter in marriage to the Western Chalukya Vikramaditya VI. They do not give her personal name.',
      },
      {
        name: 'Rajasundari',
        nameTamil: 'ராஜசுந்தரி',
        note: 'Later accounts name her as the daughter who married an Eastern Ganga prince. Their son was Anantavarman Chodaganga. The name is not in the Vikramaditya marriage record.',
      },
    ],
    summary:
      'Virarajendra was the third son of Rajendra I to rule. He fought the Western Chalukyas again at Kudal-Sangamam and spent the reign on the Vengi and Karnataka frontier, first as a patron of Vikramaditya VI in a Chalukya family war and then as his rival. A daughter’s marriage was part of that diplomacy. He also sent a force to Sri Lanka, where Chola control had started to slip. He died about 1070. His son Adhirajendra lasted only months, and the direct line of Vijayalaya’s imperial house ends there.',
    meikeerthiNote:
      'His inscriptions carry the imperial prasasti and the claim of another Kudal-Sangamam. A fresh Tamil opening is not quoted here.',
    battles: [
      {
        name: 'Kudal-Sangamam again',
        outcome: 'win',
        summary: 'He defeated the Western Chalukyas at the same river junction his brother had made famous. The frontier war did not end.',
      },
      {
        name: 'Sri Lanka expedition',
        outcome: 'win',
        summary:
          'He sent an army to restore Chola authority on the island after it had weakened. The restoration did not outlast the next change of dynasty by many years.',
      },
    ],
    territoryId: 'imperial',
    territoryCaption: 'Imperial core, including northern Sri Lanka, in the last reign before that hold gives way. Schematic.',
    sources: bookSources('Virarajendra'),
  },
  {
    id: 'adhirajendra',
    name: 'Adhirajendra',
    nameTamil: 'அதிராஜேந்திர சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 13,
    coronationYear: 1070,
    coronationLabel: 'c. 1070',
    coronationDebated: true,
    reignEndLabel: 'c. 1070',
    debate:
      'He ruled for months in 1070 and died in a court disturbance. Whether Kulottunga I, who took the throne the same year, had a hand in that death is debated. It is not treated as established.',
    fatherId: 'virarajendra',
    spouses: [],
    sons: [],
    daughters: [],
    familyNote: 'No queen or child is named here. With him, father-to-son succession in Vijayalaya’s direct imperial line stops.',
    summary:
      'Adhirajendra, son of Virarajendra, was crowned and dead within the year 1070. The circumstances are a disturbance at court, not a famous battle. His death closed the run of kings from Vijayalaya’s direct male line. The next sovereign, Kulottunga I, was family of another kind: a grandson of Rajendra I through a daughter, and an Eastern Chalukya prince through his father. Stories that make Kulottunga the author of Adhirajendra’s death are part of the debate, not the settled record.',
    meikeerthiNote: 'No meikeerthi is quoted for a reign this short. None is composed here.',
    battles: [],
    territoryId: 'imperial',
    territoryCaption: 'The realm he inherited, drawn as the imperial core. He did not live long enough to change its shape. Schematic.',
    sources: bookSources('Athirajendra'),
  },
  {
    id: 'kulottunga-i',
    name: 'Kulottunga I',
    nameTamil: 'முதலாம் குலோத்துங்க சோழன்',
    epithet: 'Chalukya-Chola',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 14,
    birthLabel: 'c. 1025',
    birthDebated: true,
    coronationYear: 1070,
    coronationLabel: 'c. 1070',
    coronationDebated: true,
    reignEndLabel: 'c. 1122',
    debate:
      'A birth about 1025 is a scholarly estimate from plates and from Kalingattuparani, not a birth record. He took the Chola throne in 1070, the year Adhirajendra died; any role in that death is unproven. Vikrama Chola was crowned in 1118, and some counts end Kulottunga’s reign there rather than at his death about 1122.',
    spouses: [
      {
        name: 'Madhurantaki',
        nameTamil: 'மதுராந்தகி',
        note: 'Named in the Chellur plates, which call her a daughter of Rajendra II.',
      },
      {
        name: 'Thyagavalli',
        nameTamil: 'தியாகவல்லி',
        note: 'Named as a chief queen in Jayankondar’s Kalingattuparani. She may or may not be the same person as Madhurantaki.',
      },
    ],
    sons: [
      {
        name: 'Vikrama Chola',
        nameTamil: 'விக்கிரம சோழன்',
        kingId: 'vikrama',
        note: 'Successor. Other sons served as viceroys, including in Vengi, and are not given pages here.',
      },
    ],
    daughters: [],
    familyNote:
      'His mother was Ammangadevi, daughter of Rajendra I. His father was the Eastern Chalukya king Rajaraja Narendra. He is three-quarters Chola by those marriages and the heir of Vengi as well.',
    summary:
      'Kulottunga I was born Rajendra, a prince of Vengi, and took the Chola name when he was anointed in 1070. Through his mother he was the grandson of Rajendra I. Through his father he was already the Eastern Chalukya heir, so Vengi and the Chola country sat under one house. The reign is long, about half a century, and it is remembered for order, for trade, and for the Kalinga war told in Jayankondar’s Kalingattuparani. It is also the reign in which Sri Lanka was lost. Vijayabahu I took the island back around the time Kulottunga became king. In the west, Vikramaditya VI fought him for decades. Neither king swallowed the other.',
    meikeerthiNote:
      'His inscriptions praise him as the heir of both the Chola and the Vengi houses. A single canonical Tamil opening is not quoted in this version.',
    battles: [
      {
        name: 'Accession in the Chola country',
        yearLabel: '1070',
        outcome: 'win',
        summary: 'He secured the throne after Adhirajendra and held it until the 1120s. The win is political survival through a break in the direct line.',
      },
      {
        name: 'Kalinga campaign',
        outcome: 'win',
        summary: 'A campaign into Kalinga is the subject of Kalingattuparani. It is celebrated as a war. It is not drawn as a lasting province.',
      },
      {
        name: 'Loss of Sri Lanka',
        yearLabel: 'c. 1070',
        outcome: 'loss',
        summary:
          'Vijayabahu I restored a Sinhala kingdom and ended the Chola province on the island. Later realm maps leave Lanka outside the filled country.',
      },
      {
        name: 'Wars with Vikramaditya VI',
        outcome: 'contested',
        summary: 'The Western Chalukya frontier moved back and forth for decades. Vengi was the prize. Neither empire absorbed the other.',
      },
    ],
    territoryId: 'kulottunga',
    territoryCaption:
      'Tamil country plus the Vengi coast, the Chalukya-Chola inheritance. Sri Lanka is no longer filled. Schematic, not a surveyed boundary.',
    sources: bookSources('Kulottunga I'),
  },
  {
    id: 'vikrama',
    name: 'Vikrama Chola',
    nameTamil: 'விக்கிரம சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 15,
    coronationYear: 1118,
    coronationLabel: 'c. 1118',
    reignEndLabel: 'c. 1135',
    coRulerLabel: 'Co-ruler until c. 1122',
    fatherId: 'kulottunga-i',
    spouses: [],
    sons: [{ name: 'Kulottunga II', nameTamil: 'இரண்டாம் குலோத்துங்கன்', kingId: 'kulottunga-ii' }],
    daughters: [],
    familyNote: 'No queen is named in this first version.',
    summary:
      'Vikrama Chola was his father’s viceroy in Vengi before he was crowned Chola king in 1118, while Kulottunga I was still alive. He spent his own reign holding that double inheritance together. The Western Chalukyas had pressed Vengi hard; Vikrama’s work was to recover the Eastern Chalukya ground and to keep the Tamil country quiet. There is no new overseas expedition and no new island province. The reign is a consolidation between two long Kulottungas.',
    meikeerthiNote: 'His inscriptions continue the family prasasti. A distinct short opening is not quoted here.',
    battles: [
      {
        name: 'Recovery of Vengi',
        outcome: 'win',
        summary:
          'As viceroy and then as king he worked to take back Eastern Chalukya territory that Western Chalukya pressure had eaten into. The coast returns on his house’s map as inheritance, not as a raid.',
      },
    ],
    territoryId: 'kulottunga',
    territoryCaption: 'The Chalukya-Chola realm: Tamil country and Vengi. Schematic.',
    sources: bookSources('Vikrama Chola'),
  },
  {
    id: 'kulottunga-ii',
    name: 'Kulottunga II',
    nameTamil: 'இரண்டாம் குலோத்துங்க சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 16,
    coronationYear: 1133,
    coronationLabel: 'c. 1133',
    reignEndLabel: 'c. 1150',
    coRulerLabel: 'Co-ruler from c. 1133',
    fatherId: 'vikrama',
    spouses: [],
    sons: [{ name: 'Rajaraja II', nameTamil: 'இரண்டாம் இராஜராஜன்', kingId: 'rajaraja-ii' }],
    daughters: [],
    familyNote: 'No queen is named in this first version.',
    summary:
      'Kulottunga II was crowned in his father’s lifetime and ruled a kingdom that no longer measured itself in Ganges marches. The reign is famous in literature. Sekkilar’s Periyapuranam, the great Tamil book of the Shaiva saints, is usually placed here. A later Vaishnava tradition says he removed the Govindaraja image from the temple at Chidambaram. That story is debated, and it is not treated on this page as a settled public act. His son Rajaraja II succeeded him.',
    meikeerthiNote: 'No conquest meikeerthi is quoted for this reign. His public memory is the literary court, especially Sekkilar.',
    battles: [],
    territoryId: 'kulottunga',
    territoryCaption: 'The realm he inherited from Vikrama Chola, without a new campaign shape. Schematic.',
    sources: bookSources('Kulottunga II'),
  },
  {
    id: 'rajaraja-ii',
    name: 'Rajaraja II',
    nameTamil: 'இரண்டாம் இராஜராஜ சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 17,
    coronationYear: 1146,
    coronationLabel: 'c. 1146',
    reignEndLabel: 'c. 1173',
    coRulerLabel: 'Heir anointed c. 1166',
    fatherId: 'kulottunga-ii',
    spouses: [],
    sons: [],
    daughters: [],
    familyNote:
      'The Pallavarayanpettai inscription says no son was old enough to be crowned. Two small boys were moved out of the palace. Edirili Perumal, a grandson of Vikrama Chola in the usual reading, was chosen and anointed as Rajadhiraja II.',
    summary:
      'Rajaraja II built the Airavatesvara temple at Darasuram, one of the last great Chola temples. Politically the reign is the start of the Pandya problem that will unmake the dynasty. He intervened in a Pandya succession war and found Sri Lanka, under Parakramabahu, intervening too. Near the end of his life the Pallavarayanpettai record shows a court choosing an heir from outside his infant sons. That heir is Rajadhiraja II. The family tree from here is argued, and the diagram marks the next links as debated.',
    meikeerthiNote: 'A long meikeerthi is not quoted here. The reign’s monument is the temple at Darasuram.',
    battles: [
      {
        name: 'Pandya succession war',
        outcome: 'contested',
        summary:
          'He backed a Pandya claimant while a rival claimant drew help from Sri Lanka. Chola generals kept the trouble from becoming an occupation, and the war taught the Pandyas that the Chola overlord could be pulled into their quarrels.',
      },
    ],
    territoryId: 'kulottunga',
    territoryCaption:
      'Still the wide Chalukya-Chola shape on paper. The Pandya war is a crack in it, not yet a new border. Schematic.',
    sources: bookSources('Rajaraja II'),
  },
  {
    id: 'rajadhiraja-ii',
    name: 'Rajadhiraja II',
    nameTamil: 'இரண்டாம் இராஜாதிராஜ சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 18,
    coronationYear: 1166,
    coronationLabel: 'c. 1166',
    coronationDebated: true,
    reignEndLabel: 'c. 1178',
    coRulerLabel: 'Chosen heir of Rajaraja II',
    debate:
      'The Pallavarayanpettai inscription makes him Edirili Perumal, son of Neriyudaiperumal and a grandson of Vikrama Chola, chosen because Rajaraja II’s sons were infants. Another reading makes him a sister’s son and a temporary king. His successor’s reign is dated from 1178, while some records keep Rajadhiraja alive a few years longer.',
    spouses: [],
    sons: [],
    daughters: [],
    familyNote:
      'He is not drawn as the son of Rajaraja II. The line on the diagram is dashed: a chosen heir, with the exact kinship still argued. Kulottunga III, who follows, is either his younger brother or a son of Rajaraja II, depending on the reading.',
    summary:
      'Rajadhiraja II was brought from Gangaikonda Cholapuram and anointed because the ruling king had no son of age. His reign is the Pandya civil war at one remove. Chola chiefs, especially the Pallavarayar family, pushed a Sri Lankan army back off the mainland and set a Pandya on the Madurai throne. The empire he handed on was still large. It was also dependent on those chiefs. In 1178 the inscriptions of the next king begin, and the question of who that king was, in blood, is the debate on the next page.',
    meikeerthiNote: 'No separate meikeerthi opening is quoted for this reign.',
    battles: [
      {
        name: 'Defence against the Lanka alliance',
        yearLabel: 'c. 1170s',
        outcome: 'win',
        summary:
          'Chola generals drove back the force that had come from Sri Lanka in support of a Pandya claimant, and they installed their own Pandya at Madurai. The victory kept the overlordship for a few more decades.',
      },
    ],
    territoryId: 'kulottunga',
    territoryCaption:
      'The realm Kulottunga III is said to have inherited: still the Tamil country and a Vengi connection, already harder to hold. Schematic.',
    sources: bookSources('Rajadhiraja II'),
  },
  {
    id: 'kulottunga-iii',
    name: 'Kulottunga III',
    nameTamil: 'மூன்றாம் குலோத்துங்க சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 19,
    coronationYear: 1178,
    coronationLabel: 'c. 1178',
    coronationDebated: true,
    reignEndLabel: 'c. 1218',
    debate:
      'One genealogy makes him the younger brother of Rajadhiraja II, both sons of Neriyudaiperumal. Another makes him a son of Rajaraja II, placed on the throne when he came of age. The diagram does not pick a father. His own coronation year, about 1178, is the date his inscriptions use.',
    sons: [{ name: 'Rajaraja III', nameTamil: 'மூன்றாம் இராஜராஜன்', kingId: 'rajaraja-iii' }],
    spouses: [{ name: 'Bhuvanamuludaiyal', note: 'Named as his chief queen in standard genealogies.' }],
    daughters: [],
    summary:
      'Kulottunga III was the last Chola king who could still act like an overlord of the south. Early in the reign he campaigned against the Pandyas, installed a ruler at Madurai, and took a conqueror’s title for it. He also had to watch the Hoysalas and the chiefs of the Telugu country. The reign ends in the opposite direction. About 1216 Maravarman Sundara Pandya I invaded the Chola country, entered the old capitals, and left Kulottunga and his son as kings who needed terms. Hoysala help became part of Chola survival. He died about 1218, with Rajaraja III already anointed beside him.',
    meikeerthiNote:
      'He used conquest titles, including a Madurai title, after the early Pandya wars. A full Tamil meikeerthi is not quoted in this version.',
    battles: [
      {
        name: 'Early Pandya campaigns',
        yearLabel: 'c. 1190–1205',
        outcome: 'win',
        summary:
          'He defeated Pandya rivals, crowned a Pandya of his choosing, and claimed Madurai. The title outran the settlement. Madurai was not a quiet Chola province.',
      },
      {
        name: 'Invasion of Maravarman Sundara Pandya',
        yearLabel: 'c. 1216',
        outcome: 'loss',
        summary:
          'Sundara Pandya entered the Chola country and humbled the king. Chola survival after this point leans on Hoysala arms. The loss is the turn into the last two reigns.',
      },
    ],
    territoryId: 'kulottunga',
    territoryCaption:
      'The shape before the Pandya invasion of about 1216. Madurai is not filled as settled land even where his title claimed it. The next reigns use the contracted map. Schematic.',
    sources: bookSources('Kulottunga III'),
  },
  {
    id: 'rajaraja-iii',
    name: 'Rajaraja III',
    nameTamil: 'மூன்றாம் இராஜராஜ சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 20,
    coronationYear: 1216,
    coronationLabel: 'c. 1216',
    reignEndLabel: 'c. 1256',
    coRulerLabel: 'Co-ruler from c. 1216',
    fatherId: 'kulottunga-iii',
    spouses: [],
    sons: [{ name: 'Rajendra III', nameTamil: 'மூன்றாம் இராஜேந்திரன்', kingId: 'rajendra-iii' }],
    daughters: [],
    familyNote: 'No queen is named in this first version. A Hoysala marriage alliance supports him after his capture and release.',
    summary:
      'Rajaraja III was anointed while his father was still king, in the year of Sundara Pandya’s invasion. He spent the reign as a Chola king who could be defeated, captured, and restored by other people’s armies. Sundara Pandya had already shown that Madurai could dictate terms. The Kadava chief Kopperunjinga then seized Rajaraja at Sendamangalam. The Hoysala king Vira Narasimha II broke that captivity and put him back in the Kaveri country. The restoration worked, and it advertised the weakness. His son Rajendra III was crowned beside him in 1246 and spent his own life trying to reverse it.',
    meikeerthiNote: 'No conquest meikeerthi is quoted for this reign. The records are records of survival.',
    battles: [
      {
        name: 'Subordination to Sundara Pandya',
        yearLabel: 'c. 1216',
        outcome: 'loss',
        summary: 'He inherited a defeat. The Pandya king had entered the Chola country, and Rajaraja ruled in the shadow of that campaign.',
      },
      {
        name: 'Capture at Sendamangalam',
        outcome: 'loss',
        summary:
          'Kopperunjinga, the Kadava chief, imprisoned him. Vira Narasimha II of the Hoysalas freed him. The rescue saved the king and made the Hoysalas arbiters of the Chola throne.',
      },
    ],
    territoryId: 'contraction',
    territoryCaption:
      'A reduced country from the Kaveri toward Kanchipuram. Madurai, Lanka, and Vengi are outside the fill. Schematic, and already generous for a king who had been a prisoner.',
    sources: bookSources('Rajaraja III'),
  },
  {
    id: 'rajendra-iii',
    name: 'Rajendra III',
    nameTamil: 'மூன்றாம் இராஜேந்திர சோழன்',
    inCoronationList: true,
    role: 'sovereign',
    sortIndex: 21,
    coronationYear: 1246,
    coronationLabel: 'c. 1246',
    coronationDebated: true,
    reignEndLabel: 'c. 1279',
    coRulerLabel: 'Co-ruler from c. 1246',
    debate:
      'Sole power after his father is only part of the story. His last inscriptions thin out, and 1279 is the conventional end of the dynasty, not a dated abdication. Some historians stop his effective rule earlier.',
    fatherId: 'rajaraja-iii',
    spouses: [],
    sons: [],
    daughters: [],
    familyNote: 'No queen, and no son who ruled after him, is named in this version. The later Chola line ends with him.',
    summary:
      'Rajendra III is the last Chola king in this list. Crowned beside his father about 1246, he spent the early years trying to make the title mean something again: pressure on the Kadavas, pressure on the Pandyas, a brief sense that the Kaveri king could still campaign. Jatavarman Sundara Pandya I then overran the Chola country. The Pandya conquest was the end of Chola sovereignty. Rajendra’s name continues in a thinning trail of inscriptions until about 1279. No Chola successor takes the throne. The dynasty that began when Vijayalaya took Thanjavur closes here.',
    meikeerthiNote: 'No meikeerthi is quoted for the last king. The long prasasti belonged to the empire this reign no longer had.',
    battles: [
      {
        name: 'Early revival',
        yearLabel: 'late 1240s',
        outcome: 'win',
        summary:
          'He struck at Kadava and Pandya power and recovered a short freedom of action. It was a revival inside a contracted country, and it did not last.',
      },
      {
        name: 'Conquest by Jatavarman Sundara Pandya',
        yearLabel: 'c. 1250s',
        outcome: 'loss',
        summary:
          'Sundara Pandya overran the Chola country. Rajendra III remained a name in inscriptions for a while. He did not remain an independent king, and no Chola followed him.',
      },
    ],
    territoryId: 'contraction',
    territoryCaption:
      'The contracted country of the last reigns. By the end of his life even this shape had ceased to be a sovereign realm. Schematic.',
    sources: bookSources('Rajendra III'),
  },
]
