//1 - Importar o namespace
using { cap.l2l.first.project as db }  from '../db/schema';


//2 - Define um serviço
service Main {
    //1.1 Entidade como projeção
    entity Customers as projection on db.Customers;
    

}