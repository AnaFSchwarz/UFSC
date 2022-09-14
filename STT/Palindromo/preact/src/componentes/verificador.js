const Verificador = (input) => {
    
    const palavra = input //localStorage.getItem(INPUT)
    
    const re = /[\W_]/g
    const lowRegStr = palavra.toLowerCase().replace(re, '')
    const reverseStr = lowRegStr.split('').reverse().join('')
    
        
    return (reverseStr === lowRegStr)
}

export default Verificador
