const  Body = document.querySelector('.Body')

const  div1 = document.createElement('section'),
Rotulo= document.createElement('section');
const div2 = [];

let undo = [];
let redo = [];
let vector = 4;
let VReal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//           A  2  3  4  5  6  7  8  9 10  J  Q  K

//let Verf = 0; //Verificador de Undo (limitador)

Rotulo.classList.add('Rotulo');
Rotulo.textContent = 'Jogabilidade e Parâmetros'
//Body.appendChild(div1)
Body.appendChild(Rotulo)

const Reveal = (target) => 
{
    target.classList.add('Reveal');
    target.classList.remove('UnReveal');
    return target;
}

const UnReveal = (target) => 
{
    target.classList.add('UnReveal');
    target.classList.remove('Reveal');
    setTimeout (() =>
    {
        target.classList.remove('UnReveal');
    }, 2000); //o que ta dentro do timeout acontece depois do tempo;

    return target;
}


const ConfigCard = (Card) =>
{
    //const Card = document.createElement('div')
    Card.addEventListener('click',() => Reveal(Card))
    Card.addEventListener('dblclick',() => UnReveal(Card))
    Card.addEventListener('auxclick',() => UnReveal(Card))
    return Card
}

//--------------------------------------------------------
//Game Start::

class Deck_Naipe {
    constructor(Naipe, Quantia) {
      this.naip = Naipe;
      this.Quanty = Quantia;
    }
}

class Decker {
    constructor(Value, Naipe, Quantia) {
      this.val = Value;
      this.Naipe = [0, 0, 0, 0];

      for(let i=0;i<4;i++)
        this.Naipe[i] = new Deck_Naipe(Naipe[i], Quantia)
    }
  
    show() {
        console.log(`O Valor desse card é: ${this.val}`);
        console.log(`O Naipe desse card é: ${this.Naipe.naip}`); 
    }
  }
  
  //Chamada::
let Deck = []; 
//Deck.pu new Decker('Cachorro', 'Au Au');
const Naiper = ['_of_clubs','_of_diamonds', 
                '_of_hearts', '_of_spades'];

 for (let i=0;i<14;i++)
{
    let N=i;

    if(i==1)
        N = 'Ace';
    if(N==11)
        N = 'jack';
    if(N==12)
        N = 'queen';
    if(N==13)
        N = 'king';

    Deck.push(new Decker(N,Naiper, 6))
}

//--------------------------------------------------------
//Configura div22::

const TTemp = document.createElement('section')
TTemp.classList.add('Forma')

//cria as linhas da div 2
for (let i =0;i<9;i++)
{
    const tmp = document.createElement('section')
    div2.push(tmp);
    div2[i].classList.add(`d2`)
    TTemp.appendChild(div2[i])
}
Body.appendChild(TTemp)

//config 1 linha de dados

const Stylizer = (aux, i, j) => 
{
    if(j)
    aux.style.background =
    `url('../images/PP/${Deck[j].val}${Deck[1].Naipe[Math.floor(Math.random() * 4)].naip}.png`

    aux.style.backgroundSize = '101px'

    //add eventListener aqui!!
    aux.classList.add(`${Deck[j].val}`)
    
    return aux;
}

//Methods For Counting
const Classics = ()=>
{
    let a = 1;
    let c1 =
    VReal[2-a]+VReal[3-a]+VReal[4-a]+VReal[5-a]+VReal[6-a];
    
    let c2 =
    (VReal[7-a]+VReal[8-a]+VReal[9-a])*0;

    let c3 = 
    (VReal[1-a]+VReal[10-a]+VReal[11-a]+VReal[12-a]+VReal[13-a])*(-1)
    
    //Show Result::
    div2[5].children[0].textContent = c1+c2+c3;

    //True Value::
    div2[8].children[0].textContent = (div2[5].children[0].textContent/(vector/4)).toFixed(3);

    
}

