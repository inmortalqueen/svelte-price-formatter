<script>
    import { formatter } from "./config.js";

    let className = "";
    let idName = "";

    export let price = 10000;
    export let locale = "en-US";
    export let minDecimals = 2;
    export let maxDecimals = 2;

    export let style = "";
    export { className as class };
    export { idName as id };

    let f = formatter(locale, minDecimals, maxDecimals);

    $: formatedMoney = f.format(price);
</script>

<h3 class={className} id={idName} style="{style};">{formatedMoney}</h3>
