type PerformancePiece = {
    playID: string;
    audience: number;
}

type Play = {
    type: string;
    name: string;
}

type Plays = {[key: string]: Play};

type Invoice = {
    performance: PerformancePiece[];
    customer: string;
}

// plays.json
const plays: Plays = {
    hamlet: {name: "Hamlet", type: "tragedy"},
    "as-like": {name: "As You Like It", type: "comedy"},
    othello: {name: "Othello", type: "tragedy"},
};

// invoices.json
const invoices: Invoice[] = [{
    customer: "BigCo",
    performance: [{
        playID: "hamlet",
        audience: 55,
    }, {
        playID: "as-like",
        audience: 35,
    }, {
        playID: "othello",
        audience: 40,
    }]
}];

function amountFor(play, perf) {
    let thisAmount = 0;
    switch (play.type) {
        case "tragedy":
            thisAmount = 40000;
            if (perf.audience > 30) {
                thisAmount += 1000 * (perf.audience - 30);
            }
            break;
        case "comedy":
            thisAmount = 30000;
            if (perf.audience > 20) {
                thisAmount += 1000 + 500 * (perf.audience - 20);
            }
            thisAmount += 300 * perf.audience;
            break;
        default:
        throw new Error(`unknown type ${play.type}`);
    }
    return thisAmount;
}

function statement(invoice: Invoice, plays: Plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-US", {style: "currency", currency:
        "USD", minimumFractionDigits: 2}).format;

    for (let perf of invoice.performance) {
        const play = plays[perf.playID];
        const thisAmount = amountFor(play, perf);

        volumeCredits += Math.max(perf.audience - 30, 0);
        if (play.type === "comedy") {
            volumeCredits += Math.floor(perf.audience / 5);
        }

        result += `  ${play.name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`;
        totalAmount += thisAmount;
    }

    result += `Amount owed is ${format(totalAmount / 100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;

    return result;
}


console.log(statement(invoices[0], plays));

