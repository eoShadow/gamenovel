var rota = 'rota1';
var a = 1;
var b = 1;
var c = 1;

// texto e respostas
let respostas = document.querySelector('#resp');
let resp1 = document.querySelector('#resp1');
let resp2 = document.querySelector('#resp2');
let resp3 = document.querySelector('#resp3');
let fundo = document.querySelector('#fundo');
let dialogo = document.querySelector('#dialogo');
let config = document.querySelector('.config');
let opc = document.querySelector('.opc');
let but = document.querySelector('.button.one');
let but2 = document.querySelector('.button.two');
let but3 = document.querySelector('.button.three');
let but4 = document.querySelector('.button.four');
let tela = document.getElementById('tela');
let formProgresso = document.getElementById('formProgresso');
let nomeUsuarioInput = document.getElementById('nomeUsuario');
let progressoSalvoDiv = document.getElementById('progressoSalvo');


// animação


let textoArray;
let letras;
let finish = false
letras = [];
let textvel = 30;
let time;
let timeouts = [];
let original = '';


const titulo = dialogo;
original = titulo.textContent;
typeWrite(titulo);


// 2x e menu

let active = false;
let twox = false;
let auto = false;
let savein = false;




config.addEventListener('mousedown', () => {


    if (active == false) {
        opc.style.display = 'flex'
        active = true;
    } else {
        opc.style.display = 'none'
        active = false;
    }
})


but2.addEventListener('mousedown', () => {


    if (twox == false) {
        textvel = 30;
        twox = true;
        but2.style.background = 'blue'
    } else {
        textvel = 10;
        but2.style.background = 'white'
        twox = false;
    }

    console.log(textvel)
})



// dialogos



fundo.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        fala();
    }
});


function fala() {


    if (rota == 'rota1' && window.getComputedStyle(respostas).getPropertyValue('display') === 'none' && finish === true) {

        switch (a) {
            case 1:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'a2222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

                a++;
                break
            case 2:
                fundo.style.background = 'red';
                dialogo.innerHTML = 'a3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                a++;
                break
            case 3:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                a++;
                break
            case 4:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'a55555aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1234567890123456789123456789123456789123456789'

                a++;
                respostas.style.display = 'flex';
                break
            case 5:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a66666aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                a++;
                break
            case 6:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a6aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                a++;
                break
            case 7:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                a++;
                break
            case 8:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                a++;
                break
            case 9:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                a++;
                break
            case 10:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a10aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

                a = 1;
                b = 1;
                c = 1;

                rota = 'rota1';

                break
        }


    }

    if (rota === 'rota2' && window.getComputedStyle(respostas).getPropertyValue('display') === 'none' && finish === true) {


        console.log(b)
        switch (b) {
            case 1:
                fundo.style.background = 'pink';
                dialogo.innerHTML = 'b1'

                b++;
                break
            case 2:
                fundo.style.background = 'red';
                dialogo.innerHTML = 'b2'
                b++;
                break
            case 3:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b3'
                b++;
                break
            case 4:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'b4'
                b++;
                break
            case 5:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b5'
                respostas.style.display = 'flex';
                b++;
                break
            case 6:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b6'
                b++;
                break
            case 7:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b7'
                b++;
                break
            case 8:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b8'
                b++;
                break
            case 9:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b9'
                b++;
                break
            case 10:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b10'

                a = 1;
                b = 1;
                c = 1;

                rota = 'rota1';
                break

        }
    }


    if (rota === 'rota3' && window.getComputedStyle(respostas).getPropertyValue('display') === 'none' && finish === true) {


        console.log(c)
        switch (c) {
            case 1:
                fundo.style.background = 'pink';
                dialogo.innerHTML = 'c1'

                c++;
                break
            case 2:
                fundo.style.background = 'red';
                dialogo.innerHTML = 'c2'
                c++;
                break
            case 3:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'c3'
                c++;
                break
            case 4:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'c4'
                a = 1;
                b = 1;
                c = 1;

                rota = 'rota1';
                break

        }
    }

    animation();

    console.log(a)
}




// mudança de rota

resp1.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        rota = 'rota1'
        respostas.style.display = 'none';
        console.log(rota)
    }
})

resp2.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        rota = 'rota2'
        respostas.style.display = 'none';
        console.log(rota)
    }
})
resp3.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        rota = 'rota3'
        respostas.style.display = 'none';
        console.log(rota)
    }
})






// animação da fala e pular fala


