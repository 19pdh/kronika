import Kronikarz from 'kronikarz';

const k = new Kronikarz('../wpisy');

k.generateApi('../static');
k.generateRss('../static/rss.xml', {title: "Kronika 19PDH Puszcza", feed_url: "https://puszcza.netlify.app/rss.xml", site_url: "https://puszcza.netlify.app"} );
