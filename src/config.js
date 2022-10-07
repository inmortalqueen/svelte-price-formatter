export function formatter(locale, minDecimals, maxDecimals) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: LOCALES[locale].currency,
        minimumFractionDigits: minDecimals,
        maximumFractionDigits: maxDecimals,
    });
}

export const LOCALES = {
    "en-CA": {
        currency: "CAD",
        decimal: ".",
        separator: ",",
        symbol: "$"
    },
    "en-GB": {
        currency: "GBP",
        decimal: ".",
        separator: ",",
        symbol: "£"
    },
    "en-US": {
        currency: "USD",
        decimal: ".",
        separator: ",",
        symbol: "$"
    },
    "es-AR": {
        currency: "ARS",
        decimal: ",",
        separator: ".",
        symbol: "$ "
    },
    "es-ES": {
        currency: "EUR",
        decimal: ",",
        separator: ".",
        symbol: " €"
    },
    "es-MX": {
        currency: "MXN",
        decimal: ".",
        separator: ",",
        symbol: "$"
    },
    "ja-JP": {
        currency: "JPY",
        decimal: ".",
        separator: ",",
        symbol: "￥"
    },
    "pt-BR": {
        currency: "BRL",
        decimal: ",",
        separator: ".",
        symbol: "R$ "
    },
    "pt-PT": {
        currency: "EUR",
        decimal: ",",
        separator: " ",
        symbol: " €"
    },
    "zh-CN": {
        currency: "CNY",
        decimal: ".",
        separator: ",",
        symbol: "¥"
    },
    "zh-HK": {
        currency: "HKD",
        decimal: ".",
        separator: ",",
        symbol: "HK$"
    },
    "zh-TW": {
        currency: "TWD",
        decimal: ".",
        separator: ",",
        symbol: "$"
    },
};