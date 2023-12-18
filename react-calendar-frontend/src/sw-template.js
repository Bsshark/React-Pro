importScripts(
	"https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

workbox.loadModule("workbox-background-sync");
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

const cacheNetworkFirst = ["/api/auth/renew", "/api/events"];

registerRoute(({ request, url }) => {
	if (cacheNetworkFirst.includes(url.pathname)) return true;
}, new NetworkFirst());
/* 
registerRoute(
	({ request, url }) => url.pathname.startsWith("/api/auth/"),
	new NetworkFirst()
);*/

const bgSyncPlugin = new BackgroundSyncPlugin("posts-offline", {
	maxRetentionTime: 24 * 60,
});

const cacheFirst = [
	"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
	"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css",
];

registerRoute(({ request, url }) => {
	if (cacheFirst.includes(url.href)) return true;
}, new CacheFirst());

//Posteos offline

registerRoute(
	new RegExp("http://localhost:4000/api/events"),
	new NetworkOnly({
		plugins: [bgSyncPlugin],
	}),
	"POST"
);
registerRoute(
	new RegExp("http://localhost:4000/api/events"),
	new NetworkOnly({
		plugins: [bgSyncPlugin],
	}),
	"PUT"
);
registerRoute(
	new RegExp("http://localhost:4000/api/events"),
	new NetworkOnly({
		plugins: [bgSyncPlugin],
	}),
	"DELETE"
);
