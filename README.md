# 💰 Svelte-price-formatter 💰

* ### *Number to price formatter*
    ![1000 to $10,000.00](/src/imgs/price-formatter/example.png)

* ### *Number to price input formatter*
    ![input.value = $1,000,000.00](/src/imgs/input-price-formatter/example.png)

<br><br>

# 📦 Installation:
```
npm i @inmortalqueen/svelte-price-formatter
```

<br><br>

# 🔧 Configuration
## **Number to price formatter**
![1000 to $10,000.00](/src/imgs/price-formatter/example.png)

* ### Default Price:
    ``` HTML
    <script>
        import { PriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>
    
    <PriceFormatter />  // $10,000.00
    ```

<br>

* ### Customize price:
    ``` HTML
    <script>
        import { PriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>

    <PriceFormatter price={200000} />  // $200,000.00
    <PriceFormatter price={123456} />  // $123,456.00
    <PriceFormatter price={123.45} />  // $123.45
    ```

<br>

* ### Customize locale:
    ``` HTML
    <script>
        import { PriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>

    <PriceFormatter locale="es-AR" />  // $ 10.000,00
    <PriceFormatter locale="es-ES" />  // 10.000,00 €
    <PriceFormatter locale="ja-JP" />  // ￥10,000.00
    ```
    * ### All locales you can use
        <br>

        | LOCALE  | SYMBOL | CURRENCY          |
        |:--------|:------:|:------------------|
        | "en-CA" | $      | Canadian Dollar   |
        | "en-GB" | £      | Pound Sterling    |
        | "en-US" | $      | American Dollar   |
        | "es-AR" | $      | Argentine Peso    |
        | "es-ES" | €      | Euro              |
        | "es-MX" | $      | Mexican Peso      |
        | "ja-JP" | ¥      | Yen               |
        | "pt-BR" | R$     | Brazilian Real    |
        | "pt-PT" | €      | Euro              |
        | "zh-CN" | ¥      | Yuan              |
        | "zh-HK" | HK$    | Hong Kong Dollar  |
        | "zh-TW" | $      | New Taiwan Dollar |

<br>

* ### Customize minDecimals:
    ``` HTML
    <script>
        import { PriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>

    <PriceFormatter minDecimals={0} />  // $10,000
    <PriceFormatter minDecimals={1} />  // $10,000.0
    ```

<br>

* ### Customize maxDecimals:
    ``` HTML
    <script>
        import { PriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>
    
    <PriceFormatter price={1000.12349} />                  // $1,000.12
    <PriceFormatter price={1000.12349} maxDecimals={3} />  // $1,000.123
    <PriceFormatter price={1000.12349} maxDecimals={4} />  // $1,000.1235    X >= 5 = true  -->  9.12349 = 9.1235
    <PriceFormatter price={1000.12349} maxDecimals={5} />  // $1,000.12349
    ```

<br>

* ### Customize style:
    ``` HTML
    <script>
        import { PriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>
    
    <PriceFormatter style="color: red;" />
    ```
    ![$10,000.00](/src/imgs/price-formatter/style.png)

<br>

* ### Customize style by class:
    ``` HTML
    <script>
        import { PriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>
    
    <PriceFormatter class="price-formatter" />

    <style>
        :global(.price-formatter) {
            color: blue;
        }
    </style>
    ```
    ![$10,000.00](/src/imgs/price-formatter/class.png)

<br>

* ### Customize style by id:
    ``` HTML
    <script>
        import { PriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>
    
    <PriceFormatter id="price-formatter" />

    <style>
        :global(#price-formatter) {
            color: green;
        }
    </style>
    ```
    ![$10,000.00](/src/imgs/price-formatter/id.png)

<br><br>

## **Number to price input formatter**
![input.value = $1,000,000.00](/src/imgs/input-price-formatter/example.png)

* ### Default Input Price:
    ``` HTML
    <script>
        import { InputPriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>
    
    <InputPriceFormatter />
    ```
    ![input.placeholder="$1,000.00"](/src/imgs/input-price-formatter/default-input-price.png)

<br>

