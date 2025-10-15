export const paths = 
{
  home: '/home',
  item21: '/vax/items21',
  item23: '/vax/items23'
}


export const navigation =
    [
      {
        id: '1',
        text: 'ITEMS',
        expanded: true,
        path : paths.home,
        items: [
          {
            id: '1_1',
            text: 'ITEMS 21',
            expanded: true,
            path: paths.item21,
          },
          {
            id: '1_2',
            text: 'ITEMS 23',
            expanded: true,
            path: paths.item23,
          },
        ]
      }
    ]