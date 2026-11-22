import type { Meikeerthi } from './types'

const openingNote =
  'These are the opening words by which inscriptions of this reign are recognized. Each line is a separate beginning, not one poem. The full prasasti is longer. It is not copied from Pirkaala Chozhar Sarithiram, and the missing lines are not filled in here.'

function openings(tamil: string, englishSense: string): Meikeerthi {
  return { tamil, englishSense, note: openingNote }
}

const rajendraPrasasti = `திருமன்னி வளர இருநில மடந்தையும்
போர்ச்செயப் பாவையும் சீர்த்தனிச் செல்வியும்
தன்பெருந் தேவியராகி இன்புற
நெடிதியல் ஊழியுள் இடைதுறை நாடும்
தொடர்வன வேலிப் படர்வன வாசியும்
சுள்ளிச் சூழ்மதிற் கொள்ளிப்பாக்கையும்
நண்ணற் கருமுரண் மண்ணைக் கடக்கமும்
பொருகடல் ஈழத்தரசர் தம் முடியும்
ஆங்கவர் தேவியரோம் கெழின் முடியும்
முன்னவர் பக்கத்து என்னவர் வைத்த
சுந்தர முடியும் இந்திரனாரமும்
தொண்டிரை ஈழ மண்டலமும் முழுவதும்
எறிபடைக் கேரளன் முறைமையில் சூடும்
குலதனமாகிய பலர்புகழ் முடியும்
செங்கதிர் மாலையும் சங்கதிர் வேலைத்
தொல்பெருங் காவற் பல்பழந் தீவும்
செருவில் சினவி இருபத்தொருகால்
அரசுகளைக் கட்ட பரசுராமன்
மேவரும் சாந்திமத் தீவரண் கருதி
இருத்திய செம்பொன் திருத்தகு முடியும்
பயங்கொடு பழிமிக முயங்கியில் முதுகிட்டு
ஒளித்த சயசிங்கன் அளப்பரும் புகழொடு
பீடிய இரட்டபாடி ஏழரை இலக்கமும்
நவநிதிக் குலப்பெரு மலைகளும்
விக்கிரம வீரர் சக்கரக்கோட்டமும்
முதிர்பட வல்லை மதுரை மண்டலமும்
காமிடை வளைஇய நாமணைக் கோணமும்
வெஞ்சின வீரர் பஞ்சப்பள்ளியும்
பாசடைப் பழன மாசுணி தேசமும்
அயர்வில்லாண் கீர்த்தி ஆதிநகராகவையில்
சந்திரன் தொல்குலத்து இந்திரரதனை
விளையமர்க் களத்துக் கிளையொடு பிடித்து
பலதனத்தொடு நிறை குலதனக் குவையும்
கிட்டரஞ் செறிமிளை ஒட்ட விஷயமும்
பூசுரர் சேரும் நற் கோசல நாடும்
தன்மபாலனை வெம்முனையழித்து
வண்டுறை சோலைத் தண்டபுத்தியும்
இரணசூரனை முரணறத் தாக்கி
திக்கணை கீர்த்தித் தக்கணலாடமும்
கோவிந்தசந்தன் மாவிழிந்தோட
தங்காத சாரல் வங்காள தேசமும்
தொடுகழல் சங்குகொடு அடல் மகிபாலனை
வெஞ்சமர் வளாகத்து அஞ்சுவித் தருளி
ஒண்டிறல் யானையும் பெண்டிர் பண்டாரமும்
நித்தில நெடுங்கடல் உத்தரலாடமும்
வெறிமலர்த் தீர்த்தத்து எறிபுனல் கங்கையும்
அலைகடல் நடுவுள் பலகலம் செலுத்தி
சங்கிராம விசையோத்துங்கவர்மன்
ஆகிய கடாரத்தரசனை வாகையும்
பொருகடல் கும்பக் கரியொடு மகப்படுத்தும்
உரிமையில் பிறக்கிய பருநிதிப் பிறக்கமும்
ஆர்த்தவன் அகநகர்ப் போர்த்தொழில் வாசலில்
விச்சாதிரத் தோரணமும் ஒய்த்தொளிர்
புனைமணிப் புதவமும் கனமணிக் கதவமும்
நிறைசீர் விசயமும் துறைநீர்ப் பண்ணையும்
வன்மலையூர் எயிற்று ஒன்மலையூரும்
ஆழ்கடல் அகழ்சூழ் மாயிருடிங்கமும்
கலங்கா வல்வினை இலங்காசோகமும்
காப்புறு நிறைபுனல் மாப்பப்பாளமும்
காவலம் புரிசை மேவிலிம்பங்கமும்
விளைப்பந்தூருடை வளைப்பந்தூரும்
கலைத்தக்கோர் புகழ் தலைத்தக்கோலமும்
தீதமர் பல்வினை மாதமாலிங்கமும்
கலாமுதிர் கடந்திறல் இலாமுரிதேசமும்
தேனக்க வார் பொழில் மானக்கவாரமும்
தொடுகடல் காவல் கடுமுரண் கடாரமும்
மாப்பொருத் தண்டால் கொண்ட கோப்பரகேசரி வன்மரான
உடையார் ஸ்ரீராசேந்திர சோழதேவர்க்கு யாண்டு`

