import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import NestedListOptions from './NestedListOptions';

const menuItems = [
    {
        title: 'Mesas',
        path: '/mesas',
        children: []
    },
    {
        title: 'Productos',
        children: [
            { title: 'Venta', path: '/productos/ventas' },
            { title: 'Listado', path: '/productos/listado' }
        ]
    },
    {
        title: 'Reportes',
        path: '/',
        children: []
    }
];


export default function DrawerList() {
    return (
    <List sx={{width:'100%'}}>
        {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
                <NestedListOptions item={item}></NestedListOptions>
            </ListItem>
        ))}
    </List>)
}