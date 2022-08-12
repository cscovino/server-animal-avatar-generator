import { createBackground, createBlackout, createSvg } from './utils/svg'
import { avatarColors as aColors, backgroundColors as bColors } from './palette'
import {
  faces,
  ears as aEars,
  muzzles,
  eyes as aEyes,
  brows as aBrows,
  patterns,
  hairs,
  Brows,
  Ears,
  Eyes,
  Muzzles,
  Hairs,
  Patterns,
} from './shapes'

export type AvatarOptions = {
  size?: number;
  avatarColor?: string;
  hairColor?: string;
  backgroundColor?: string;
  blackout?: boolean;
  round?: boolean;
  pattern?: keyof Patterns;
  ears?: keyof Ears;
  hair?: keyof Hairs;
  muzzle?: keyof Muzzles;
  eyes?: keyof Eyes;
  brows?: keyof Brows;
}

const getRandomInt = (max: number) => Math.floor(Math.random() * max)

const avatar = (
  {
    size = 300,
    avatarColor = aColors[getRandomInt(aColors.length)],
    hairColor = aColors[getRandomInt(aColors.length)],
    backgroundColor = bColors[getRandomInt(bColors.length)],
    blackout = true,
    round = true,
    pattern,
    ears,
    hair,
    muzzle,
    eyes,
    brows,
  }: AvatarOptions = {},
): string => {
  const shapes = [
    faces[0],
    patterns[Patterns[pattern]] || patterns[getRandomInt(patterns.length)],
    aEars[Ears[ears]] || aEars[getRandomInt(aEars.length)],
    hairs[Hairs[hair]] || hairs[getRandomInt(hairs.length)],
    muzzles[Muzzles[muzzle]] || muzzles[getRandomInt(muzzles.length)],
    aEyes[Eyes[eyes]] || aEyes[getRandomInt(aEyes.length)],
    aBrows[Brows[brows]] || aBrows[getRandomInt(aBrows.length)],
  ]

  const createAvatar = () =>
    shapes
      .map((shape) => shape(avatarColor, hairColor))
      .join('')

  return createSvg(
    size,
    createBackground(round, backgroundColor),
    createAvatar(),
    blackout ? createBlackout(round) : '',
  )
}

export default avatar