* ### Customize placeholder:
    ``` HTML
    <script>
        import { InputPriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>

    <InputPriceFormatter placeholder="200000" />
    <InputPriceFormatter placeholder="123456" />
    ```
    ![input.placeholder="$200,000.00" input.placeholder="$123,456.00"](/src/imgs/input-price-formatter/placeholders.png)

<br>

* ### Customize limit:
    ``` HTML
    <script>
        import { InputPriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>

    <InputPriceFormatter limit={1000} />
    <InputPriceFormatter limit={10000.55} />
    ```
    ![input.value="$1,000.00" input.value="$10,000.55"](/src/imgs/input-price-formatter/limits.png)

<br>

* ### Customize locale:
    ``` HTML
    <script>
        import { InputPriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>

    <InputPriceFormatter locale="es-AR" />
    <InputPriceFormatter locale="es-ES" />
    <InputPriceFormatter locale="ja-JP" />
    ```
    ![input.value="$ 1.234,00" input.value="4.564,47 €" input.value="¥456,456.00"](/src/imgs/input-price-formatter/locales.png)
    * ### All locales you can use
        <br>

        | LOCALE  | SYMBOL | CURRENCY          |
        |:--------|:------:|:------------------|
        | "en-CA" | $      | Canadian Dollar   |
        | "en-GB" | £      | Pound Sterling    |
        | "en-US" | $      | American Dollar   |
        | "es-AR" | $      | Argentine Peso    |
        | "es-ES" | €      | Euro              |
        | "es-MX" | $      | Mexican Peso      |
        | "ja-JP" | ¥      | Yen               |
        | "pt-BR" | R$     | Brazilian Real    |
        | "pt-PT" | €      | Euro              |
        | "zh-CN" | ¥      | Yuan              |
        | "zh-HK" | HK$    | Hong Kong Dollar  |
        | "zh-TW" | $      | New Taiwan Dollar |

<br>

* ### Customize maxDecimals:
    ``` HTML
    <script>
        import { InputPriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>

    <InputPriceFormatter maxDecimals={0} />
    <InputPriceFormatter maxDecimals={4} />
    ```
    ![input.placeholder="$1,000" input.placeholder="$1,000.0000"](/src/imgs/input-price-formatter/maxDecimals.png)

<br>

* ### Customize onChange:
    ``` HTML
    <script>
        import { InputPriceFormatter } from "@inmortalqueen/svelte-price-formatter";

        let onChange = () => {
            // Your code...
        }
    </script>

    <InputPriceFormatter bind:onChange />

<br>

* ### Get input value:
    ``` HTML
    <script>
        import { InputPriceFormatter } from "@inmortalqueen/svelte-price-formatter";

        let inputValue;

        $: console.log(inputValue);
    </script>

    <InputPriceFormatter bind:inputValue />
    ```
    ![input.value="$12,345.00" -> 1234.45](/src/imgs/input-price-formatter/inputValue.png)

<br>

* ### Get value:
    ``` HTML
    <script>
        import { InputPriceFormatter } from "@inmortalqueen/svelte-price-formatter";

        let value;

        $: console.log(value);
    </script>

    <InputPriceFormatter bind:value />
    ```
    ![input.value="$1,000,000.00" -> $1,000,000.00](/src/imgs/input-price-formatter/value.png)

<br>

* ### Customize style:
    ``` HTML
    <script>
        import { InputPriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>
    
    <InputPriceFormatter style="color: red;" />
    ```
    ![input.value="$1,000.00"](/src/imgs/input-price-formatter/style.png)

<br>

* ### Customize style by class:
    ``` HTML
    <script>
        import { InputPriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>
    
    <InputPriceFormatter class="input-price-formatter" />

    <style>
        :global(.price-formatter) {
            color: blue;
        }
    </style>
    ```
    ![input.value="$1,000.00"](/src/imgs/input-price-formatter/class.png)

<br>

* ### Customize style by id:
    ``` HTML
    <script>
        import { InputPriceFormatter } from "@inmortalqueen/svelte-price-formatter";
    </script>
    
    <InputPriceFormatter id="input-price-formatter" />

    <style>
        :global(#price-formatter) {
            color: green;
        }
    </style>
    ```
    ![input.value="$1,000.00"](/src/imgs/input-price-formatter/id.png)