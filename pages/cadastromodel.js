import Api from '../paginas/Api';

export async function visualizarCadastro(id,nome,fone,email){
    try{
        const resultados = await Api.get(`/contatos/${id}/`);
        return resultados.data;

    }catch(error){
        console.log(error);
        return[];
    }
} 
export async function cadastarcontatos(id,nome,fone,email){
    try{
        await Api.post(`/contatos/${id}/`,{
            id:id,
            nome:nom,
            fone:fone,
            email:fone
            
        });return 'sucessso';
    }catch(error){
        console.log(error);
        return[];
    }
}
export async function deletarcontatos(id, nome, fone, email){
    try{
         await Api.delete(`/contatos/${id}/`,{ 
            id:id,
            nome:nom,
            fone:fone,
            email:fone
        });
        return 'sucessso';

    }catch(error){
        console.log(error);
        return[];
    }
}
export async function alterarcontatos(id,nome,fone,email){
    try{
         await Api.put(`/contatos/${id}/`,{
            id:id,
            nome:nom,
            fone:fone,
            email:fone

        }
        );return 'sucessso';
        

    }catch(error){
        console.log(error);
        return[];
    }
}