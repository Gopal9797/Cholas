import type { Copy } from '../data/types'

export type Inscription = {
  id: string
  name: Copy
  kingIds: string[]
  records: Copy
}

export const inscriptions: Inscription[] = [
  {
    id: 'viracholapuram',
    name: { en: 'Viracholapuram hero-stone', ta: 'வீரசோழபுர நடுகல்' },
    kingIds: ['vijayalaya'],
    records: {
      en: 'A hero-stone of the third year calls him the Parakesari who took Tanjai. It is the early evidence for the Thanjavur title. It is not a long meikeerthi.',
      ta: 'மூன்றாம் ஆண்டு நடுகல் இவரைத் தஞ்சையைக் கொண்ட பரகேசரி என்கிறது. தஞ்சைப் பட்டத்துக்கான தொடக்கச் சான்று இது. நீண்ட மெய்க்கீர்த்தி அல்ல.',
    },
  },
  {
    id: 'kanyakumari',
    name: { en: 'Kanyakumari inscription', ta: 'கன்னியாகுமரிக் கல்வெட்டு' },
    kingIds: ['aditya-i'],
    records: {
      en: 'The Kanyakumari inscription calls Aditya I Kodandarama, கோதண்டராமன்.',
      ta: 'கன்னியாகுமரிக் கல்வெட்டு முதலாம் ஆதித்தனைக் கோதண்டராமன் என்று அழைக்கிறது.',
    },
  },
  {
    id: 'anbil',
    name: { en: 'Anbil plates', ta: 'அன்பில் செப்பேடுகள்' },
    kingIds: ['sundara'],
    records: {
      en: 'The Anbil copper plates of Parantaka II, also called Sundara, give an ancestral line that runs back before Vijayalaya.',
      ta: 'சுந்தரன் என்றும் அழைக்கப்படும் இரண்டாம் பராந்தகனின் அன்பில் செப்பேடுகள் விஜயாலயனுக்கு முந்தைய முன்னோர் வரிசையைத் தருகின்றன.',
    },
  },
  {
    id: 'udayarkudi',
    name: { en: 'Udayarkudi inscription', ta: 'உடையார்குடிக் கல்வெட்டு' },
    kingIds: ['aditya-ii', 'rajaraja-i'],
    records: {
      en: 'An inscription of Rajakesarivarman year 2 at the Anantheeswarar temple in Udayarkudi, published in South Indian Inscriptions and Epigraphia Indica volume 21, and read as about 988 under Rajaraja I, confiscates the lands of the men named in the killing of Aditya II: Soman, whose alias is damaged, his younger brother Ravidasan titled Panchavan Brahmadirajan, and the next brother Parameswaran titled Irumudichola Brahmadirajan. Relatives, including Malaiyanuran, lose their lands. The inscription records a confiscation. It does not name who ordered the killing, and it does not name Uttama.',
      ta: 'உடையார்குடி அனந்தீசுவரர் கோயிலில் இராஜகேசரிவர்மன் இரண்டாம் ஆண்டுக் கல்வெட்டு, தென்னிந்தியக் கல்வெட்டுகளிலும் எபிகிராபியா இண்டிகா தொகுதி 21-இலும் வெளியானது, சுமார் 988, இராஜராஜனுடன் பொருத்தப்படுகிறது. இரண்டாம் ஆதித்தன் கொலையில் பெயரிடப்பட்டவரின் நிலங்களைப் பறிமுதல் செய்கிறது: சோமன், அவரது மறுபெயர் சிதைந்துள்ளது, தம்பி இரவிதாசன் என்ற பஞ்சவன் பிரம்மாதிராஜன், அடுத்த சகோதரர் பரமேசுவரன் என்ற இருமுடிச்சோழ பிரம்மாதிராஜன். மலையனூரன் உட்பட உறவினர் நிலத்தை இழக்கின்றனர். கல்வெட்டு பறிமுதலையே சொல்கிறது. கொலையை யார் கட்டளையிட்டார் என்று சொல்லவில்லை. உத்தமன் பெயரும் இல்லை.',
    },
  },
  {
    id: 'tiruvalangadu',
    name: { en: 'Tiruvalangadu plates', ta: 'திருவாலங்காடு செப்பேடுகள்' },
    kingIds: ['rajaraja-i', 'rajendra-i', 'aditya-ii'],
    records: {
      en: 'The Sanskrit portion calls Rajaraja I Arunmolivarman. It names his son Madhurantaka, the name later joined to Rajendra I. It also calls Aditya II Karikala, the prince who took the head of Vira Pandya.',
      ta: 'சமற்கிருதப் பகுதி முதலாம் இராஜராஜனை அருண்மொழிவர்மன் என்கிறது. மகனை மதுராந்தகன் என்று பெயரிடுகிறது. அந்தப் பெயர் பின்னர் முதலாம் இராஜேந்திரனுடன் இணைகிறது. இரண்டாம் ஆதித்தனைக் கரிகாலன் என்றும், வீரபாண்டியனின் தலையைக் கொண்ட இளவரசன் என்றும் சொல்கிறது.',
    },
  },
  {
    id: 'leiden',
    name: { en: 'Leiden plates', ta: 'லைடன் செப்பேடுகள்' },
    kingIds: ['rajaraja-i', 'rajendra-i'],
    records: {
      en: 'The Anaimangalam grant. Rajaraja I gave the village to a Buddhist vihara. Rajendra I confirmed the gift. The plates are the picture on the home page.',
      ta: 'ஆனைமங்கலக் கொடை. முதலாம் இராஜராஜன் ஊரை ஒரு பௌத்த விகாரைக்குக் கொடுத்தார். முதலாம் இராஜேந்திரன் அதை உறுதி செய்தார். முகப்புப் படம் இந்தச் செப்பேடுகள்தாம்.',
    },
  },
  {
    id: 'chellur',
    name: { en: 'Chellur plates', ta: 'செல்லூர் செப்பேடுகள்' },
    kingIds: ['kulottunga-i', 'rajendra-ii'],
    records: {
      en: 'They name Ammangadevi as the mother of Kulottunga I, and Madhurantaki, daughter of Rajendra II, among his queens.',
      ta: 'குலோத்துங்கனின் தாய் அம்மங்காதேவி என்றும், இரண்டாம் இராஜேந்திரனின் மகள் மதுராந்தகி அரசிகளில் ஒருவர் என்றும் பெயரிடுகின்றன.',
    },
  },
]