function animation() {
    if (finish === true) {
        if (window.getComputedStyle(respostas).getPropertyValue('display') === 'none') {
            const titulo = dialogo;
            original = titulo.textContent;
            typeWrite(titulo);
            texto = dialogo.textContent;

            if (twox == false) {
                textvel = 30;
            } else {
                textvel = 10;
            }

        }
    } else {
        timeouts.forEach(time => clearTimeout(time));

        dialogo.innerHTML = original;

        finish = true;
        letras = [];
        console.log(original)
    }

}

// automatico

but.addEventListener('mousedown', (event) => {
    if (event.button === 0) {

        if (auto === false) {
            auto = true;
            automa()
            but.style.background = "blue"

        } else {
            auto = false
            but.style.background = "white"
            clearInterval(intervaloAuto);
        }

        console.log(auto)
    }
})


function automa() {

    intervaloAuto = setInterval(() => {
        if (window.getComputedStyle(respostas).getPropertyValue('display') === 'none' && finish === true) {

            fala()
        }
    }, original.length * 100);
}


// carregar progresso botão

but3.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        if (savein === false) {
            savein = true
            tela.style.display = 'block';
            but3.style.background = 'blue'
        } else {
            savein = false;
            tela.style.display = 'none';
            but3.style.background = 'white'
        }
    }
});


//animação


function typeWrite(elemento) {
    let texto = dialogo.textContent;
    textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {



        time = setTimeout(function () {
            elemento.innerHTML += letra;

            letras.push(letra)


            if (letras.length >= texto.length) {
                finish = true;
                letras = [];
            } else {
                finish = false;

            }


        }, textvel * i)

        timeouts.push(time);

    });

}

let nomeUsuario;
let usuarios = carregarUsuariosSalvos();

// Função para salvar o progresso no localStorage

formProgresso.addEventListener('submit', (event) => {
    event.preventDefault();
    nomeUsuario = nomeUsuarioInput.value;
    salvarProgresso(nomeUsuario, rota, a, b, c);


    progressoSalvoDiv.textContent = `Progresso salvo para o usuário ${nomeUsuario}`;

});




function salvarProgresso(nomeUsuario, rota, a, b, c) {
    const usuariosSalvos = carregarUsuariosSalvos() || [];
    const dadosSalvos = {
        usuario: nomeUsuario,
        rotas: rota,
        rotaa: a,
        rotab: b,
        rotac: c
    };
    usuariosSalvos.push(dadosSalvos);
    localStorage.setItem('progressoJogo', JSON.stringify(usuariosSalvos));
}







// Função para carregar o progresso salvo do localStorage

function carregarProgresso(nomeUsuario) {
    const usuariosSalvos = carregarUsuariosSalvos();
    if (usuariosSalvos) {
        const usuarioEspecifico = usuariosSalvos.find(usuario => usuario.usuario === nomeUsuario);
        if (usuarioEspecifico) {
            const {
                usuario,
                rotas,
                rotaa,
                rotab,
                rotac
            } = usuarioEspecifico;
            // Faça o que for necessário com os dados do usuário específico
            rota = rotas;
            a = rotaa;
            b = rotab;
            c = rotac;

            console.log(`Usuário: ${usuario}`);
            console.log(`Rotas: ${rota}`);
            console.log(`Rota A: ${a}`);
            console.log(`Rota B: ${b}`);
            console.log(`Rota C: ${c}`);
        } else {
            console.log(`Usuário ${nomeUsuario} não encontrado.`);
        }
    } else {
        console.log('Nenhum progresso salvo encontrado.');
    }
}

progressoSalvoDiv.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        const nomeUsuario = event.target.textContent;
        carregarProgresso(nomeUsuario);
        console.log(a)
    }
})



function carregarUsuariosSalvos() {
    const usuariosSalvos = JSON.parse(localStorage.getItem('progressoJogo'));
    if (usuariosSalvos) {
        const usuariosNaoVazios = usuariosSalvos.filter(usuario => usuario && usuario.usuario);
        if (usuariosNaoVazios.length > 0) {
            return usuariosNaoVazios;
        } else {
            console.log('Nenhum progresso salvo encontrado.');
            return [];
        }
    } else {
        console.log('Nenhum progresso salvo encontrado.');
        return [];
    }
}



but3.addEventListener('mousedown', (event) => {
    if (event.button === 0) {

        usuarios.forEach(usuario => {
            const nomeUsuario = usuario.usuario;
            const usuarioElemento = document.createElement('p');
            usuarioElemento.textContent = nomeUsuario;
            progressoSalvoDiv.appendChild(usuarioElemento);
            console.log(nomeUsuario);

        })

    }
});