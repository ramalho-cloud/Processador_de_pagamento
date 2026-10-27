function processarTransacaoPix(chavePix, valor, destinatario, callbackAcao) {
    if (valor <= 0) {
        console.log("ERROR, encerrando programa...");
    }
    else {
        const transacao = {
            id: Math.floor(Math.random() * 100000),
            chavePix,
            valor,
            destinatario,
            data: new Date().toLocaleTimeString()
};
        callbackAcao(transacao)
    }
}

function callbackAcao(transacao) {
    console.log(`Transação no valor de ${transacao.valor} com o ID ${transacao.chavePix} para o destinatário ${transacao.destinatario}`)
}

function creditarCashback(transacao) {
    console.log(`O seu bônus foi de ${transacao.valor * 0.2}R$`)
}

function auditarTransacaoSuspeita(transacao) {
    if (transacao.valor > 5000) {
        console.log(`Alerta: Bandeira vermelha para análise antifraude`)
    }
}

function enviarWebhookAssincrono(transacao, callbackFinalizacao) {
    setTimeout(() => {
        console.log(`Webhook enviado no valor de R$ ${transacao.valor}`)
        callbackFinalizacao(transacao)
    }, 2000);
}

processarTransacaoPix(50392540835, 50, "João da Silva", callbackAcao);
processarTransacaoPix(50392540835, 50, "Maria Souza", creditarCashback);
processarTransacaoPix(50392540835, 6000, "Pedro Oliveira", auditarTransacaoSuspeita);
processarTransacaoPix(50392540835, 50, "Ana Costa", (transacao) => {
    console.log(`Valor original: R$ ${transacao.valor} | Valor final com desconto de R$ 5,00: R$ ${transacao.valor - 5}`);
});
enviarWebhookAssincrono({ chavePix: 50392540835, valor: 50, destinatario: "João da Silva" }, (transacao) => {
    console.log(`Transação finalizada com sucesso`);
});