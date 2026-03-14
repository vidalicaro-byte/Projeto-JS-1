
const butao = document.querySelector(".butao1")

const seletormoeda = document.querySelector(".seletor-moeda")

const moedaorigem = document.querySelector(".moedaorigem")

function convertValues() {

    const inputValor = document.querySelector(".input-valor").value

    const dolarAtual = 5.25
    const euroAtual = 6.20

    const resultado = inputValor / dolarAtual

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
        }).format(inputValor / 7.30)
    }

    if (seletormoeda.value == "bitcoin" && moedaorigem.value == "real") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor / 0.000025)
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
        }).format(inputValor * 7.30)
    }

    if (seletormoeda.value == "real" && moedaorigem.value == "bitcoin") {
        p2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor * 0.000025)
    }

    if (seletormoeda.value == moedaorigem.value) { p2.innerHTML = p1.innerHTML }

    if (seletormoeda.value == "dolar" && moedaorigem.value == "euro") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor * (dolarAtual / euroAtual))
    }

    if (seletormoeda.value == "dolar" && moedaorigem.value == "libra") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor * (dolarAtual / 7.30))
    }

    if (seletormoeda.value == "dolar" && moedaorigem.value == "bitcoin") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor * (dolarAtual / 0.000025))
    }

    if (seletormoeda.value == "euro" && moedaorigem.value == "dolar") {
        p2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * (euroAtual / dolarAtual))
    }

    if (seletormoeda.value == "euro" && moedaorigem.value == "libra") {
        p2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * (euroAtual / 7.30))
    }

    if (seletormoeda.value == "euro" && moedaorigem.value == "bitcoin") {
        p2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * (euroAtual / 0.000025))
    }

    if (seletormoeda.value == "libra" && moedaorigem.value == "dolar") {
        p2.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor * (7.30 / dolarAtual))
    }

    if (seletormoeda.value == "libra" && moedaorigem.value == "euro") {
        p2.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor * (7.30 / euroAtual))
    }

    if (seletormoeda.value == "libra" && moedaorigem.value == "bitcoin") {
        p2.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor * (7.30 / 0.000025))
    }

    if (seletormoeda.value == "bitcoin" && moedaorigem.value == "real") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor * (0.000025 / 1))
    }


    if (seletormoeda.value == "bitcoin" && moedaorigem.value == "dolar") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor * (0.000025 / dolarAtual))
    }

    if (seletormoeda.value == "bitcoin" && moedaorigem.value == "euro") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor * (0.000025 / euroAtual))
    }

    if (seletormoeda.value == "bitcoin" && moedaorigem.value == "libra") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor * (0.000025 / 7.30))
    }

    if (seletormoeda.value == "bitcoin" && moedaorigem.value == "bitcoin") {
        p2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor)
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