const OmegaII = ()=>
{
    let a = 1;

    let c1 =
    (VReal[1-a])*0;
    
    let c2 =
    (VReal[2-a]+VReal[3-a]+VReal[7-a]);

    let c3 = 
    (VReal[4-a]+VReal[5-a]+VReal[6-a])*(+2)

    let c4 =
    (VReal[9-a])*(-1)

    let c5 = 
    (VReal[10-a]+VReal[11-a]+VReal[12-a]+VReal[13-a])*(-2)

    //Show Result::
    div2[5].children[1].textContent = c1+c2+c3+c4+c5;

    //True Value::
    div2[8].children[1].textContent = (div2[5].children[1].textContent/(vector/4)).toFixed(3);
}

const Halves = ()=>
{
    let a = 1;

    let c1 =
    (VReal[2-a]+VReal[7-a])*0.5; //2 7 == =0.5
    
    let c2 =
    (VReal[3-a]+VReal[4-a]+VReal[6-a])*(1);// 3 4 6 

    let c3 =
    (VReal[8-a])*(0);//8

    let c4 = 
    (VReal[9-a])*(-0.5);

    let c5 = 
    (VReal[1-a]+VReal[10-a]+VReal[11-a]+VReal[12-a]+VReal[13-a])*(-1)

    let c6 = 
    (VReal[5-a])*(1.5);

    //Show Result::
    div2[5].children[2].textContent = c1+c2+c3+c4+c5+c6;
    
    //True Value::
    div2[8].children[2].textContent = (div2[5].children[2].textContent/(vector/4)).toFixed(3);

}

const Advanced_Hi_OPT_II = ()=>
{
    let a = 1;

    let c1 =
    (VReal[2-a]+VReal[3-a]+VReal[6-a]+VReal[7-a])*(+1) //2 3 6 7 == +1
    
    let c2 =
    (VReal[4-a]+VReal[5-a])*(+2);// 3 4 6 

    let c3 =
    (VReal[1-a]+VReal[8-a]+VReal[9-a])*(0);//As 8 9

    let c4 = 
    (VReal[10-a]+VReal[11-a]+VReal[12-a]+VReal[13-a])*(-2)

    //Show Result::
    div2[5].children[3].textContent = c1+c2+c3+c4;

    //True Value::
    div2[8].children[3].textContent = (div2[5].children[3].textContent/(vector/4)).toFixed(3);
}

const CalculaVreal = () =>
{
    for(let i =0;i<13;i++)
        VReal[i] = 2-div2[2].children[i+1].textContent;

    //Classic:
        Classics();

    //Classic:
        OmegaII();

    //Halves:
        Halves();

    //ADVANCED:
        Advanced_Hi_OPT_II();
}

const Eventer = (aux) => 
{
    //Lista de Classes /1° N da lista
    gg = aux.classList[0]; 

    let tp = div2[2].children[gg]; 

    if(tp.textContent==0) //aqui resolve mais problemas
        return;

  //  if(tp.textContent>0) redundante
        tp.textContent -=1; //decrementa 1

    if(tp.textContent==0) //Verifica Jogo
    {
        //console.log('Acabou')
        aux.classList.add('Disabled_Card')
        
        setTimeout(()=>{
            aux.style.background = 
            `url('../images/Back${Math.floor(Math.random() * 3)}.png')`;
            aux.style.backgroundSize = '100px';
        },3100)//sintonia fina
    }

    //Conta dos methods::
    CalculaVreal();
    //undo.push(aux); //salva a ultima mod na cabeca da pilha;
    
    //if(!Verf)
        undo.unshift(aux); //unshift adiciona
}
    

const Prepreparation = (i,j) =>
{
    let aux = document.createElement('div')
    aux.className = j;
    aux.classList.add('Face_UP')
    aux.classList.add('icon') 

    aux = Stylizer(aux, i, j);

    if(j)
        aux.addEventListener('click', ()=>Eventer(aux))

    div2[i].classList.add('icon');
    div2[i].appendChild(aux);
}

