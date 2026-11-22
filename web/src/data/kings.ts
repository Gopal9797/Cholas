import { kingsEarly } from './kingsEarly'
import { kingsLater } from './kingsLater'
import { RAJARAJA_STATUE } from './media'
import { noteTa, openingNoteTa, rajendraNoteTa, titleSenseTa, verseSenseTa } from '../i18n/senses'
import { prasastiById } from './prasasti'
import type { King, PersonRef } from './types'

const sameName = 'The inscriptions use this name. A separate birth name is not recorded in the sources used here.'

const birthById: Record<string, { name: string; nameTamil: string; note: string }> = {
  vijayalaya: { name: 'Vijayalaya', nameTamil: 'விஜயாலயன்', note: sameName },
  'aditya-i': { name: 'Aditya', nameTamil: 'ஆதித்தன்', note: sameName },
  'parantaka-i': {
    name: 'Parantaka',
    nameTamil: 'பராந்தகன்',
    note: 'The inscriptions use Parantaka. Madurai and Ilam are conquest titles, not a birth name.',
  },
  gandaraditya: { name: 'Gandaraditya', nameTamil: 'கண்டராதித்தன்', note: sameName },
  arinjaya: { name: 'Arinjaya', nameTamil: 'அரிஞ்சயன்', note: 'Also written Arinjika. A separate birth name is not recorded.' },
  sundara: {
    name: 'Sundara',
    nameTamil: 'சுந்தரன்',
    note: 'He is remembered as Sundara Chola. His regnal name is Parantaka, his grandfather’s name.',
  },
  'aditya-ii': {
    name: 'Aditya',
    nameTamil: 'ஆதித்தன்',
    note: 'Karikala is the title that recalls the early Chola king. The personal name in his records is Aditya.',
  },
  uttama: {
    name: 'Madhurantaka',
    nameTamil: 'மதுராந்தகன்',
    note: 'An inscription of Sembiyan Mahadevi calls her son Madurantakadeva alias Uttamacholadeva. Uttama is the name he ruled under.',
  },
  'rajaraja-i': {
    name: 'Arunmolivarman',
    nameTamil: 'அருண்மொழிவர்மன்',
    note: 'The Tiruvalangadu copper plates spell the Sanskrit name Arunmolivarman. Tamil memory says Arulmozhivarman, அருள்மொழிவர்மன். He took the name Rajaraja at his coronation.',
  },
  'rajendra-i': {
    name: 'Madhurantaka',
    nameTamil: 'மதுராந்தகன்',
    note: 'The Tiruvalangadu plates name Rajaraja’s son Madhurantaka, and later records say Madhurantaka alias Rajendra. He is not Uttama Chola, who had the same personal name a generation earlier.',
  },
  'rajadhiraja-i': { name: 'Rajadhiraja', nameTamil: 'இராஜாதிராஜன்', note: sameName },
  'rajendra-ii': { name: 'Rajendra', nameTamil: 'இராஜேந்திரன்', note: sameName },
  virarajendra: { name: 'Virarajendra', nameTamil: 'வீரராஜேந்திரன்', note: sameName },
  adhirajendra: { name: 'Adhirajendra', nameTamil: 'அதிராஜேந்திரன்', note: sameName },
  'kulottunga-i': {
    name: 'Rajendra',
    nameTamil: 'இராஜேந்திரன்',
    note: 'Born a prince of Vengi. Early inscriptions still call him Rajendra Chola. Kulottunga is the name of the Chola coronation.',
  },
  vikrama: { name: 'Vikrama', nameTamil: 'விக்கிரமன்', note: sameName },
  'kulottunga-ii': { name: 'Kulottunga', nameTamil: 'குலோத்துங்கன்', note: sameName },
  'rajaraja-ii': { name: 'Rajaraja', nameTamil: 'இராஜராஜன்', note: sameName },
  'rajadhiraja-ii': { name: 'Rajadhiraja', nameTamil: 'இராஜாதிராஜன்', note: sameName },
  'kulottunga-iii': { name: 'Kulottunga', nameTamil: 'குலோத்துங்கன்', note: sameName },
  'rajaraja-iii': { name: 'Rajaraja', nameTamil: 'இராஜராஜன்', note: sameName },
  'rajendra-iii': { name: 'Rajendra', nameTamil: 'இராஜேந்திரன்', note: sameName },
}

const title = (tamil: string, englishSense: string, note?: string) => ({ tamil, englishSense, note })

