import type { Copy } from '../data/types'

export type CourtPerson = {
  id: string
  name: string
  nameTamil: string
  role: Copy
  about: Copy
  kingIds: string[]
}

export const people: CourtPerson[] = [
  {
    id: 'sembiyan',
    name: 'Sembiyan Mahadevi',
    nameTamil: 'செம்பியன் மாதேவி',
    role: { en: 'Queen, mother of Uttama', ta: 'அரசி, உத்தமனின் தாய்' },
    about: {
      en: 'An inscription calls her the queen who bore Madurantaka alias Uttama Chola. She is remembered as a great temple builder.',
      ta: 'ஒரு கல்வெட்டு இவரை மதுராந்தகன் என்ற உத்தம சோழனைப் பெற்ற அரசி என்கிறது. பெரிய கோயில் எடுத்துக்காட்டியவராக நினைவு கூரப்படுகிறார்.',
    },
    kingIds: ['gandaraditya', 'uttama'],
  },
  {
    id: 'kalyani',
    name: 'Kalyani',
    nameTamil: 'கல்யாணி',
    role: { en: 'Queen of Arinjaya, mother of Sundara', ta: 'அரிஞ்சயனின் அரசி, சுந்தரனின் தாய்' },
    about: {
      en: 'A Vaidumba princess, queen of Arinjaya, and mother of Sundara Chola.',
      ta: 'வைதும்ப இளவரசி, அரிஞ்சயனின் அரசி, சுந்தர சோழனின் தாய்.',
    },
    kingIds: ['arinjaya', 'sundara'],
  },
  {
    id: 'vanavan',
    name: 'Vanavan Mahadevi',
    nameTamil: 'வானவன் மாதேவி',
    role: { en: 'Queen of Sundara', ta: 'சுந்தரனின் அரசி' },
    about: {
      en: 'Inscriptions name her as the mother of Rajaraja I. Later lists also call her the mother of Aditya II. That second claim is not as explicit in the inscriptions.',
      ta: 'கல்வெட்டுகள் இவரை முதலாம் இராஜராஜனின் தாய் என்கின்றன. பிற்காலப் பட்டியல்கள் இரண்டாம் ஆதித்தனின் தாயாகவும் சொல்கின்றன. இரண்டாவது கூற்று கல்வெட்டுகளில் அவ்வளவு தெளிவாக இல்லை.',
    },
    kingIds: ['sundara', 'rajaraja-i', 'aditya-ii'],
  },
  {
    id: 'kokkilan',
    name: 'Kokkilanadigal',
    nameTamil: 'கோக்கிழானடிகள்',
    role: { en: 'Chera princess, queen of Parantaka I', ta: 'சேர இளவரசி, முதலாம் பராந்தகனின் அரசி' },
    about: {
      en: 'An inscription of his 28th year names her a queen and the mother of Rajaditya. Other queens are named. A mother is secure only for Rajaditya.',
      ta: 'இருபத்தெட்டாம் ஆண்டுக் கல்வெட்டு இவரை அரசியாகவும் இராஜாதித்தனின் தாயாகவும் பெயரிடுகிறது. பிற அரசிகள் உள்ளனர். தாய் உறுதியானது இராஜாதித்தனுக்கு மட்டும்.',
    },
    kingIds: ['parantaka-i'],
  },
  {
    id: 'rajaditya',
    name: 'Rajaditya',
    nameTamil: 'இராஜாதித்தன்',
    role: { en: 'Prince, killed at Takkolam', ta: 'இளவரசன், தக்கோலத்தில் கொல்லப்பட்டவர்' },
    about: {
      en: 'Son of Parantaka I and Kokkilanadigal. Also called Kodandarama. He died in the Rashtrakuta war at Takkolam and did not take the throne.',
      ta: 'முதலாம் பராந்தகனுக்கும் கோக்கிழானடிகளுக்கும் பிறந்த மகன். கோதண்டராமன் என்றும் அழைக்கப்படுகிறார். தக்கோலத்தில் இராஷ்டிரகூடப் போரில் இறந்தார். அரியணை ஏறவில்லை.',
    },
    kingIds: ['parantaka-i'],
  },
  {
    id: 'kundavai',
    name: 'Kundavai',
    nameTamil: 'குந்தவை',
    role: { en: 'Elder sister of Rajaraja I', ta: 'முதலாம் இராஜராஜனின் அக்கா' },
    about: {
      en: 'Kundavai Pirattiyar, the elder sister, married Vallavaraiyan Vandiyadevan. She is not one of Rajaraja’s queens. A later Kundavai, daughter of Rajaraja I, married the Vengi king Vimaladitya. The two women are not the same person.',
      ta: 'மூத்த குந்தவை பிராட்டியார் வல்லவரையன் வந்தியதேவனை மணந்தார். இராஜராஜனின் மனைவி அல்ல. பின்னர் வந்த குந்தவை, இராஜராஜனின் மகள், வேங்கி மன்னன் விமலாதித்தனை மணந்தார். இருவரும் ஒரே நபர் அல்ல.',
    },
    kingIds: ['rajaraja-i'],
  },
  {
    id: 'karikala-kannan',
    name: 'Karikala Kannan',
    nameTamil: 'கரிகால கண்ணன்',
    role: { en: 'Son of Aditya II', ta: 'இரண்டாம் ஆதித்தனின் மகன்' },
    about: {
      en: 'Aditya II is given a son, Karikala Kannan, and a wife, Ilaada Madeviyar. The Udayarkudi inscription at the Anantheeswarar temple does not name either of them. He did not rule.',
      ta: 'இரண்டாம் ஆதித்தனுக்குக் கரிகால கண்ணன் என்ற மகனும் இளாட மதேவியார் என்ற மனைவியும் சொல்லப்படுகின்றனர். அனந்தீசுவரர் கோயிலின் உடையார்குடிக் கல்வெட்டு இவர்களைப் பெயரிடவில்லை. இவர் ஆளவில்லை.',
    },
    kingIds: ['aditya-ii'],
  },
  {
    id: 'ammangadevi',
    name: 'Ammangadevi',
    nameTamil: 'அம்மங்காதேவி',
    role: { en: 'Daughter of Rajendra I, mother of Kulottunga I', ta: 'முதலாம் இராஜேந்திரனின் மகள், முதலாம் குலோத்துங்கனின் தாய்' },
    about: {
      en: 'She married Rajaraja Narendra of Vengi, her cousin. The Chellur plates name her as Kulottunga’s mother. Their son took the Chola throne in 1070.',
      ta: 'வேங்கியின் இராஜராஜ நரேந்திரனை, தன் உறவினரை, மணந்தார். செல்லூர் செப்பேடுகள் இவரைக் குலோத்துங்கனின் தாய் என்கின்றன. மகன் 1070-இல் சோழ அரியணை ஏறினான்.',
    },
    kingIds: ['rajendra-i', 'kulottunga-i'],
  },
  {
    id: 'narendra',
    name: 'Rajaraja Narendra',
    nameTamil: 'இராஜராஜ நரேந்திரன்',
    role: { en: 'Eastern Chalukya of Vengi', ta: 'வேங்கியின் கீழைச் சாளுக்கியன்' },
    about: {
      en: 'Son of Vimaladitya and of Kundavai, the younger daughter of Rajaraja I. He married Ammangadevi, daughter of Rajendra I. He is Rajaraja I’s grandson and Rajendra I’s son-in-law. He ruled Vengi. He is not in the Chola coronation list.',
      ta: 'விமலாதித்தனுக்கும் இராஜராஜனின் இளைய மகள் குந்தவைக்கும் பிறந்த மகன். முதலாம் இராஜேந்திரனின் மகள் அம்மங்காதேவியை மணந்தார். இராஜராஜனின் பேரன், இராஜேந்திரனின் மருமகன். வேங்கியை ஆண்டார். சோழ முடிசூட்டுப் பட்டியலில் இல்லை.',
    },
    kingIds: ['rajaraja-i', 'rajendra-i', 'kulottunga-i'],
  },
]
