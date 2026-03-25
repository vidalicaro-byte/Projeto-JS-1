
const butao = document.querySelector(".butao1")

const seletormoeda = document.querySelector(".seletor-moeda")

const moedaorigem = document.querySelector(".moedaorigem")

const minhaAPI = 'c7ab73a71c5ad1bac4367b7d43de410b256a9cc621d89cfa6b3d33d12a7491c9'

async function convertValues() {

    const inputValor = document.querySelector(".input-valor").value

    const valorTempoReal = await fetch(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,EUR-USD,GBP-USD,BTC-USD?token=${minhaAPI}`).then(response => response.json())

    const dolarAtual = valorTempoReal.USDBRL.high
    const euroAtual = valorTempoReal.EURBRL.high
    const bitcoin = valorTempoReal.BTCBRL.high
    const libra = valorTempoReal.GBPBRL.high

    const resultado = inputValor / dolarAtual
    const bitcasasdecimais = (inputValor / bitcoin)



    const p1 = document.querySelector(".p1")
    const p2 = document.querySelector(".p2")

    if (moedaorigem.value == "real") {
        p1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor)
    }

    if (moedaorigem.value == "dolar") {
        p1.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor)
    }

    if (moedaorigem.value == "euro") {
        p1.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor)
    }

    if (moedaorigem.value == "libra") {
        p1.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor)
    }

    if (moedaorigem.value == "bitcoin") {
        p1.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor)
    }

    if (seletormoeda.value == "dolar" && moedaorigem.value == "real") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(resultado)
    }

    if (seletormoeda.value == "euro" && moedaorigem.value == "real") {
        p2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / euroAtual)
    }

    if (seletormoeda.value == "libra" && moedaorigem.value == "real") {
        p2.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor / libra)
    }

    if (seletormoeda.value == "bitcoin" && moedaorigem.value == "real") {
        const valorBitcoin = bitcasasdecimais;
        p2.innerHTML = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
        }).format(valorBitcoin) + ' BTC';
    }

    if (seletormoeda.value == "real" && moedaorigem.value == "dolar") {
        p2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor * dolarAtual)
    }

    if (seletormoeda.value == "real" && moedaorigem.value == "euro") {
        p2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor * euroAtual)
    }

    if (seletormoeda.value == "real" && moedaorigem.value == "libra") {
        p2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor * libra)
    }

    if (seletormoeda.value == "real" && moedaorigem.value == "bitcoin") {
        p2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor * bitcoin)
    }

    if (seletormoeda.value == moedaorigem.value) { p2.innerHTML = p1.innerHTML }

    if (seletormoeda.value == "dolar" && moedaorigem.value == "euro") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputValor * euroAtual) / dolarAtual)
    }

    if (seletormoeda.value == "dolar" && moedaorigem.value == "libra") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputValor * libra) / dolarAtual)
    }

    if (seletormoeda.value == "dolar" && moedaorigem.value == "bitcoin") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputValor * bitcoin) / dolarAtual)
    }

    if (seletormoeda.value == "euro" && moedaorigem.value == "dolar") {
        p2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((inputValor * dolarAtual) / euroAtual)
    }

    if (seletormoeda.value == "euro" && moedaorigem.value == "libra") {
        p2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((inputValor * libra) / euroAtual)
    }

    if (seletormoeda.value == "euro" && moedaorigem.value == "bitcoin") {
        p2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((inputValor * bitcoin) / euroAtual)
    }

    if (seletormoeda.value == "libra" && moedaorigem.value == "dolar") {
        p2.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((inputValor * dolarAtual) / libra)
    }

    if (seletormoeda.value == "libra" && moedaorigem.value == "euro") {
        p2.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((inputValor * euroAtual) / libra)
    }

    if (seletormoeda.value == "libra" && moedaorigem.value == "bitcoin") {
        p2.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((inputValor * bitcoin) / libra)
    }



    if (seletormoeda.value === "bitcoin" && moedaorigem.value === "dolar") {
        const valor = (inputValor * dolarAtual) / bitcoin;
        p2.innerHTML = valor.toFixed(8) + ' BTC';
    }

    if (seletormoeda.value === "bitcoin" && moedaorigem.value === "euro") {
        const valor = (inputValor * euroAtual) / bitcoin;
        p2.innerHTML = valor.toFixed(8) + ' BTC';
    }

    if (seletormoeda.value === "bitcoin" && moedaorigem.value === "libra") {
        const valor = (inputValor * libra) / bitcoin;
        p2.innerHTML = valor.toFixed(8) + ' BTC';
    }

    if (seletormoeda.value === "bitcoin" && moedaorigem.value === "bitcoin") {

        p2.innerHTML = parseFloat(inputValor).toFixed(8) + ' BTC';
    }



}


function mudarimagem() {
    const nomedamoeda = document.querySelector(".moedagringa")
    const imagem = document.querySelector(".bandeira-gringa")
    const moedaentrada = document.querySelector(".moedaentrada")
    const imagementrada = document.querySelector(".bandeiraorigem")

    if (moedaorigem.value == "real") {
        moedaentrada.innerHTML = "Real"

        imagementrada.src = "./assets/brasil 2.png"

    }

    if (moedaorigem.value == "dolar") {
        moedaentrada.innerHTML = "Dólar US"
        imagementrada.src = "./assets/estados-unidos (1) 1.png"

    }

    if (moedaorigem.value == "euro") {
        moedaentrada.innerHTML = "Euro"
        imagementrada.src = "./assets/euroimg.png"

    }

    if (moedaorigem.value == "libra") {
        moedaentrada.innerHTML = "Libra esterlina"
        imagementrada.src = "./assets/libra 1.png"

    }

    if (moedaorigem.value == "bitcoin") {
        moedaentrada.innerHTML = "Bitcoin"
        imagementrada.src = "./assets/bitcoin 1.png"

    }


    if (seletormoeda.value == "dolar") {
        nomedamoeda.innerHTML = "Dólar US"
        imagem.src = "./assets/estados-unidos (1) 1.png"

    }


    if (seletormoeda.value == "euro") {
        nomedamoeda.innerHTML = "Euro"
        imagem.src = "./assets/euroimg.png"

    }

    if (seletormoeda.value == "libra") {
        nomedamoeda.innerHTML = "Libra esterlina"
        imagem.src = "./assets/libra 1.png"
    }


    if (seletormoeda.value == "bitcoin") {
        nomedamoeda.innerHTML = "Bitcoin"
        imagem.src = "./assets/bitcoin 1.png"
    }

    if (seletormoeda.value == "real") {
        nomedamoeda.innerHTML = "Real"
        imagem.src = "./assets/brasil 2.png"
    }


    convertValues()



}






moedaorigem.addEventListener("change", mudarimagem)
seletormoeda.addEventListener("change", mudarimagem)
butao.addEventListener("click", convertValues)