const titlesById: Record<string, { tamil: string; englishSense: string; note?: string }> = {
  vijayalaya: title(
    'பரகேசரிவர்மன்\nதஞ்சை கொண்ட கோப்பரகேசரிவர்மன்',
    'Parakesarivarman, and Koparakesarivarman who took Thanjavur. A hero-stone of his third year at Viracholapuram calls him the Parakesari who took Tanjai. These are titles. The long verse meikeerthi begins later, under Rajaraja I.',
  ),
  'aditya-i': title(
    'கோதண்டராமன்\nஇராஜகேசரிவர்மன்\nதொண்டைநாடு பாவிய இராஜகேசரிவர்மன்\nதொண்டைமானாற்றூர் துஞ்சின உடையார்',
    'Kodandarama is the name the Kanyakumari inscription gives him. Rajakesarivarman is the throne title, the first of that name in this line. Tondai-nadu pavina is the king who overran the Pallava country. Tondaimanarrur tunjina udaiyar, the lord who died at Tondaimanarrur, is how later records name him.',
  ),
  'parantaka-i': title(
    'பரகேசரிவர்மன்\nமதுரையும் ஈழமும் கொண்ட கோப்பரகேசரிவர்மன்\nவீர சோழன்\nஇருமுடி சோழன்',
    'Parakesarivarman is the throne title. The Madurai and Ilam line is the conquest title. Vira Chola and Irumudi Chola, the king of the two crowns, are the other names listed for him.',
  ),
  gandaraditya: title(
    'இராஜகேசரிவர்மன்',
    'Rajakesarivarman is the throne title. No conquest line is quoted for this short reign. He is remembered for a hymn in the Thiruvisaippa.',
  ),
  arinjaya: title(
    'பரகேசரிவர்மன்',
    'The throne title that follows Gandaraditya’s Rajakesari in the alternation is Parakesarivarman. A conquest title is not quoted for this one-year reign.',
  ),
  sundara: title(
    'இராஜகேசரிவர்மன்\nசுந்தர சோழன்',
    'Rajakesarivarman is the throne title. Sundara, the beautiful, is the name he is remembered by. The title of the king who took Vira Pandya’s head belongs to his son Aditya II.',
  ),
  'aditya-ii': title(
    'பரகேசரிவர்மன்\nவீரபாண்டியன் தலை கொண்ட கோப்பரகேசரிவர்மன்',
    'Parakesarivarman, and Koparakesarivarman who took the head of Vira Pandya. The line is a prince’s title. It is not evidence that he was crowned sole king.',
  ),
  uttama: title(
    'பரகேசரிவர்மன்\nமதுராந்தக தேவன்',
    'Parakesarivarman is the throne title. Madurantaka is the personal name. An inscription of his mother joins the two: Madurantakadeva alias Uttamacholadeva.',
  ),
  'rajaraja-i': title(
    'இராஜகேசரிவர்மன்\nமும்முடிச் சோழன்',
    'Rajakesarivarman is the throne title. Mummudi Chola, the king of the three crowns, is the conquest name. The verse below is the meikeerthi.',
  ),
  'rajendra-i': title(
    'பரகேசரிவர்மன்\nகங்கைகொண்ட சோழன்\nகடாரம் கொண்டான்',
    'Parakesarivarman is the throne title. Gangaikonda Chola and Kadaram konda are the conquest names. The verse below is the prasasti.',
  ),
  'rajadhiraja-i': title(
    'இராஜகேசரிவர்மன்\nஜெயங்கொண்ட சோழன்\nஆனைமேல் துஞ்சின தேவன்',
    'Rajakesarivarman is the throne title. Jayangonda Chola is the victory name. Anaimel tunjina devar, the lord who died on the elephant, is how later records name his death at Koppam.',
  ),
  'rajendra-ii': title(
    'பரகேசரிவர்மன்',
    'Parakesarivarman is the throne title. His prasasti is recognized by the Kudal-Sangamam claim. A separate short opening is not quoted here.',
  ),
  virarajendra: title(
    'இராஜகேசரிவர்மன்',
    'Rajakesarivarman is the throne title. The verse opening of the reign is below.',
  ),
  adhirajendra: title(
    'பரகேசரிவர்மன்',
    'Parakesarivarman is the throne title in the alternation. No conquest meikeerthi is quoted for a reign this short.',
  ),
  'kulottunga-i': title(
    'இராஜகேசரிவர்மன்',
    'Rajakesarivarman is the throne title he uses in the Chola country. The verse openings of the reign are below.',
  ),
  vikrama: title(
    'பரகேசரிவர்மன்',
    'Parakesarivarman is the throne title that follows his father’s Rajakesari. The verse openings are below.',
  ),
  'kulottunga-ii': title(
    'இராஜகேசரிவர்மன்',
    'Rajakesarivarman is the throne title. The verse openings are below.',
  ),
  'rajaraja-ii': title(
    'பரகேசரிவர்மன்',
    'Parakesarivarman is the throne title. The verse openings are below.',
  ),
  'rajadhiraja-ii': title(
    'இராஜகேசரிவர்மன்',
    'Rajakesarivarman is the throne title of a chosen heir. The verse openings are below.',
  ),
  'kulottunga-iii': title(
    'பரகேசரிவர்மன்',
    'Parakesarivarman is the throne title. The verse openings are below.',
  ),
  'rajaraja-iii': title(
    'இராஜகேசரிவர்மன்',
    'Rajakesarivarman is the throne title. The verse openings are below.',
  ),
  'rajendra-iii': title(
    'பரகேசரிவர்மன்',
    'Parakesarivarman is the throne title. The verse openings are below.',
  ),
}

