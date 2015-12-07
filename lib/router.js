Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: "home"
});

/* Router.route('/torrents', {
	name: "browseTorrents"
});

Router.route('/requests', {
	name: "browseRequests"
});

Router.route('/recommendations', {
	name: "browseRecommendations"
});

Router.route('/forums', {
	name: "communityForums"
});

Router.route('/clubs', {
	name: "communityClubs"
});

Router.route('/blog', {
	name: "blog"
});

Router.route('/dashboard', {
	name: "dashBoard"
}); */
