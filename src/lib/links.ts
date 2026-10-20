import { getCollection, type CollectionEntry } from 'astro:content';
import { standardSprache, type Sprache } from '../i18n/ui';

type Eintrag = CollectionEntry<'seiten'> | CollectionEntry<'news'>;

// Sprache steckt im Ordnernamen: "de/kontakt" -> "de"
export function spracheVon(eintrag: Eintrag): Sprache {
  return eintrag.id.split('/')[0] as Sprache;
}

// Pfad ohne Basis, z. B. "en/services/3d-printing"
export function seitenPfad(sprache: Sprache, pfad: string) {
  const teile = [sprache === standardSprache ? '' : sprache, pfad].filter(Boolean);
  return teile.join('/');
}

// Vollstaendiger Link inklusive Basis (wichtig fuer Vorschau-Links unter /pr-preview/pr-3/)
export function link(pfad: string) {
  const basis = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sauber = pfad.replace(/^\/|\/$/g, '');
  return sauber ? `${basis}/${sauber}/` : `${basis}/`;
}

export function linkZu(eintrag: Eintrag) {
  const sprache = spracheVon(eintrag);
  const pfad = eintrag.collection === 'news' ? `news/${eintrag.data.pfad}` : eintrag.data.pfad;
  return link(seitenPfad(sprache, pfad));
}

// Alle Sprachversionen derselben Seite (fuer Sprachumschalter und hreflang)
export async function sprachversionen(eintrag: Eintrag) {
  const alle = await getCollection(eintrag.collection);
  return alle
    .filter((e) => e.data.uebersetzung === eintrag.data.uebersetzung)
    .map((e) => ({ sprache: spracheVon(e), href: linkZu(e) }));
}
