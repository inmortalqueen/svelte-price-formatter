<script>
    import { LOCALES, formatterPrice } from "./config.js";

    let className = "";
    let idName = "";

    export let inputValue = 0;
    export let limit = 1000000;
    export let locale = "en-US";
    export let maxDecimals = 2;
    export let onChange = "";
    export let placeholder = "1000";
    export let value = "";

    export let style = "";
    export { className as class };
    export { idName as id };

    let input_currency;
    let euroLocales = ["es-ES", "pt-PT"];
    let commaAsDecimal = ["es-AR", "es-ES", "pt-BR"];
    let spaceSeparator = ["pt-PT"];

    function formatNumber(n) {
        // format number 1000000 to 1,000,000
        let _n = n.replace(/\D/g, "");

        let formatted = n.includes(LOCALES[locale].decimal)
            ? _n
            : _n.replace(/\B(?=(\d{3})+(?!\d))/g, LOCALES[locale].separator);

        return formatted;
    }

    // format the placeholder
    function formatPlaceholder() {
        let formattedNumber = formatNumber(placeholder);
        let localeDecimal = maxDecimals === 0 ? "" : LOCALES[locale].decimal;
        localeDecimal = localeDecimal + "0".repeat(maxDecimals);
        formattedNumber += localeDecimal;

        if (euroLocales.includes(locale)) {
            return formattedNumber + LOCALES[locale].symbol;
        } else {
            return LOCALES[locale].symbol + formattedNumber;
        }
    }

    function formatCurrency(input, blur) {
        // appends $ to value, validates decimal side
        // and puts cursor back in right position.
        // get input value
        var input_val = input_currency.value;
        // don't validate empty input
        if (input_val === "") {
            return;
        }

        // original length
        var original_len = input_val.length;

        // initial caret position
        var caret_pos = input_currency.selectionStart;

        // check for decimal
        if (input_val.indexOf(LOCALES[locale].decimal) >= 0) {
            // get position of first decimal
            // this prevents multiple decimals from
            // being entered
            var decimal_pos = input_val.indexOf(LOCALES[locale].decimal);

            // split number by decimal point
            var left_side = input_val.substring(0, decimal_pos);
            var right_side = input_val.substring(decimal_pos);

            // add commas to left side of number
            left_side = formatNumber(left_side);

            // validate right side
            right_side = formatNumber(right_side);

            // On blur make sure 2 numbers after decimal
            if (blur === "blur") {
                right_side += "0".repeat(maxDecimals);
            }

            // Limit decimal to only 2 digits
            right_side = right_side.substring(0, maxDecimals);

            // join number by .
            let formattedCurrency =
                left_side + LOCALES[locale].decimal + right_side;

            if (euroLocales.includes(locale)) {
                input_val = formattedCurrency + LOCALES[locale].symbol;
            } else {
                input_val = LOCALES[locale].symbol + formattedCurrency;
            }
        } else {
            // no decimal entered
            // add commas to number
            // remove all non-digits
            input_val = formatNumber(input_val);
            if (euroLocales.includes(locale)) {
                input_val = input_val + LOCALES[locale].symbol;
            } else {
                input_val = LOCALES[locale].symbol + input_val;
            }

            // final formatting
            if (
                blur === "blur" &&
                !euroLocales.includes(locale) &&
                maxDecimals > 0
            ) {
                input_val += LOCALES[locale].decimal + "0".repeat(maxDecimals);
            }
        }

        // send updated string to input
        input_currency.value = input_val;

        // put caret back in the right position
        var updated_len = input_val.length;
        caret_pos = updated_len - original_len + caret_pos;
        input_currency.setSelectionRange(caret_pos, caret_pos);

        // remove the symbol of the string
        inputValue = input_currency.value.replaceAll(
            LOCALES[locale].symbol,
            ""
        );

        // prepare the string to transform it to float
        if (commaAsDecimal.includes(locale)) {
            inputValue = inputValue.replaceAll(".", "").replaceAll(",", ".");
        } else if (spaceSeparator.includes(locale)) {
            inputValue = inputValue
                .replaceAll(" ", "")
                .replaceAll(",", ".")
                .replaceAll("€", " €");
        } else {
            inputValue = inputValue.replaceAll(",", "");
        }

        // transform the string to float
        inputValue = parseFloat(inputValue);

        if (inputValue > limit) {
            input_currency.value = formatterPrice(
                locale,
                maxDecimals,
                maxDecimals,
                limit
            );
            inputValue = limit;
        }
        value = input_currency.value;

        return inputValue;
    }
</script>

<input
    class={className}
    id={idName}
    style="{style};"
    bind:this={input_currency}
    type="text"
    bind:value
    data-type="currency"
    placeholder={formatPlaceholder()}
    on:change={onChange}
    on:keyup={() => {
        formatCurrency(this);
    }}
    on:blur={() => {
        formatCurrency(this, "blur");
    }}
/>
