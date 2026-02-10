export function currencyFormatter(mount: number):string{
    return new Intl.NumberFormat('es-AR',{
        style:'currency',
        currency:'ARS'  
    }).format(mount);
} 