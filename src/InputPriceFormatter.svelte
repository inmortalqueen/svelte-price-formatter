<script>
    import { LOCALES, formatter } from "./config.js";

    let className = "";
    let idName = "";

    export let locale = "en-US";
    export let inputValue = 0;
    export let limit = 1000000;
    export let placeholder = "1000";

    export let style = "";
    export { className as class };
    export { idName as id };

    let input_currency;
    let value;

    function formatNumber(n) {
        // format number 1000000 to 1,000,000
        return n
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, LOCALES[locale].separator);
    }

    // format the placeholder
    let formatPlaceholder =
        locale === "es-ES" || locale === "pt-PT"
            ? formatNumber(placeholder) +
              LOCALES[locale].decimal +
              "00" +
              LOCALES[locale].symbol
            : LOCALES[locale].symbol +
              formatNumber(placeholder) +
              LOCALES[locale].decimal +
              "00";

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
                right_side += "00";
            }

            // Limit decimal to only 2 digits
            right_side = right_side.substring(0, 2);

            // join number by .
            if (locale === "es-ES" || locale === "pt-PT") {
                input_val =
                    left_side +
                    LOCALES[locale].decimal +
                    right_side +
                    LOCALES[locale].symbol;
            } else {
                input_val =
                    LOCALES[locale].symbol +
                    left_side +
                    LOCALES[locale].decimal +
                    right_side;
            }
        } else {
            // no decimal entered
            // add commas to number
            // remove all non-digits
            input_val = formatNumber(input_val);
            if (locale === "es-ES" || locale === "pt-PT") {
                input_val = input_val + LOCALES[locale].symbol;
            } else {
                input_val = LOCALES[locale].symbol + input_val;
            }

            // final formatting
            if (blur === "blur" && locale != "es-ES" && locale != "pt-PT") {
                input_val += LOCALES[locale].decimal + "00";
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
        if (locale === "es-AR" || locale === "es-ES" || locale === "pt-BR") {
            inputValue = inputValue.replaceAll(".", "").replaceAll(",", ".");
        } else if (locale === "pt-PT") {
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
            input_currency.value = formatter(locale, 2, 2).format(limit);
            inputValue = limit;
        }

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
    placeholder={formatPlaceholder}
    on:keyup={() => {
        formatCurrency(this);
    }}
    on:blur={() => {
        formatCurrency(this, "blur");
    }}
/>
