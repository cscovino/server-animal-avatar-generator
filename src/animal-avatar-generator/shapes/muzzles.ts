import { darken } from '../utils/colors'
import { Shape } from './types'

export const muzzles: Shape[] = [
  // tongueMuzzle
  (_color) => `
    <path fill="#fff" d="M299.9 307.2c0 35-22.3 63.3-49.9 63.3s-49.9-28.3-49.9-63.3 22.4-46.7 49.9-46.7 49.9 11.8 49.9 46.7z"/>
    <path fill="#f3252f" d="M250 315l12.3 7.8c0 23-24.2 23.2-24.4.4v-.4l12.1-7.7z"/>
    <path fill="#15212a" d="M285.2 316c-.8-.3-1.6.2-1.8 1-.9 2.9-3.1 4.8-6.7 5.7A26.5 26.5 0 01254 316c-.5-.5-1-1-1.3-1.6v-7.2c15-1 26.7-11 26.7-22.9 0-12.7-13.2-11.2-29.4-11.2s-29.4-1.5-29.4 11.2c0 12 11.8 21.9 26.8 22.9v7c-.4.7-.9 1.3-1.4 1.8a26.6 26.6 0 01-22.7 6.6c-3.6-1-5.9-2.8-6.7-5.7-.2-.8-1-1.3-1.8-1-.8.2-1.3 1-1 1.8 1 4 4.1 6.6 8.7 7.8a29.9 29.9 0 0025.6-7.3c.8-.8 1.4-1.6 1.9-2.4.5.8 1.1 1.6 1.9 2.3a29.9 29.9 0 0025.6 7.4c4.6-1.2 7.6-3.9 8.8-7.8.2-.8-.3-1.6-1-1.9z"/>
  `,
  // whiteNeutralMuzzle
  (_color) => `
    <path fill="#fff" d="M324.7 343.4c0 34.5-33.4 29.8-74.7 29.8s-74.7 4.7-74.7-29.8 33.4-62.2 74.7-62.2 74.7 27.8 74.7 62.3z"/>
    <path fill="#15212a" d="M274.4 312.3c-.9 0-1.5.7-1.5 1.5 0 6-5.6 8.7-10.7 8.7-4.9 0-10.1-2.5-10.6-7.8v-14.3c13-.1 23.3-1.5 23.3-10.1 0-9-11.2-16.2-24.9-16.2s-24.9 7.2-24.9 16.2c0 8.6 10.3 10 23.3 10v14.5c-.5 5.3-5.7 7.7-10.6 7.7-5.1 0-10.6-2.7-10.6-8.7a1.5 1.5 0 10-3 0c0 3.6 1.5 6.7 4.4 8.8 2.4 1.9 5.7 2.9 9.2 2.9 4.9 0 9.8-2.1 12.2-6.1.7 1.2 1.7 2.3 3 3.2 2.4 1.8 5.7 2.8 9.2 2.8 6.8 0 13.7-4 13.7-11.6 0-.8-.7-1.5-1.5-1.5z"/>
  `,
  // bullMuzzle
  (color) => `
    <ellipse cx="250" cy="299.3" fill="${darken(
      color,
      30,
    )}" rx="39.7" ry="27.6"/>
    <path fill="${darken(
      color,
      60,
    )}" d="M229.1 315.4c-1.2 1.4-3.3 1.6-5.4.9a8.2 8.2 0 01-4.7-4.3c-1-2-.9-4 .3-5.3 1.4-1.5 3.7-1.8 5.9-.8a8.3 8.3 0 014.1 3.7c1.1 2 1.1 4.3-.2 5.8zM281 312a8.5 8.5 0 01-4.7 4.3c-2 .7-4.1.4-5.4-1-1.2-1.4-1.2-3.6-.2-5.6a8.5 8.5 0 014.2-3.8c2.2-1 4.5-.7 5.8.8 1.2 1.3 1.3 3.4.4 5.4z"/>
    <path fill="#15212a" d="M281 312a26.6 26.6 0 00-6.1-6.1c-.8.3-1.6.8-2.3 1.4-.8.7-1.4 1.5-1.9 2.4a3 3 0 001 1.5 19 19 0 014.6 5c1.3 2.2 2 4.5 2 7 0 10.2-12.7 18.6-28.3 18.6s-28.3-8.4-28.3-18.7c0-2.4.7-4.7 2-6.8a19 19 0 014.5-5.1c.6-.4 1-1 1-1.6a8.3 8.3 0 00-4-3.7c-.3 0-.6.2-.9.4-2 1.7-3.9 3.6-5.3 5.7a19.5 19.5 0 00-3.6 11.1c0 13.8 15.5 25 34.6 25s34.6-11.2 34.6-25c0-4-1.3-7.7-3.5-11z"/>
  `,
  // smallTongueMuzzle
  (_color) => `
    <ellipse cx="250" cy="315" fill="#fff" rx="73.7" ry="48.3"/>
    <path fill="#15212a" d="M270 272a20 20 0 01-40.1 0c0-11.1 9-13.7 20-13.7 11.2 0 20.2 2.6 20.2 13.7z"/>
    <path fill="#f3252f" d="M240.2 306c0 21.3 19.6 21.3 19.6 0l-7.3-3.6-3.4-3.5-3.3 6-5.6 1.1z"/>
    <path fill="#15212a" d="M270.2 292c-.8-.1-1.5.5-1.6 1.3-.3 5-2.4 8.7-5.6 10.2a7.3 7.3 0 01-7.3-.5c-2.6-1.7-4-4.8-4.2-8.7v-1-1.1c0-.8-.6-1.6-1.4-1.6h-.1-.1c-.9 0-1.5.8-1.4 1.6v2.1c-.2 3.9-1.7 7-4.2 8.7a7.3 7.3 0 01-7.4.5c-3.2-1.5-5.2-5.3-5.5-10.2-.1-.8-.8-1.4-1.6-1.4-.9 0-1.5.8-1.4 1.6.4 6 3 10.7 7.2 12.7a10.4 10.4 0 0010.3-.7c1.8-1.1 3.1-2.8 4-4.8 1 2 2.3 3.7 4 4.8a10.3 10.3 0 0010.4.7c4.2-2 6.9-6.7 7.3-12.7 0-.8-.6-1.5-1.4-1.6z"/>
  `,
  // smallSmileyMuzzle
  (_color) => `
    <path fill="#15212a" d="M278.3 286.2a2 2 0 00-2 2c0 9.5-12.2 14.6-24.6 15V290h-3.4v13.2c-12.5-.4-24.6-5.5-24.6-15 0-1-.8-2-2-2s-2 1-2 2c0 6 3.5 11.1 10 14.6a44 44 0 0020.3 4.5c14.6 0 30.3-6 30.3-19 0-1.2-1-2-2-2z"/>
    <path fill="#15212a" d="M272.4 275c0-6.4-10.1-11.6-22.5-11.6s-22.5 5.2-22.5 11.5c0 2 1.1 4 3 5.7 1 .8 2 1.7 3.2 2.4l8.7 5.8a13.5 13.5 0 0015.2 0l9.7-6.6 1-.7c2.7-1.9 4.2-4.1 4.2-6.6z"/>
  `,
  // smileyWhiteMuzzle
  (_color) => `
    <path fill="#fff" d="M250 258.3c-33 0-59.9 19.1-59.9 42.7 0 7.6 2.8 14.7 7.7 20.9a53 53 0 007.5 7.4c4.7 3.4 9.5 5 14.2 5 15.2 0 29-15.6 30.5-33.3 2 23.3 25.1 42.7 44.7 28.3 2.6-2.1 5-4.4 7-6.9l.5-.5a33.5 33.5 0 007.6-21c0-23.5-26.8-42.6-59.8-42.6z"/>
    <path fill="#15212a" d="M282.5 299.6c-.8 0-1.5.7-1.5 1.5 0 2-1.1 3.5-3.4 4.8-5.8 3.3-17 3.3-22.7 0-2.3-1.4-3.4-3-3.4-5v-.1l.4-.4 13.8-10.8c2.3-1.8 1-5.6-2-5.6h-27.4c-3 0-4.3 3.8-2 5.6l13.8 10.8.4.3v.2c0 2-1.1 3.6-3.4 5-5.7 3.3-17 3.3-22.7 0-2.3-1.3-3.4-2.9-3.4-4.8 0-.8-.7-1.5-1.5-1.5-.9 0-1.5.7-1.5 1.5 0 3 1.7 5.6 5 7.5 3.2 1.9 8 2.8 12.6 2.8 4.8 0 9.6-1 13-3 1.5-.8 2.6-1.8 3.4-3 .8 1.2 2 2.2 3.4 3 3.4 2 8.2 3 13 3 4.7 0 9.4-1 12.7-2.8 3.2-1.9 5-4.5 5-7.5 0-.8-.7-1.5-1.6-1.5z"/>
  `,
  // worriedMuzzle
  (_color) => `
    <path fill="#15212a" d="M288.6 308.7a2.8 2.8 0 00-3.5-1.4l-18.5 7c0-.2-.1-.3-.3-.3-6.6-3.8-11.5-11.6-14.8-23.8 9.6 0 17 .7 17-9a18.5 18.5 0 10-37 0c0 9.7 7.5 9 17 9v.3c3.3 12.3 8 20.5 14.7 25-12 4.5-21.4 8.3-19 8.5 0 0 30.7-5.2 39.8-8.7 5.4-2.1 5.4-4.8 4.6-6.6z"/>
  `,
  // boarMuzzle
  (color) => `
    <path fill="#fff" d="M250 328v25.9c-8.2.6-16.5 1-25 .4a89 89 0 01-14.1-2c-4.8-1-9.5-2.6-14.1-5a34.6 34.6 0 01-18.4-23.7c-1-4.7-1.2-9.4-1-13.9.3-4.5 1-8.8 2-13a2.7 2.7 0 015.3.6c-.2 8.2.6 16.5 3.6 23.2 1.5 3.3 3.5 6.1 6 8.2 2.5 2 5.3 3.5 8.6 4.4 6.5 1.8 14 1.7 21.6.6 7.6-1 15.3-3 23-5.3.8-.2 1.7-.4 2.5-.4z"/>
    <path fill="#fff" d="M250 328v25.9c8.2.6 16.5 1 25 .4a89 89 0 0014.1-2c4.8-1 9.6-2.6 14.1-5a34.6 34.6 0 0018.4-23.7c1-4.7 1.2-9.4 1-13.9-.3-4.5-1-8.8-2-13a2.7 2.7 0 00-5.3.6c.2 8.2-.6 16.5-3.6 23.2a22.8 22.8 0 01-6 8.2c-2.5 2-5.3 3.5-8.6 4.4-6.5 1.8-14 1.7-21.6.6-7.6-1-15.3-3-23-5.3-.8-.2-1.7-.4-2.5-.4z"/>
    <path fill="${darken(
      color,
      30,
    )}" d="M292.8 330.6c0 1.2 0 2.3-.2 3.4-2.2 16.6-20.4 24.4-42.6 24.4-22 0-40.3-7.7-42.6-24.2a25.2 25.2 0 01-.2-3.6v-2c1.4-17.2 20-44.2 42.8-44.2 22.9 0 41.6 27.2 42.8 44.5v1.7z"/>
    <circle fill="#15212a" cx="270.6" cy="335.6" r="8.1"/>
    <circle fill="#15212a" cx="229.4" cy="335.6" r="8.1"/>
  `,
  // hippoMuzzle
  (color) => `
    <path fill="#fff" d="M210.3 362L193 359a3.2 3.2 0 01-2.6-3.4l1.1-18c.1-1.9 2-3.3 3.8-3l22 4c2 .4 3.2 2.5 2.5 4.3l-6 17.1c-.4 1.5-2 2.4-3.6 2.1zM289.8 362L307 359a3.2 3.2 0 002.6-3.4l-1.1-18c-.1-1.9-2-3.3-3.8-3l-22 4c-2 .4-3.2 2.5-2.5 4.3l6 17.1c.4 1.5 2 2.4 3.6 2.1z"/>
    <path fill="${darken(
      color,
      30,
    )}" d="M275.7 273.1c-9.4 0-18.2-1.5-25.7 2-7.5-3.5-16.3-2-25.7-2-27.9 0-50.5 17.4-50.5 39 0 21.4 22.6 38.8 50.5 38.8 9.4 0 18.2-6.8 25.7-10.2 7.5 3.4 16.3 10.2 25.7 10.2 27.9 0 50.5-17.4 50.5-38.9s-22.6-38.9-50.5-38.9z"/>
    <path fill="#15212a" d="M219.9 307.1c-.9 0-1.7 0-2.6-.2a4 4 0 01.5-8h2.1c2.6 0 4.6-1 5.5-5.8a4 4 0 014.7-3.2 4 4 0 013.2 4.7c-1.5 8-6.3 12.5-13.4 12.5zM281.1 307.1c.9 0 1.7 0 2.6-.2a4 4 0 00-.5-8h-2.1c-2.6 0-4.6-1-5.5-5.8a4 4 0 00-4.7-3.2 4 4 0 00-3.2 4.7c1.5 8 6.3 12.5 13.4 12.5z"/>
  `,
  // sideSmileyMuzzle
  (_color) => `
    <path fill="#15212a" d="M286 305.4c3-.6 5.7-.6 8.2-.1-5 17.3-18.5 26.5-42 28.8V318c0-8.2 4.9-15.7 12.5-18.6 10-3.8 16.6-11.6 17.3-21.3.5-7.8-5.3-14.8-13.2-15a13.5 13.5 0 00-13.6 11.1c-2.6 1-7.8 1-10.4 0a13.5 13.5 0 00-13.7-11.1c-7.6.2-13.5 7-13 14.6.3 8.1 4.8 15.2 12.5 19.5 1.3.8 2.8 1.5 4.3 2.1a20 20 0 0112.9 18.7v20.4c27.7-1.6 44.5-12 50.3-32 2.3 1 4.5 2.5 6.6 4.6-4-8.2-10.4-9.4-18.7-5.6z"/>
  `,
  // catMuzzle
  (_color) => `
    <path fill="#15212a" d="M249.8 294.6s-16.6-.3-16.6 4.9 11.6 18.9 16.6 18.9 16.7-14 16.7-18.9c0-5-16.7-5-16.7-5z"/>
    <path fill="#15212a" d="M296.2 323l-.1.4a24 24 0 01-3.5 7.6 21.3 21.3 0 01-6 5.6 25 25 0 01-30.3-3.2c-1.8-2-3.1-4.4-3.8-7-.8-2.5-.9-5.2-.6-7.8l.2-1.5-1.5-.2v-.2l-.8.1h-.7v.1l-1.5.2.1 1.5c.4 2.6.3 5.3-.5 7.9-.7 2.5-2 5-3.8 6.9a25 25 0 01-30.3 3.3 21.2 21.2 0 01-6-5.7 24 24 0 01-3.5-7.6l-.1-.5-1 .3.2.4a25 25 0 003.4 8c1.6 2.5 3.7 4.6 6.2 6.3 4.9 3.3 11 4.7 16.8 4.3a25 25 0 0016.1-7.1c2.1-2.2 3.7-4.9 4.6-7.8 1 3 2.6 5.6 4.7 7.8a25 25 0 0016 7c6 .5 12-1 17-4.2a22.6 22.6 0 009.5-14.3l.1-.5-.9-.2z"/>
    <path fill="#15212a" d="M148.9 311.9l.2-2 50.2 6.4-.2 2zM149.9 332.7l49.1-6.2.2 2-49 6.1zM160 357.1l40-21.8.9 1.8-40 21.8zM304.2 316.3l50.2-6.4.2 2-50.2 6.4zM304.2 328.5l.3-2 49 6.2-.2 2zM302.5 337l1-1.7 39.9 21.8-1 1.8z"/>
  `,
  // neutralMuzzle
  (_color) => `
    <path fill="#15212a" d="M250 278.7c-15.5 0-21.2 4.1-21.2 12.9 0 8.7 21.2 21.8 21.2 21.8s21.2-12.5 21.2-21.8-5.7-12.9-21.2-12.9z"/>
    <path fill="#15212a" d="M319.2 321c-.4-.9-1.4-1.3-2.4-1-21 9-42.8 13.5-65 13.5v-25.8a1.8 1.8 0 10-3.6 0v25.8c-21.3-.4-43-5-65.1-13.4-1-.4-2 0-2.3 1-.4.9 0 2 1 2.3a193.4 193.4 0 0068.7 13.7h1c22.8 0 45.1-4.6 66.7-13.7 1-.4 1.4-1.5 1-2.4z"/>
  `,
  // sealMuzzle
  (_color) => `
    <path fill="#15212a" d="M277.6 291.26c0 9.56-12.36 21.7-27.6 21.7s-27.6-12.14-27.6-21.7 12.36-14.83 27.6-14.83 27.6 5.28 27.6 14.83zM219.24 307.93c-4.98-1.74-10.12-3-15.35-3.67a69.16 69.16 0 0 0-15.82-.22c-10.56 1.04-20.83 4.51-30.4 9.27l-.35-.68c9.45-5.11 19.73-9.01 30.53-10.46 5.39-.73 10.87-.85 16.3-.34 5.44.51 10.81 1.63 16.03 3.25l-.94 2.85zM219.98 312.52c-9.35 1.47-18.46 4.57-26.91 8.99-8.47 4.42-16.28 10.1-23.44 16.51l-.36-.39c6.9-6.73 14.53-12.8 22.95-17.67 8.4-4.87 17.62-8.46 27.23-10.4l.53 2.96zM222.41 318.16a45.94 45.94 0 0 0-10.58 6.51c-3.22 2.65-6.07 5.75-8.52 9.17-4.91 6.84-8.2 14.81-10.48 23.01l-.64-.16c1.92-8.34 4.86-16.58 9.61-23.88 2.37-3.64 5.19-7.02 8.45-9.96 3.25-2.94 6.93-5.43 10.87-7.4l1.29 2.71zM232.69 317.9c-6.32 5.69-11.5 12.7-14.8 20.62-3.35 7.91-4.8 16.59-4.95 25.25h-.47c-.27-8.71.76-17.58 3.8-25.89 1.51-4.15 3.5-8.14 5.93-11.86 2.42-3.72 5.27-7.17 8.42-10.31l2.07 2.19z"/>
    <path fill="#15212a" d="M280.76 307.93c4.98-1.74 10.12-3 15.35-3.67a69.16 69.16 0 0 1 15.82-.22c10.56 1.04 20.83 4.51 30.4 9.27l.35-.68c-9.45-5.11-19.73-9.01-30.53-10.46-5.39-.73-10.87-.85-16.3-.34-5.44.51-10.81 1.63-16.03 3.25l.94 2.85zM280.02 312.52c9.35 1.47 18.46 4.57 26.91 8.99 8.47 4.42 16.28 10.1 23.44 16.51l.36-.39c-6.9-6.73-14.53-12.8-22.95-17.67-8.4-4.87-17.62-8.46-27.23-10.4l-.53 2.96zM277.59 318.16a45.94 45.94 0 0 1 10.58 6.51c3.22 2.65 6.07 5.75 8.52 9.17 4.91 6.84 8.2 14.81 10.48 23.01l.64-.16c-1.92-8.34-4.86-16.58-9.61-23.88-2.37-3.64-5.19-7.02-8.45-9.96a48.654 48.654 0 0 0-10.87-7.4l-1.29 2.71zM267.31 317.9c6.32 5.69 11.5 12.7 14.8 20.62 3.35 7.91 4.8 16.59 4.95 25.25h.47c.27-8.71-.76-17.58-3.8-25.89-1.51-4.15-3.5-8.14-5.93-11.86-2.42-3.72-5.27-7.17-8.42-10.31l-2.07 2.19z"/>
  `,
  // smileyMuzzle
  (_color) => `
    <path fill="#15212a" d="M249.23 293.56c-24.54-7.26-40.9-32.68 1.34-33.81 40.65 1.14 25.14 26.93 1.34 33.82-.87.25-1.81.24-2.68-.01z"/>
    <path fill="#15212a" d="M288.25 294.99c-7.94 7.07-15.74 12.03-23.51 14.78a42.65 42.65 0 0 1-15.01 2.74 41.63 41.63 0 0 1-14.75-2.68c-7.73-2.74-15.47-7.7-23.24-14.88a1.62 1.62 0 0 1-.1-2.31 1.67 1.67 0 0 1 2.35-.1c7.78 7.15 15.41 12.03 23.02 14.58 1.19.4 2.37.74 3.56 1.03a38.47 38.47 0 0 0 18.35 0c1.15-.28 2.3-.6 3.46-.99 7.74-2.54 15.59-7.43 23.65-14.65a1.7 1.7 0 0 1 2.35.13c.59.69.56 1.75-.13 2.35z"/>
  `,
  // horseMuzzle
  (color) => `
    <path fill="${darken(
      color,
      30,
    )}" d="M316.5 341.28c-6.67 6.12-14.33 9.99-21.58 11.43l-.36.24-1.63 1.01c-11.86 7.12-26.8 11.37-43.04 11.37-16.53 0-31.7-4.4-43.66-11.75-.51-.31-1.02-.63-1.51-.96l-.34-.23c-7.05-1.54-14.43-5.36-20.88-11.29-14.57-13.4-18.84-32.48-9.52-42.63a19.02 19.02 0 0 1 10.68-5.72h.01c9.45-1.01 20.45 3.37 32.59 11.61-11.89-11.69-21.25-15.66-29.64-16.7 11.51-17.41 35.06-29.35 62.28-29.35 27.32 0 50.95 12.03 62.42 29.55-8.37 1.04-17.72 5.04-29.57 16.68 12.13-8.23 23.14-12.61 32.58-11.61h.02c4.19.8 7.9 2.68 10.68 5.72 9.31 10.14 5.05 29.22-9.53 42.63z"/>
    <path fill="#15212a" d="M194.37 301.88s18.83 13.68 21.26 20.7c1.87 5.39 2.8 12.87-4.48 16.23-7.27 3.36-12.72 1.91-16.79-3.36-4.11-5.33-10.83-42.37.01-33.57zM305.64 302.06s-18.68 13.37-21.26 20.7c-1.9 5.38-2.8 12.87 4.48 16.23 7.27 3.36 12.05 1.62 16.79-3.36 4.63-4.87 10.82-42.37-.01-33.57zM294.92 352.71l-1.99 1.25c-16.29 3.18-26.04.33-34.81-2.98-5.06-1.92-10.71-1.47-16-.38-9.85 2.02-18.62 5.91-35.88 2.98a73.1 73.1 0 0 1-1.86-1.19c6.3.59 16.16 1.36 21.54 0 8.52-2.16 12.2-7.52 23.98-7.52 11.77 0 11.05 4.08 20.29 7.52 6.02 2.23 17.63 1.16 24.73.32z"/>
  `,
  // monkeyMuzzle
  (color) => `
    <path fill="${darken(
      color,
      30,
    )}" d="M305.2 329c0 25-24.7 45.2-55.2 45.2S194.8 354 194.8 329c0-14 7.7-26.5 20-34.8 3.6 4.6 9 7.5 14.6 10.4-8.2-6.1-12-11.5-13.6-16.5-.4-1.4-.7-2.7-.9-4.1-1.3-9.8 2.1-18.6 9.4-21.9 8.4-3.8 19.3 1.4 25.7 11.8 6.4-10.4 17.3-15.6 25.7-11.8 8.4 3.8 11.6 15 8.4 26.4v.2c-1.7 4.8-5.6 10-13.5 16 5.6-3 11-6 14.7-10.5a42.5 42.5 0 0 1 20 34.8z"/>
    <path fill="#15212a" d="M243.2 294.8c8-3.7 5-17-2.1-20.8-7.1-3.9-16.9 3-15.5 8.2s12.8 14.8 17.6 12.6zM256.8 294.8c-8-3.7-5-17 2.1-20.8 7.2-3.9 16.9 3 15.5 8.2-1.4 5.2-12.8 14.8-17.6 12.6z"/>
    <path fill="#15212a" d="M294.2 338.9l-.5-.1c-28.5-9.9-57-9.7-84.9 0-.6.1-1 .3-1.4-.3-.3-.6 0-1.1.5-1.4 11.3-5.8 25.7-5.8 35.8-9.3a18 18 0 0 1 11.8-.1c9.8 3.3 26.8 3.5 39 9.5.5.3 1 .8.7 1.4-.2.4-.6.3-1 .3z"/>
  `,
]
