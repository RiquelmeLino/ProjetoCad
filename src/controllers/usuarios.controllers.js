

module.exports = {
    index(req, res){
        res.json({message:"Hello World from controller usuario"});
    },
    create(req,res)
{
    const{nome_usuario,idade_usuario,estadoc_usuario,cpf_usuario,cidade_usuario,estado_usuario} = req.body;
    
    let data= {};
    
    
}}