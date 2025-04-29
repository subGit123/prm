import {HttpResponse, http} from 'msw';
import {Banner} from '../models/banner.model';

const bannersData: Banner[] = [
  {
    id: 1,
    title: '배너 1 제목',
    description: '배너 1 설명',
    image: 'https://picsum.photos/id/111/1200/400',
    url: 'http://some.url',
    target: '_blank',
  },
  {
    id: 2,
    title: '배너 2 제목',
    description: '배너 2 설명',
    image: 'https://picsum.photos/id/222/1200/400',
    url: 'http://some.url',
    target: '_self',
  },
  {
    id: 3,
    title: '배너 3 제목',
    description: '배너 3 설명',
    image: 'https://picsum.photos/id/33/1200/400',
    url: 'http://some.url',
    target: '_blank',
  },
];

export const banners = http.get('http://localhost:7777/banners', () => {
  return HttpResponse.json(bannersData, {
    status: 200,
  });
});
