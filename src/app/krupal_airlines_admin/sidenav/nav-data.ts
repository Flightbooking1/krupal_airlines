import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    {
        routeLink: 'coupons',
        icon: 'fal fa-tags',
        label: 'Coupons',
        items: [
            {
                routeLink: 'coupons/list',
                label: 'List Coupons'
            },
            {
                routeLink: 'coupons/create',
                label: 'Create Coupons'
            }
        ]
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        // expanded: true,
        // items: [
        //     {
        //         routeLink: 'settings/profile',
        //         label: 'Profile'
        //     },
        //     {
        //         routeLink: 'settings/customize',
        //         label: 'Customize'
        //     }
        // ]
    },
    {
      routeLink: 'airport',
      icon: 'fal fa-plane-arrival',
      label: 'Airport',
      items: [
        {
            routeLink: 'airport/list',
            label: 'List Airport'
        },
        {
            routeLink: 'airport/create',
            label: 'Add Airport'
        }
    ]
  },
  {
    routeLink: 'flight',
    icon: 'fal fa-plane',
    label: 'Flight',
    items: [
      {
          routeLink: 'flight/list',
          label: 'List Flight'
      },
      {
          routeLink: 'flight/create',
          label: 'Add Flight'
      }
  ]
},
{
  routeLink: 'schedule',
  icon: 'fal fa-calendar-day',
  label: 'Schedule',
  items: [
    {
        routeLink: 'schedule/list',
        label: 'List Schedule'
    },
    {
        routeLink: 'schedule/create',
        label: 'Create Schedule'
    }
]
}
];
