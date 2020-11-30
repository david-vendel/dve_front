export const parseData = (data, name) => {
    const splitName = name.split('.');

    splitName.forEach((element) => {
        if (data) {
            data = data[element];
        }
    });

    return data;
};
