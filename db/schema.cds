//1 - Define o name space para utilizar no serviço ao ser importado
namespace cap.l2l.first.project;

// 2 - Define Entidade
entity Customers {
    // 2.1 - Define propriedades da entidade informando o tipo e o tamanho(se necessário)
    key id  : Integer;
    name    : String(100);
    age     : Integer;     

}

