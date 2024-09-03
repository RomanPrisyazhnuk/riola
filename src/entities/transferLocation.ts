export interface TransferCountry {
    id: number
    name: string
    slug: string
    type: string | null
  }

export interface TransferLocation {
    id: number
    name: string
    slug: string
    type?: string | null
    parent: TransferCountry
    routes?: TransferLocation[]
  }

export const mockTransferLocations: TransferLocation[] = [
    {
        "id":4274,
        "name":"\u0411\u0435\u043b\u0435\u043a",
        "slug":"belek",
        "parent":{"id":4280,"name":"Antalya","slug":"antalya","type":"city"},
        "routes":[
            {
                "id":4273,
                "name":"\u0410\u0434\u0430\u043d\u0430",
                "slug":"adana",
                "type": null,
                "parent":{
                    "id":4247,
                    "name":"T\u00fcrkiye",
                    "slug":"turkiye",
                    "type": null
                }
            },
            {"id":4277,"name":"Aksaray","slug":"aksaray","type":null,"parent":{"id":4247,"name":"T\u00fcrkiye","slug":"turkiye","type":null}},{"id":4278,"name":"Amasya","slug":"amasya","type":null,"parent":{"id":4247,"name":"T\u00fcrkiye","slug":"turkiye","type":null}},{"id":4279,"name":"Ankara","slug":"ankara","type":null,"parent":{"id":4247,"name":"T\u00fcrkiye","slug":"turkiye","type":null}}
        ]
        },
    {
        "id":4273,
        "name":"\u0410\u0434\u0430\u043d\u0430",
        "slug":"adana",
        "parent":{"id":4247,"name":"T\u00fcrkiye","slug":"turkiye","type":"country"},"routes":[{"id":4274,"name":"\u0411\u0435\u043b\u0435\u043a","slug":"belek","type":null,"parent":{"id":4280,"name":"Antalya","slug":"antalya","type":null}},{"id":4275,"name":"Afyon","slug":"afyon","type":null,"parent":{"id":4247,"name":"T\u00fcrkiye","slug":"turkiye","type":null}},
    {"id":4276,"name":"A\u011fr\u0131","slug":"agri","type":null,"parent":{"id":4247,"name":"T\u00fcrkiye","slug":"turkiye","type":null}}]}
]  