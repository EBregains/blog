export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0a8b5f5c.js","app":"_app/immutable/entry/app.f12f3e0e.js","imports":["_app/immutable/entry/start.0a8b5f5c.js","_app/immutable/chunks/index.784545ef.js","_app/immutable/chunks/singletons.b90d2c24.js","_app/immutable/chunks/index.57be331d.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/entry/app.f12f3e0e.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.784545ef.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
