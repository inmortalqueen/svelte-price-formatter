<script>
    import { formatterPrice } from "./config.js";

    let className = "";
    let idName = "";

    export let locale = "en-US";
    export let maxDecimals = 2;
    export let minDecimals = 2;
    export let price = 10000;

    export let style = "";
    export { className as class };
    export { idName as id };

    $: formatedMoney = formatterPrice(locale, maxDecimals, minDecimals, price);
</script>

<h3 class={className} id={idName} style="{style};">{formatedMoney}</h3>
