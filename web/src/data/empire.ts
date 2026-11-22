import type { Copy } from '../data/types'

export type Chapter = {
  id: string
  title: Copy
  paragraphs: Copy[]
}

export const chapters: Chapter[] = [
  {
    id: 'government',
    title: { en: 'Government and the village', ta: 'ஆட்சியும் ஊரும்' },
    paragraphs: [
      {
        en: 'The king sat at the centre, and the country was divided into large provinces called valanadu. Under them sat the nadu and the village. A Brahmin village kept a sabha. An ordinary village kept an ur. The famous Uttaramerur rules, older than this dynasty’s height, show how a sabha could choose members by lot and audit its own accounts. Rajaraja I’s reign is when the royal survey and the numbered regnal year become a habit across the Tamil country.',
        ta: 'மன்னன் நடுவில் இருந்தான். நாடு வளநாடு என்ற பெரிய பிரிவுகளாகப் பிரிந்தது. அதற்குக் கீழ் நாடும் ஊரும். பிராமண ஊருக்குச் சபை. சாதாரண ஊருக்கு ஊர். இந்த வம்சத்தின் உச்சத்துக்கு முந்தைய உத்தரமேரூர் விதிகள், சபை சீட்டுப் போட்டு உறுப்பினரைத் தேர்ந்தெடுத்துத் தன் கணக்கைத் தானே ஆய்கிற முறையைக் காட்டுகின்றன. இராஜராஜன் காலத்தில்தான் அரச அளவையும் எண்ணிடப்பட்ட ஆட்சியாண்டும் தமிழ்நாடு முழுவதும் வழக்கமாயின.',
      },
      {
        en: 'Officers carried titles that were also ranks: adhikari, senapati, and the revenue men who signed the inscription. The inscription is often the only file that survives. It records a gift, a tax remitted, or a land sold after a confiscation. It rarely records a debate inside the palace.',
        ta: 'அதிகாரிகளின் பட்டமே பதவியாகவும் இருந்தது: அதிகாரி, சேனாதிபதி, கல்வெட்டில் கையெழுத்திட்ட வரி அலுவலர். கல்வெட்டே பெரும்பாலும் எஞ்சிய கோப்பு. அது ஒரு கொடையையோ, விலக்கப்பட்ட வரியையோ, பறிமுதலுக்குப் பின் விற்கப்பட்ட நிலத்தையோ பதிவு செய்கிறது. அரண்மனைக்குள் நடந்த விவாதத்தை அரிதாகவே சொல்கிறது.',
      },
    ],
  },
  {
    id: 'military',
    title: { en: 'Army and navy', ta: 'படையும் கடற்படையும்' },
    paragraphs: [
      {
        en: 'The army was built of regiments named in the inscriptions: the elephant corps, the cavalry, and infantry bodies that carried a king’s name. Rajaraja’s Velaikkara and other named units appear as donors in temples, which is how we know they existed. A victory title on a meikeerthi is not the same thing as a province kept for a generation.',
        ta: 'கல்வெட்டுகளில் பெயரிடப்பட்ட படைப்பிரிவுகளால் படை அமைந்தது: யானைப் படை, குதிரை, மன்னன் பெயரைச் சுமந்த காலாட்படை. இராஜராஜனின் வேளைக்காரரும் பிற பெயர்ப் பிரிவுகளும் கோயில்களில் கொடையாளராக வருகின்றனர். அதனால் அவர்கள் இருந்தனர் என்று தெரிகிறது. மெய்க்கீர்த்தியின் வெற்றிப் பட்டம் ஒரு தலைமுறை வைத்திருந்த மாகாணம் அல்ல.',
      },
      {
        en: 'The navy is real in the record of Rajendra I’s Kadaram voyage and in the repeated wars with Sri Lanka. Ships carried an army across the eastern sea and brought back a captive king and his elephants. On the realm map of that reign, grey shading marks influence and a campaign, not a coastline the Cholas administered as their own.',
        ta: 'இராஜேந்திரனின் கடாரக் கப்பலும் ஈழத்துடன் மீண்டும் மீண்டும் நடந்த போரும் கடற்படையைப் பதிவில் உண்மையாக்குகின்றன. கப்பல்கள் கிழக்குக் கடலைக் கடந்து சிறை மன்னனையும் யானைகளையும் கொண்டுவந்தன. அந்த ஆட்சியின் நாட்டு வரைபடத்தில் சாம்பல் நிறம் செல்வாக்கையும் படையெடுப்பையும் குறிக்கிறது. சோழர் தங்கள் நாடாக ஆண்ட கடற்கரை அல்ல.',
      },
    ],
  },
  {
    id: 'economy',
    title: { en: 'Trade, tax, and China', ta: 'வணிகம், வரி, சீனம்' },
    paragraphs: [
      {
        en: 'The temple was also a bank. Land gifted to a god was measured, taxed, and leased back to cultivators. Merchant guilds, the Ayyavole and the Manigramam among them, moved cloth, spice, and horses. Chinese records of the Song court note embassies from the Chola country in the eleventh century. The embassy is a mission. It is not a treaty text copied here, and it does not prove a Chinese province.',
        ta: 'கோயில் ஒரு வங்கியும் ஆக இருந்தது. கடவுளுக்குக் கொடுக்கப்பட்ட நிலம் அளக்கப்பட்டு, வரி விதிக்கப்பட்டு, உழவர்களுக்கு மீண்டும் குத்தகைக்கு விடப்பட்டது. ஐந்நூற்றுவர், மணிக்கிராமம் போன்ற வணிகக் குழுக்கள் துணி, மசாலா, குதிரையை நகர்த்தின. பதினொன்றாம் நூற்றாண்டில் சோங் அரசவையின் சீனப் பதிவுகள் சோழ நாட்டிலிருந்து தூதுகளைக் குறிக்கின்றன. தூது ஒரு பயணம். இங்கே நகலெடுக்கப்பட்ட உடன்படிக்கை அல்ல. சீன மாகாணம் என்பதற்கான சான்றும் அல்ல.',
      },
    ],
  },
  {
    id: 'hospitals',
    title: { en: 'Hospitals', ta: 'மருத்துவமனைகள்' },
    paragraphs: [
      {
        en: 'A few temples set aside a hall and a grant for the sick. Temple inscriptions name a physician, a bed, or a daily measure of rice more often than they name a hospital as a royal institution.',
        ta: 'சில கோயில்கள் நோயாளருக்கு ஒரு மண்டபத்தையும் கொடையையும் ஒதுக்கின. கோயில் கல்வெட்டுகள் அரச நிறுவனமாக ஒரு மருத்துவமனையைப் பெயரிடுவதை விட, ஒரு மருத்துவரையோ, ஒரு படுக்கையையோ, நாள்தோறும் ஒரு அளவு அரிசியையோ பெயரிடுகின்றன.',
      },
    ],
  },
  {
    id: 'society',
    title: { en: 'Society', ta: 'சமூகம்' },
    paragraphs: [
      {
        en: 'Rights on land were graded. A Brahmin holding, a temple holding, and a cultivator’s share did not pay the same dues, and they did not speak with the same voice in the sabha. Women of the royal house appear as donors under their own titles, especially Sembiyan Mahadevi and Kundavai. Most women do not appear at all. A devadasi gift and a queen’s gift are both in the inscriptions. They are not the same kind of power.',
        ta: 'நில உரிமை அடுக்குகளாக இருந்தது. பிராமண உடைமை, கோயில் உடைமை, உழவன் பங்கு ஒரே வரியைச் செலுத்தவில்லை. சபையில் ஒரே குரலில் பேசவும் இல்லை. அரச குடும்பப் பெண்கள் தங்கள் பட்டங்களில் கொடையாளராக வருகின்றனர், குறிப்பாகச் செம்பியன் மாதேவியும் குந்தவையும். பெரும்பாலான பெண்கள் வரவே இல்லை. தேவதாசிக் கொடையும் அரசிக் கொடையும் கல்வெட்டுகளில் உள்ளன. ஒரே வகை அதிகாரம் அல்ல.',
      },
    ],
  },
  {
    id: 'water',
    title: { en: 'Tanks and canals', ta: 'ஏரிகளும் வாய்க்கால்களும்' },
    paragraphs: [
      {
        en: 'The Kaveri delta was already a made landscape. Kings and queens cut canals and raised tank bunds, and inscriptions name some of them: the Uyyakondan, the Rajendran vaykkal, the Sembiyan Mahadevi vaykkal, and the great tank called Cholagangam at Gangaikonda Cholapuram. A canal name is evidence of a work. It is not a map of every channel in the delta.',
        ta: 'காவிரி வடிநிலம் ஏற்கெனவே செய்யப்பட்ட நிலம். மன்னரும் அரசியும் வாய்க்கால் வெட்டி ஏரிக் கட்டு எழுப்பினர். கல்வெட்டுகள் சிலவற்றுக்குப் பெயரிடுகின்றன: உய்யக்கொண்டான், இராஜேந்திரன் வாய்க்கால், செம்பியன் மாதேவி வாய்க்கால், கங்கைகொண்ட சோழபுரத்துச் சோழகங்கம் என்ற பெரிய ஏரி. வாய்க்கால் பெயர் ஒரு பணிக்குச் சான்று. வடிநிலத்தின் எல்லாக் கால்வாய்களின் வரைபடம் அல்ல.',
      },
    ],
  },
  {
    id: 'temples',
    title: { en: 'Temples', ta: 'கோயில்கள்' },
    paragraphs: [
      {
        en: 'Four great temples still stand for four reigns. Rajaraja I built the Brihadisvara at Thanjavur. Rajendra I built the temple at Gangaikonda Cholapuram and moved a capital there. Rajaraja II built Airavatesvara at Darasuram. Kulottunga III built the Kampaharesvara at Thirubhuvanam. The vimana, the painted inner walls, and the long inscription on the Thanjavur plinth are the dynasty’s own archive.',
        ta: 'நான்கு பெரிய கோயில்கள் நான்கு ஆட்சிகளுக்கு இன்னும் நிற்கின்றன. முதலாம் இராஜராஜன் தஞ்சைப் பெருவுடையாரைக் கட்டினான். முதலாம் இராஜேந்திரன் கங்கைகொண்ட சோழபுரக் கோயிலைக் கட்டித் தலைநகரை அங்கு நகர்த்தினான். இரண்டாம் இராஜராஜன் தாராசுரத்து ஐராவதேசுவரரைக் கட்டினான். மூன்றாம் குலோத்துங்கன் திருபுவனத்துக் கம்பஹரேசுவரரைக் கட்டினான். விமானம், உட்புற ஓவியச் சுவர்கள், தஞ்சை அதிட்டானத்தின் நீண்ட கல்வெட்டு ஆகியவை வம்சத்தின் சொந்த ஆவணம்.',
      },
    ],
  },
  {
    id: 'literature',
    title: { en: 'Literature', ta: 'இலக்கியம்' },
    paragraphs: [
      {
        en: 'Gandaraditya is credited with a hymn in the Thiruvisaippa. The Kalingattuparani of Jayankondar tells Kulottunga I’s Kalinga war as a court poem, and it names a queen Thyagavalli. Sekkilar’s Periyapuranam belongs to the later twelfth century, in the circle of Kulottunga II. At Vengi, Nannaya began the Telugu Mahabharata under Rajaraja Narendra. These are works of the courts.',
        ta: 'கண்டராதித்தனுக்குத் திருவிசைப்பாவில் ஒரு பதிகம் சொந்தம் என்று சொல்லப்படுகிறது. ஜயங்கொண்டாரின் கலிங்கத்துப்பரணி முதலாம் குலோத்துங்கனின் கலிங்கப் போரை அவைக் காவியமாகச் சொல்கிறது. அரசி தியாகவல்லியைப் பெயரிடுகிறது. சேக்கிழாரின் பெரியபுராணம் பன்னிரண்டாம் நூற்றாண்டின் பிற்பகுதி, இரண்டாம் குலோத்துங்கன் வட்டம். வேங்கியில் நன்னயார் இராஜராஜ நரேந்திரன் அரவையில் தெலுங்கு மகாபாரதத்தைத் தொடங்கினார். இவை அவை நூல்கள்.',
      },
    ],
  },
  {
    id: 'religion',
    title: { en: 'Religion', ta: 'சமயம்' },
    paragraphs: [
      {
        en: 'The imperial temples are Shaiva, and the kings took the names of Shiva’s servants. They also endowed Vishnu temples, and Rajaraja I’s Leiden grant endowed a Buddhist vihara at Nagapattinam. Jain shrines continued in the Tamil country. Patronage is not the same as a single faith imposed on every village.',
        ta: 'பேரரசுக் கோயில்கள் சைவம். மன்னர் சிவனின் அடியார் பெயர்களை எடுத்தனர். விஷ்ணு கோயில்களுக்கும் கொடை அளித்தனர். முதலாம் இராஜராஜனின் லைடன் கொடை நாகப்பட்டினத்தில் ஒரு பௌத்த விகாரைக்கு அளிக்கப்பட்டது. சமணப் பள்ளிகள் தமிழ்நாட்டில் தொடர்ந்தன. அரச கொடை என்பது ஒவ்வொரு ஊரின் மீதும் ஒரே நம்பிக்கையைத் திணித்தது அல்ல.',
      },
    ],
  },
]
