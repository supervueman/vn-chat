module.exports = {
  routes: [
    {
      base_route_name: '/chats',
      route_dir_path: 'chat/routes'
    }
  ],
  associations: [
    {
      association_dir_path: 'chat/association'
    }
  ],
  swaggerPaths: [
    'model/chat.js',
    'routes/index.js',
  ]
};
