/* eslint-disable no-template-curly-in-string */

const mixed = {
    default: 'Položka je nesprávne vyplnená',
    required: 'Položka je povinná',
    oneOf: 'Musia mať jednu z nasledujúcich hodnôt: $ {values}',
    notOneOf: 'Nesmie mať jednu z nasledujúcich hodnôt: $ {values}',
    notType: 'Zlý typ',
};

const string = {
    length: 'Musí mať $ {length} znakov',
    min: 'Musí mať minimálne $ {min} znakov',
    max: 'Musí mať maximálne $ {max} znakov',
    matches: 'Musí zodpovedať nasledujúcemu predpisu "$ {regex}"',
    email: 'Musia byť email',
    url: 'Musí byť validná URL',
    trim: 'Musí byť bez bielych znakov',
    lowercase: 'Musí byť malými písmenami',
    uppercase: 'Musí byť velkými písmenami',
};
const number = {
    min: 'Musí byť väčšie alebo rovné ${min}',
    max: 'Musí byť menšie alebo rovné ${max}',
    lessThan: 'Musí byť menšie ${less}',
    moreThan: 'Musí byť väčšie ${more}',
    notEqual: 'Nesmie sa rovnať ${notEqual}',
    positive: 'Musí byť kladné číslo',
    negative: 'Musí byť záporné číslo',
    integer: 'Musí byť celé číslo',
};

const date = {
    min: 'Musí byť väčšie ${min}',
    max: 'Musí byť menšie ${max}',
};

const array = {
    min: 'Musí mať minimálne ${min} prvkov',
    max: 'Musí mať maximálne e{max} prvkov',
};

export const yup_locale_sk = {
    mixed: mixed,
    string: string,
    number: number,
    date: date,
    array: array,
};