export const prasastiById: Record<string, Meikeerthi> = {
  'rajendra-i': {
    tamil: rajendraPrasasti,
    englishSense:
      'This is the prasasti that begins tirumanni valara. It opens with the earth and the goddess of victory as his queens, then names crowns taken in the south: Ilam, the Chera crown, and the old islands. The middle of the poem is the northern march, through Irattapadi, Sakkarakottam, Odda, Kosala, Dandabhukti, and Vangala, to the Ganges water he brought home after defeating Mahipala. The last movement sends ships across the sea, takes Sangrama Vijayottungavarman of Kadaram with his elephants, and lists the ports: Srivijaya, Pannai, Malaiyur, Mayirudingam, Ilangasoka, Mapappalam, Mevilimbangam, Valaippanduru, Takkolam, Madamalingam, Ilamuridesam, Manakkavaram, and Kadaram. The Ganges march and the Kadaram voyage are campaigns. They were not provinces he annexed.',
    note: 'The Tamil follows the inscriptional prasasti in the form that already includes Kadaram. Pandarathar notes that this meikeerthi first appears on inscriptions of the third regnal year. The opening line is given in the spelling that same account cites, திருமன்னி வளர. Later lines keep the public inscriptional reading, and a few syllables are read differently from copy to copy. This is the inscription, not a passage from his book.',
  },
  'rajadhiraja-i': openings(
    'திங்களேர் தருதன் தொங்கல்\nதிங்களேர் பெற வளர\nதிருக்கொடியோடு தியாகக்கொடி',
    'Three openings are used for Rajadhiraja I. They begin with the moon, or with the banner of sacrifice beside the royal banner. The poems that follow take up the Chalukya war, including the campaign in which he died.',
  ),
  'rajendra-ii': openings(
    'திருமகளது புவியெனும்\nதிருமகள் மருவிய செங்கோல்',
    'Two openings mark Rajendra II. One begins with the earth as the goddess’s world. The other begins with the sceptre the goddess has joined. Either one separates his inscriptions from his brother’s.',
  ),
  'virarajendra': openings(
    'திருவளர் திரள்புயத் திருநிலவளம்\nவீரமே துணையாக',
    'One opening begins with a growing earth and a strong arm. The other begins வீரமே துணையாக, heroism itself as companion. The second is the formula most often used to name his prasasti.',
  ),
  adhirajendra: openings(
    'திங்களேர் மலர்ந்து வெகுண்ட',
    'The short reign is recognized by an opening in which the moon breaks into bloom and then into anger. Little else of a stable poem is quoted here.',
  ),
  'kulottunga-i': openings(
    'திருமன்னி விளங்கு\nபுகழ்மாது விளங்கு\nபுகழ் சூழ்ந்த புணரி',
    'Three openings belong to Kulottunga I. One begins திருமன்னி விளங்கு, in the same family of formulas as Rajendra’s. Another begins with the sea of fame, புகழ் சூழ்ந்த புணரி. They are the Chalukya-Chola king’s prasastis, not a reuse of his grandfather’s poem.',
  ),
  vikrama: openings(
    'பூமாது புணர\nபூமாலை மிடைந்து',
    'Vikrama Chola’s inscriptions open with the earth as a woman, or with a garland of flowers. Those first words are the meikeerthi of this reign.',
  ),
  'kulottunga-ii': openings(
    'பூமன்னு பதுமம்\nபூமேவி வளர\nபூமேவு திருமகள்',
    'Several openings are used for Kulottunga II, and most of them begin with the earth. பூமேவி வளர is one of the usual ones. The poems are longer than these first words.',
  ),
  'rajaraja-ii': openings(
    'பூமருவிய பொழிலேழம்\nபூமருவிய திருபொழிலேழம்',
    'Rajaraja II is recognized by பூமருவிய பொழிலேழம் and a close variant that adds திரு. The temple at Darasuram belongs to these years. The poem continues past the opening.',
  ),
  'rajadhiraja-ii': openings(
    'கடல் சூழ்ந்த பாரேழம்\nகடல் சூழ்ந்த பாரமாதரும்',
    'His prasasti begins with the sea around the earth. A second opening speaks of the woman of that earth. He was a chosen heir, and the poem is still a king’s prasasti.',
  ),
  'kulottunga-iii': openings(
    'புயல் பெருக வளம் பெருக\nபுயல் வாய்த்து',
    'The openings begin with the storm. புயல் வாய்த்து is the short form by which many of his records are recognized. The early years of this reign are the last strong military phase of the dynasty.',
  ),
  'rajaraja-iii': openings(
    'சீர் மன்னி இருநான்கு திசை\nசீர் மன்னு மலர் மகளும்',
    'One opening begins with fame settled across the eight directions. Another begins with a woman of the lotus. The reign these poems introduce is the one in which the kingdom was overrun.',
  ),
  'rajendra-iii': openings(
    'பூமியும் திருவும்\nபூமருவிய திருமடந்தை',
    'The last king’s inscriptions are identified by பூமியும் திருவும் and by பூமருவிய திருமடந்தை. The formula is still the imperial one. The realm it introduces is not.',
  ),
}
