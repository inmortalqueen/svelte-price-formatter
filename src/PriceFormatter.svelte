<script>
    export let price = 10000;
    export let locale = "en-US";
    export let minDecimals = 2;
    export let maxDecimals = 2;

    export const LOCALES = {
        "en-CA": "CAD",
        "en-GB": "GBP",
        "en-US": "USD",
        "es-AR": "ARS",
        "es-ES": "EUR",
        "es-MX": "MXN",
        "ja-JP": "JPY",
        "pt-BR": "BRL",
        "pt-PT": "EUR",
        "zh-CN": "CNY",
        "zh-HK": "HKD",
        "zh-TW": "TWD",
    };

    let formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: LOCALES[locale],
        minimumFractionDigits: minDecimals,
        maximumFractionDigits: maxDecimals,
    });

    $: formatedMoney = formatter.format(price);
</script>

<div>
    <h3>{formatedMoney}</h3>
</div>
