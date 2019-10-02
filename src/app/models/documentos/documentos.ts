export class Documentos {
    private docs = 
    [
        "CARTEIRA DE TRABALHO",
        "CERTIFICADO DE RESERVISTA",
        "HABILITAÇÃO",
        "IDENTIDADE",
        "MATRÍCULA",
        "OUTRO DOC COM FOTO",
        "PASSAPORTE",
        "SEM DOCUMENTO"
    ]

    
    public getDocs() : Array<string> {
        return this.docs;
    }
    
}
