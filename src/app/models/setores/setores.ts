export class Setores {
    private tipos = 
    [
        "1746/OUVIDORIA",
        "DRH",
        "GABINETE",
        "GERÊNCIA DE OPERAÇÕES",
        "GERÊNCIA DE PLANEJAMENTO",
        "OUTROS",
        "PROTOCOLO",
        "RECADASTRAMENTO",
        "SERVIÇO DE FISCALIZAÇÃO 1",
        "SERVIÇO DE FISCALIZAÇÃO 2",
        "SERVIÇO DE FISCALIZAÇÃO 3",
        "SGI",
        "SUBGERÊNCIA DE AUTOS",
        "SUBGERÊNCIA DE CADASTRO DE PROCESSOS",
        "SUBGERÊNCIA DE CADASTRO E LICENCIAMENTO",
        "SUBGERÊNCIA DE CONTROLE FISCAL",
        "SUBGERÊNCIA DE ESTUDOS, PROJETOS E DIVULGAÇÃO",
        "TRANSPORTE"
    ]

    
    public getTipos() : Array<string> {
        return this.tipos;
    }
    
}