const Preparation = (i,j) =>
{
    const aux = document.createElement('div')
    aux.classList.add('Remain')

    aux.textContent = j

    if(j==0) aux.textContent = "Value:"

    if(j==1) aux.textContent = 'As'
    
    if(j==11) aux.textContent = 'Jack'

    if(j==12) aux.textContent = 'Queen'
    
    if(j==13) aux.textContent = 'King'

    div2[i].classList.add('Qnt')

    if(j) aux.classList.add(aux.textContent)

    div2[i].appendChild(aux);
}

const PostPreparation = (i,j) =>
{
    const aux = document.createElement('div')
    aux.className = j;
    aux.classList.add('Remain')

    aux.textContent = j

    if(j==0)
    aux.textContent = 'Resta:'

    if(j==1)
        aux.textContent = 'As'
       // aux.textContent = Deck[0].val
    if(j==11)
       aux.textContent = 'Jack'

      // aux.textContent = Deck[0].val
    if(j==12)
      aux.textContent = 'Queen'

    if(j==13)
      aux.textContent = 'King'

    div2[i].classList.add('Qnt')
    
    aux.classList.add(aux.textContent)
    
    if (j)
    aux.textContent = vector;//********************** */quantia de cards

    div2[i].appendChild(aux);
}



for (let i=0;i<3;i++)
{
    for (let j=0;j<14;j++)
    {
        if(i==0)
            Prepreparation(i,j);

        if(i==1)
            Preparation(i,j);

        if(i==2)
            PostPreparation(i,j); 
    }
}

// Gera um número inteiro aleatório entre 0 e 3
const numeroAleatorio = Math.floor(Math.random() * 4);

//Methods de contagem::----------------------
div2[3].classList.add('Acoo')


//Logica UNDO & REDO por pilha ::
const UNDO = () =>
{
    //Verf = 0; //garante q ia entrar em UNDO para reativar vet undo[]
    if(!undo.length)
    return;

        redo.unshift(undo.shift()); //shift() retorna o valor desalocado.

        console.log('undo:')
        console.log(undo)

        console.log('redo:')
        console.log(redo)

         //Lista de Classes /1° N da lista
        let aux = redo[0]; //pois já foi tirado de la
        let ff = aux.classList[0];
        let tp = div2[2].children[ff]; 

    if(tp.textContent==0)
    {
        aux.classList.remove('Disabled_Card')
        
            aux.style.background = `url('../images/PP/${Deck[aux.classList[0]].val}${Deck[1].Naipe[Math.floor(Math.random() * 4)].naip}.png`
            aux.style.backgroundSize = '101px'
         
             //add eventListener aqui!!
             aux.classList.add(`${Deck[aux.classList[0]].val}`);
             //aux.classList.remove('Disabled');
    }
    let pp = parseInt(tp.textContent)
    tp.textContent = pp+1;
    CalculaVreal();
}
    

const REDO = () =>
{
    if(!redo.length)
        return;
    
       // undo.unshift(redo.shift());
//Nao precisa alocar na cabeca de undo aqui, pois Eventer 
//ja faz isso
    let aux = redo.shift() //mas deve armaenar ele de alguma forma
    // pra depois passar para Eventer;

        console.log('redo:')
        console.log(redo)

        console.log('undo:')
        console.log(undo)

        //let aux = undo[0]; //E a posicao que deseja retornar;
        //REDO Faz um click na celula, ou seja o mesmo q Eventer::
        Eventer(aux);
}

for (let i=0;i<3;i++)
{
    let tmpp = document.createElement('div');
    tmpp.classList.add('TitlerMeth')
    
    if(i==0)
    {
        tmpp.classList.add('Undo');
        tmpp.textContent = '<= Undo'
        tmpp.addEventListener('click', UNDO)
    }
    
    if(i==1)
        tmpp.textContent = 'Methods'
    
    if(i==2)
    {
        tmpp.classList.add('Redo');
        tmpp.textContent = 'Redo =>'

        tmpp.addEventListener('click', REDO)
    }
        
    div2[3].appendChild(tmpp)
}


