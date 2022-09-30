# 💰 Svelte-price-formatter 💰

## *Number to price formatter*
![1000 to $10,000.00](/src/example.png)

<br>
<br>

# 📦 Installation:
```
npm i @inmortalqueen/svelte-price-formatter
```

<br>
<br>

# 🔧 Configuration

* ### Default Price:
    ``` HTML
    <script>
        import PriceFormatter from "@inmortalqueen/svelte-price-formatter";
    </script>
    
    <PriceFormatter />  // $10,000.00
    ```

<br>

* ### Customize price:
    ``` HTML
    <script>
        import PriceFormatter from "@inmortalqueen/svelte-price-formatter";
    </script>

    <PriceFormatter price={200000} />  // $200,000.00
    <PriceFormatter price={123456} />  // $123,456.00
    <PriceFormatter price={123.45} />  // $123.45
    ```

<br>

* ### Customize locale:
    ``` HTML
    <script>
        import PriceFormatter from "@inmortalqueen/svelte-price-formatter";
    </script>

    <PriceFormatter locale="es-AR" />  // $ 10.000,00
    <PriceFormatter locale="es-ES" />  // 10.000,00 €
    <PriceFormatter locale="ja-JP" />  // ￥10,000.00
    ```
    * ### All locales you can use
        <br>

        | LOCALE  | SYMBOL | CURRENCY          |
        |:--------|:------:|:------------------|
        | "en-CA" | $      | Canadian dollar   |
        | "en-GB" | £      | Pound sterling    |
        | "en-US" | $      | American dollar   |
        | "es-AR" | $      | Argentine peso    |
        | "es-ES" | €      | Euro              |
        | "es-MX" | $      | Mexican peso      |
        | "ja-JP" | ¥      | Yen               |
        | "pt-BR" | R$     | Brazilian real    |
        | "pt-PT" | €      | Euro              |
        | "zh-CN" | ¥      | Renminbi          |
        | "zh-HK" | HK$    | Hong Kong dollar  |
        | "zh-TW" | $      | new taiwan dollar |

<br>

* ### Customize minDecimals:
    ``` HTML
    <script>
        import PriceFormatter from "@inmortalqueen/svelte-price-formatter";
    </script>

    <PriceFormatter minDecimals={0} />  // $10,000
    <PriceFormatter minDecimals={1} />  // $10,000.0
    ```

<br>

* ### Customize maxDecimals:
    ``` HTML
    <script>
        import PriceFormatter from "@inmortalqueen/svelte-price-formatter";
    </script>
    
    <PriceFormatter price={1000.12349} />                  // $1,000.12
    <PriceFormatter price={1000.12349} maxDecimals={3} />  // $1,000.123
    <PriceFormatter price={1000.12349} maxDecimals={4} />  // $1,000.1235    X >= 5 = true  -->  9.12349 = 9.1235
    <PriceFormatter price={1000.12349} maxDecimals={5} />  // $1,000.12349
    ```