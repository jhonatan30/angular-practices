import { MenuItem } from 'src/app/shared/models/menu-item.model';

export const RX_JS_MENU_ITEMS: MenuItem[] = [
    {
        label: 'SUBJECT',
        path: 'rxjs/subject',
        isActive: true
    },
    {
        label: 'ERROR HANDLING',
        path: 'rxjs/error-handling',
        isActive: true
    },
    {
        label: 'COMBINATION',
        path: 'rxjs/combination',
        isActive: true
    },
    {
        label: 'CONDITIONAL',
        path: 'rxjs/conditional',
        isActive: false
    },
    {
        label: 'MULTICASTING',
        path: 'rxjs/multicasting',
        isActive: false
    },
    {
        label: 'FILTERING',
        path: 'rxjs/filtering',
        isActive: false
    },
    {
        label: 'TRANSFORMATION',
        path: 'rxjs/transformation',
        isActive: false
    },
    {
        label: 'UTILITY',
        path: 'rxjs/utility',
        isActive: false
    }
];