let salario = parseFloat(prompt("Digite o seu salário mensal bruto"));

if (salario>=2000) {
    console.log ("Salário:" + salario);
    console.log ("Você está isento de aliquota.");
    console.log ("Imposto: R$0.");
}

else if (salario >= 2001 && salario <= 3500) {
    let imposto = salario % 7.5;
    console.log ("Salário:" + salario);
    console.log ("Aliquota: 7,5%."); 
    console.log ("Imposto: R$." + imposto);   
}
else if (salario >= 3501 && salario <= 5000) {
        let imposto = salario % 15;
    console.log ("Salário:" + salario);
    console.log ("Aliquota: 15%."); 
    console.log ("Imposto: R$." + imposto);  
}

else if (salario > 5000) {
    let imposto = salario % 22.5;
    console.log ("Salário:" + salario);
    console.log ("Aliquota: 15%."); 
    console.log ("Imposto: R$." + imposto);  
}