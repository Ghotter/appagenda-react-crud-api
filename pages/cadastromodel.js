import Api from '../paginas/Api';

export async function visualizarCadastro(id){
    try{
        const resultados = await Api.get(`/contatos/${id}/`);
        return resultados.data;

    }catch(error){
        console.log(error);
        return[];
    }
}