div2[4].classList.add('MethName')

for (let i=0;i<4;i++)
{
    let tmpp = document.createElement('div');
    tmpp.classList.add('Meth')
    
    if(i==0)
        tmpp.classList.add('HiLo');
    
    if(i==1)
        tmpp.classList.add('Omega');
    
    if(i==1)
        tmpp.classList.add('Halves');

    if(i==3)
        tmpp.classList.add('Advanced');

    div2[4].appendChild(tmpp);
}

div2[4].children[0].textContent = 'Classic'; //fazer a conta
div2[4].children[1].textContent = 'Omega'; //fazer a conta
div2[4].children[2].textContent = 'Halves';
div2[4].children[3].textContent = 'Advanced'; //fazer a conta


//add Valor ao Method

div2[5].classList.add('MethValue')

for (let i=0;i<4;i++)
{
    let tmpp = document.createElement('div');
    tmpp.classList.add('Meth')
    
    if(i==0)
        tmpp.classList.add('HiLo');
    
    if(i==1)
        tmpp.classList.add('Omega');
       
    if(i==1)
        tmpp.classList.add('Halves');

    if(i==3)
        tmpp.classList.add('Advanced');

    div2[5].appendChild(tmpp);
}

//Show Method Result
div2[5].children[0].textContent = 0;
div2[5].children[1].textContent = 0;
div2[5].children[2].textContent = 0;
div2[5].children[3].textContent = 0;



//True Counter//-----------------------------------
div2[6].classList.add('TrueMethod')
div2[6].textContent = 'True Counter'

div2[7].classList.add('TrueName')

for (let i=0;i<4;i++)
{
    let tmpp = document.createElement('div');
    tmpp.classList.add('True')
    
    if(i==0)
        tmpp.classList.add('HiLo');
    
    if(i==1)
        tmpp.classList.add('Omega');
    
    if(i==1)
        tmpp.classList.add('Halves');

    if(i==3)
        tmpp.classList.add('Advanced');

    div2[7].appendChild(tmpp);
}

div2[7].children[0].textContent = 'Classic'; //fazer a conta
div2[7].children[1].textContent = 'Omega'; //fazer a conta
div2[7].children[2].textContent = 'Halves';
div2[7].children[3].textContent = 'Advanced'; //fazer a conta


//add Valor ao Method

div2[8].classList.add('TrueValue')

for (let i=0;i<4;i++)
{
    let tmpp = document.createElement('div');
    tmpp.classList.add('True')
    
    if(i==0)
        tmpp.classList.add('HiLo');
    
    if(i==1)
        tmpp.classList.add('Omega');
       
    if(i==1)
        tmpp.classList.add('Halves');

    if(i==3)
        tmpp.classList.add('Advanced');

    div2[8].appendChild(tmpp);
}

//Show Method Result
div2[8].children[0].textContent = 0;
div2[8].children[1].textContent = 0;
div2[8].children[2].textContent = 0;
div2[8].children[3].textContent = 0;



//Event Listener no Documento de Press
const keypressDOC = (Evento) =>
{
    // let tp = div2[0].children[1]
    if(Evento.key==0)
        Eventer(div2[0].children[10])

    if(Evento.key>0 && Evento.key<10)
        Eventer(div2[0].children[Evento.key])

    //Habilitando p letras::
    if(Evento.key=='a' || Evento.key=='A')
        Eventer(div2[0].children[1])

    if(Evento.key=='j' || Evento.key=='J')
        Eventer(div2[0].children[11])

    if(Evento.key=='q' || Evento.key=='Q')
        Eventer(div2[0].children[12])
    
    if(Evento.key=='k' || Evento.key=='K')
        Eventer(div2[0].children[13])
}

//Event Listener no Documento de Press
document.addEventListener('keypress', ()=>keypressDOC(event))





