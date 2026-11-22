import type { KingImage } from './types'

export function media(file: string): string {
  return `${import.meta.env.BASE_URL}media/${file}`
}

export const CITY = {
  src: media('chola-city.jpg'),
  alt: '',
  credit:
    'Background painting made for this site. It sets the tiger flag in front of the temple towers of Thanjavur, Gangaikonda Cholapuram, Darasuram, and Thirubhuvanam. It is one imagined view, not a picture of a single city.',
}

export const TIGER = {
  src: media('chola-tiger.jpg'),
  alt: 'A stone tiger, the seal of the Chola kings.',
  credit:
    'Tiger emblem. Photograph by TNSE Sathiyakumar, 2015. Wikimedia Commons, CC BY-SA 4.0.',
}

export const LEIDEN = {
  src: media('leiden-plates.jpg'),
  alt: 'Sanskrit lines engraved on one of the Leiden copper plates of Rajaraja I.',
  caption:
    'One plate of the Leiden copper-plate grant. Rajaraja I gave the village of Anaimangalam to a Buddhist monastery at Nagapattinam, and Rajendra I confirmed the gift. The seal on the set is the Chola tiger, with the Pandya fish, the Chera bow, and a parasol.',
  credit:
    'Photograph by Sarah Welch, from the plates published in Epigraphia Indica 22. Wikimedia Commons, public domain.',
}

export const RAJARAJA_STATUE: KingImage = {
  src: media('rajaraja-statue.jpg'),
  alt: 'A modern standing statue of Rajaraja I at the Rajarajan Manimandapam in Thanjavur.',
  caption:
    'A modern statue at the Rajarajan Manimandapam, Thanjavur. No portrait made in his lifetime is known.',
  credit:
    'Photograph by dixon, 2010. Statue by Kalaimamani T. K. Chelladurai Hassan Hussain. Wikimedia Commons, CC BY 3.0.',
}
