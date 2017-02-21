import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const beersList = [
            {
                title: 'Black djack',
                price: 123
            },
            {
                title: 'Ligth Xui',
                price: 345
            },
            {
                title: 'Ligth Red',
                price: 245
            }
        ];
        return { beersList };
    }
}
