export type Level = {        //FIZ A TIPAGEM DE CADA ELEMENTO DOS OBJETOS DA ARRAY
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels: Level[] = [         // CRIEI UMA ARRAY COM AS OPÇÕES DE CLASSIFICAÇÃO, SENDO CADA UMA UM OBJETO.
    { title: 'Magreza', color: '#96a3ab', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#0ead69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#e2b036', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#c3423f', icon: 'down', imc: [30, 200] },
];

export const calculateImc = (heigth: number, weight: number) => {     //CRIEI A FUNÇÃO COM A LÓGICA PARA ACHAR O IMC
    const imc = weight / (heigth * heigth);

    for (let i in levels) {                               //PASSEI POR CADA OBJETO DA ARRAY PRA DESCOBRIR QUAL IMC SE ENCAIXA
        if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) { //IMC TINHA QUE SER MAIOR QUE O 1o ELEMENTO E MENOR QUE O 2o.
            let levelCopy: Level = {...levels[i]};
            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy
        }
    }
    return null;
};
