export const fallbackLng = 'ru';
export const languages = ['en', 'ru', 'uz']; // 'uz ' ni 'uz' ga o‘zgartirdik
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,

  };
}