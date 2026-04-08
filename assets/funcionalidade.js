function mostrar(id, mensagem) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.innerHTML = mensagem;
    } else {
        console.error(`Erro: O elemento com ID '${id}' não foi encontrado no HTML.`);
    }
}

// Idades
function calcIdade() {
    const nasc = Number(document.getElementById('nasc').value);
    const atual = Number(document.getElementById('atual').value);
    const idadeA = atual - nasc;
    const idade50 = 2050 - nasc;
    mostrar('res1', `Idade atual: <b>${idadeA} anos</b><br>Em 2050: <b>${idade50} anos</b>`);
}

// Salário
function calcSalario() {
    const sal = Number(document.getElementById('salario').value);
    const novo = sal * 1.25;
    mostrar('res2', `Novo Salário: <b>R$ ${novo.toFixed(2)}</b>`);
}

// Temperatura
function calcTemp() {
    const c = Number(document.getElementById('celsius').value);
    const f = (c * 1.8) + 32;
    mostrar('res3', `${c}°C = <b>${f.toFixed(1)}°F</b>`);
}

// Média
function calcMedia() {
    const n1 = Number(document.getElementById('nota1').value);
    const n2 = Number(document.getElementById('nota2').value);
    const n3 = Number(document.getElementById('nota3').value);
    const m = (n1 + n2 + n3) / 3;
    mostrar('res4', `Média Final: <b>${m.toFixed(2)}</b>`);
}

// Hipotenusa
function calcHipot() {
    const b = Number(document.getElementById('catB').value);
    const c = Number(document.getElementById('catC').value);
    const h = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
    mostrar('res5', `Hipotenusa (a): <b>${h.toFixed(2)}</b>`);
}

// Esfera
function calcEsfera() {
    const r = Number(document.getElementById('raio').value);
    const comp = 2 * Math.PI * r;
    const area = 4 * Math.PI * Math.pow(r, 2);
    const vol = (4/3) * Math.PI * Math.pow(r, 3);
    
    mostrar('res6', `
        Comprimento: ${comp.toFixed(2)}<br>
        Área: ${area.toFixed(2)}<br>
        Volume: ${vol.toFixed(2)}
    `);
}