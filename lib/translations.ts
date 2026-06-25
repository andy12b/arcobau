import EN_DATA from '../data/content/en.json';
import FR_DATA from '../data/content/fr.json';
import DE_DATA from '../data/content/de.json';
import RO_DATA from '../data/content/ro.json';
import IT_DATA from '../data/content/it.json';

export type LanguageCode = "EN" | "FR" | "DE" | "RO" | "IT";

export const translations = {
  EN: EN_DATA,
  FR: FR_DATA,
  DE: DE_DATA,
  RO: RO_DATA,
  IT: IT_DATA,
};
