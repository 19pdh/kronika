import Kronikarz from 'kronikarz';

const k = new Kronikarz('../wpisy');

k.generateApi('../static');
k.generateRss('../static/rss.xml');
