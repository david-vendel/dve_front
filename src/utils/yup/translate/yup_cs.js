/* eslint-disable no-template-curly-in-string */

const mixed = {
    default: 'Položka je špatně vyplněná',
    required: 'Položka je povinná',
    oneOf: 'Musí mít jednu z následujících hodnot: ${values}',
    notOneOf: 'Nesmí mít jednu z následujících hodnot: ${values}',
    notType: 'Špatný typ',
};

const string = {
    length: 'Musí mít ${length} znaků',
    min: 'Musí mít minimálně ${min} znaků',
    max: 'Musí mít maximálně ${max} znaků',
    matches: 'Musí odpovídat následujícímu předpisu "${regex}"',
    email: 'Musí být email',
    url: 'Musí být validní URL',
    trim: 'Musí být bez býlích znaků',
    lowercase: 'Musí být malými písmeny',
    uppercase: 'Musí být velkými písmeny',
};
const number = {
    min: 'Musí být větší nebo rovno ${min}',
    max: 'Musí být menší nebo rovno ${max}',
    lessThan: 'Musí být mešní ${less}',
    moreThan: 'Musí být větší  ${more}',
    notEqual: 'Nesmí rovnat ${notEqual}',
    positive: 'Musí být kladné číslo',
    negative: 'Musí být záporné číslo',
    integer: 'Musí být celé číslo',
};

const date = {
    min: 'Musí být větší ${min}',
    max: 'Musí být menší ${max}',
};

const array = {
    min: 'Musí mít minimálně ${min} prvků',
    max: 'Musí mít maximálně ${max} prvků',
};

export const yup_locale_cs = {
    mixed: mixed,
    string: string,
    number: number,
    date: date,
    array: array,
};