const motherById: Record<string, PersonRef> = {
  uttama: {
    name: 'Sembiyan Mahadevi',
    nameTamil: 'செம்பியன் மாதேவி',
    note: 'An inscription calls her the queen who bore Madurantaka alias Uttama Chola.',
  },
  'aditya-ii': {
    name: 'Vanavan Mahadevi',
    nameTamil: 'வானவன் மாதேவி',
    note: 'Later lists name her as his mother as well as Rajaraja’s. Inscriptions are explicit for Rajaraja.',
  },
  'aditya-i': {
    name: 'Anaghavati',
    note: 'Named as his mother in the standard accounts of this reign.',
  },
  sundara: {
    name: 'Kalyani',
    nameTamil: 'கல்யாணி',
    note: 'Named as a Vaidumba princess and as the mother of Parantaka II. She was a queen of Arinjaya.',
  },
  'rajaraja-i': {
    name: 'Vanavan Mahadevi',
    nameTamil: 'வானவன் மாதேவி',
    note: 'Named as his mother.',
  },
  'rajendra-i': {
    name: 'Vanavan Mahadevi',
    nameTamil: 'வானவன் மாதேவி',
    note: 'A record of Rajaraja’s fourth year names her as the mother of Rajendra. Other lists give that place to Panchavan Mahadevi. Both names appear in inscriptions, and which one is left open.',
  },
  'kulottunga-i': {
    name: 'Ammangadevi',
    nameTamil: 'அம்மங்கதேவி',
    note: 'Daughter of Rajendra I. The Chellur plates name her as Kulottunga’s mother.',
  },
}

const reignEndYearById: Record<string, number> = {
  vijayalaya: 871,
  'aditya-i': 907,
  'parantaka-i': 955,
  gandaraditya: 956,
  arinjaya: 957,
  sundara: 970,
  'aditya-ii': 971,
  uttama: 985,
  'rajaraja-i': 1014,
  'rajendra-i': 1044,
  'rajadhiraja-i': 1054,
  'rajendra-ii': 1063,
  virarajendra: 1070,
  adhirajendra: 1070,
  'kulottunga-i': 1122,
  vikrama: 1135,
  'kulottunga-ii': 1150,
  'rajaraja-ii': 1173,
  'rajadhiraja-ii': 1178,
  'kulottunga-iii': 1218,
  'rajaraja-iii': 1256,
  'rajendra-iii': 1279,
}

export const kings: King[] = [...kingsEarly, ...kingsLater].map((king) => {
  const prasasti = prasastiById[king.id]
  return {
    ...king,
    reignEndYear: reignEndYearById[king.id],
    birthName: birthById[king.id]?.name,
    birthNameTamil: birthById[king.id]?.nameTamil,
    birthNameNote: birthById[king.id]?.note,
    mother: motherById[king.id],
    titles: titlesById[king.id]
      ? { ...titlesById[king.id], senseTamil: titleSenseTa[king.id] }
      : undefined,
    meikeerthiNoteTamil: noteTa[king.id],
    fatherName: king.id === 'kulottunga-i' ? 'Rajaraja Narendra' : king.fatherName,
    ...(prasasti
      ? {
          meikeerthi: {
            ...prasasti,
            senseTamil: verseSenseTa[king.id],
            noteTamil: king.id === 'rajendra-i' ? rajendraNoteTa : openingNoteTa,
          },
          meikeerthiNote: undefined,
          meikeerthiNoteTamil: undefined,
        }
      : king.meikeerthi
        ? {
            meikeerthi: {
              ...king.meikeerthi,
              senseTamil: verseSenseTa[king.id] ?? king.meikeerthi.senseTamil,
              noteTamil:
                king.id === 'rajaraja-i'
                  ? 'வெற்றிப் பட்டியல் நிறைந்த பிற்காலக் கற்களின் பிரசஸ்தி இது. யாண்டுக்கு அடுத்து வரும் எண் அந்தக் கல்லுடையது. இங்கே இல்லை. முந்தைய ஆண்டுப் பதிவுகளில் பட்டியல் குறுகியது. திண்டிறல், எல்லா ஆகிய சொற்கள் பிரதியிலிருந்து பிரதிக்கு மாறுபடும்.'
                  : king.meikeerthi.noteTamil,
            },
          }
        : {}),
    ...(king.id === 'rajaraja-i' ? { image: RAJARAJA_STATUE } : {}),
  }
})

export function kingById(id: string): King | undefined {
  return kings.find((king) => king.id === id)
}
