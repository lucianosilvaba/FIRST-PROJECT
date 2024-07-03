//1 - Importa principal blibioteca para desenvolvimento CAP
const cds = require('@sap/cds')

//2 - Export através de um module para que o CAP entenda o que se deseja fazer
module.exports = async (srv) => {

    //1.1 - Realizando conexão com o banco de dados
    const db = await cds.connect.to('db');

    // 2.1 - Acessar as entidades para customização que podem ser executados com quatro trigers (READ, CREATE, UPDATE e DELETE)
    //2.1.1 - Podendo trabalhar com os eventos (before, on, after)

    srv.before('READ', 'Customers', (req) => {

        const data = req.data;

    });

    srv.on('READ', 'Customers', async (req) => {
        const data = req.data;

       //2.1.2 - Inserindo dados
       const response = await INSERT(data).into(db.entities.Customers);

    });

    srv.after('READ', 'Customers', (req) => {

        const data = req.data;

    });

}
