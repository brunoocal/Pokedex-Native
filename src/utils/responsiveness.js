export const getFixedWidth = (width) => {
    const percent = 38.8;
    return width * (percent / 100);
};

export const getFixedHeight = (height) => {
    const percent = 13.8;
    return height * (percent / 100);
};

export const getFixedMargin = (width, height) => {
    const w_percent = 1.8518;
    const h_percent = 0.8912;

    const marginVertical = height * (h_percent / 100);
    const marginHorizontal = width * (w_percent / 100);

    return {
        marginVertical: +marginVertical.toFixed(0),
        marginHorizontal: +marginHorizontal.toFixed(0),
    };
};

export const getFixedPadding = (w, h) => {
    const w_percent = 4.6296;
    const h_percent = 2.2281;

    const paddingVertical = h * (h_percent / 100);
    const paddingHorizontal = w * (w_percent / 100);

    return {
        paddingVertical: +paddingVertical.toFixed(0),
        paddingHorizontal: +paddingHorizontal.toFixed(0),
    };
};

export const getFixedHorizontalPadding = (w) => {
    const percent = 7.407;
    const value = w * (percent / 100);
    return +value.toFixed(0);
};

export const getFixedTopLeftMargin = (w, h) => {
    const { paddingVertical, paddingHorizontal } = getFixedPadding(w, h);

    return {
        marginTop: paddingVertical,
        marginLeft: paddingHorizontal,
    };
};

export const getFixedTitleSize = (w) => {
    const percent = 9.2592;
    const value = w * (percent / 100);
    return +value.toFixed(0);
};

export const getFixedSubTitleSize = (w) => {
    const percent = 4.166;
    const value = w * (percent / 100);
    return +value.toFixed(0);
};

export const getFixedSize = (w) => {
    const percent = 3.3333;
    const value = w * (percent / 100);
    return +value.toFixed(0);
};

export const getFixedSmallSize = (w) => {
    const percent = 2.5925;
    const value = w * (percent / 100);
    return +value.toFixed(0);
};

export const getFixedTypePadding = (w, h) => {
    const w_percent = 2.777;
    const h_percent = 0.2228;

    const paddingVertical = h * (h_percent / 100);
    const paddingHorizontal = w * (w_percent / 100);

    return {
        paddingVertical: +paddingVertical.toFixed(0),
        paddingHorizontal: +paddingHorizontal.toFixed(0),
    };
};
