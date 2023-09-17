import { Component } from '@angular/core';

export interface Stat {
  value: number;
  label: string;
}

export interface Item {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
  stats: Stat[] = [
    { label: '# of Users', value: 22 },
    { label: 'Revenue', value: 900 },
    { label: 'Reviews', value: 50 },
  ];
  items: Item[] = [
    {
      description: 'This is a great couch to sit on.',
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
    },
    {
      description: 'This is a great dresser to put your clothes in.',
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
    },
  ];
}
